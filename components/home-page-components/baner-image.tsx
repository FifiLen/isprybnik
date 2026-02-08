import Image from "next/image";

interface FullWidthBannerProps {
  imageUrl: string;
  altText: string;
  height?: number;
}

export default function FullWidthBanner({
  imageUrl,
  altText,
  height = 850,
}: FullWidthBannerProps) {
  return (
    <div className=" max-w-full p-20 rounded-md">
      <div className="relative w-full" style={{ height: `${height}px` }}>
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={altText}
          fill
          quality={100}
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}
