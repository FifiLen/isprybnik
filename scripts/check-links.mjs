import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:3002'; // Adjust port if needed
const VISITED = new Set();
const QUEUE = [BASE_URL];
const BROKEN_LINKS = [];

async function crawl() {
  console.log(`Starting crawl at ${BASE_URL}...`);

  while (QUEUE.length > 0) {
    const url = QUEUE.shift();

    if (VISITED.has(url)) continue;
    VISITED.add(url);

    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        console.error(`❌ Broken link: ${url} (Status: ${response.status})`);
        BROKEN_LINKS.push({ url, status: response.status });
        continue;
      }

      console.log(`✅ Checked: ${url}`);
      
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('text/html')) {
        continue;
      }

      const html = await response.text();
      const hrefs = extractHrefs(html);

      for (const href of hrefs) {
        const absoluteUrl = resolveUrl(href, url);
        if (absoluteUrl && isInternal(absoluteUrl) && !VISITED.has(absoluteUrl) && !QUEUE.includes(absoluteUrl)) {
          QUEUE.push(absoluteUrl);
        }
      }

    } catch (error) {
      console.error(`❌ Error fetching ${url}:`, error.message);
      BROKEN_LINKS.push({ url, error: error.message });
    }
  }

  console.log('\n--- Scan Complete ---');
  if (BROKEN_LINKS.length === 0) {
    console.log('🎉 No broken links found!');
  } else {
    console.error(`Found ${BROKEN_LINKS.length} broken links:`);
    BROKEN_LINKS.forEach(link => console.error(`${link.status || link.error} - ${link.url}`));
    process.exit(1);
  }
}

function extractHrefs(html) {
  const hrefs = [];
  const regex = /href=["']([^"']+)["']/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    hrefs.push(match[1]);
  }
  return hrefs;
}

function resolveUrl(href, baseUrl) {
  if (href.startsWith('http')) return href;
  if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return null;
  
  try {
    return new URL(href, baseUrl).href;
  } catch {
    return null;
  }
}

function isInternal(url) {
  return url.startsWith(BASE_URL);
}

crawl();
