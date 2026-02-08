"use client";
import React, { useEffect, useState } from "react";
import { useUserPreferences } from "../providers/UserPreferencesContext";
import { useTranslations } from "next-intl";

interface SectionNavigationProps {
  sections: { id: string; titleKey: string }[];
}

export const NavigationCourse = ({ sections }: SectionNavigationProps) => {
  const { fontSize, highContrast } = useUserPreferences();
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const t = useTranslations("NavigationCourse");

  const fontSizeStyles = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const navContrastStyles = highContrast
    ? "bg-yellow-400 text-white"
    : "bg-blue-950 text-white";

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80; // Dostosuj offset według potrzeb
      let currentSection = sections[0].id;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <nav className={`md:py-8 pt-3 pb-1 ${navContrastStyles} sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap space-x-2 md:space-x-5 justify-center">
          {sections.map((section) => (
            <li key={section.id} className="mb-2 sm:mb-0">
              <a
                href={`#${section.id}`}
                onClick={(event) => handleSmoothScroll(event, section.id)}
                className={`inline-flex items-center gap-2 px-2 md:px-4 py-1 md:py-2 font-medium ${
                  fontSizeStyles[fontSize]
                } ${
                  highContrast
                    ? "text-black border-b-2 border-transparent hover:border-black"
                    : "text-white border-b-2 border-transparent hover:border-[#87B4E8]"
                } ${
                  activeSection === section.id
                    ? "border-b-2 border-[#87B4E8]"
                    : ""
                }`}
              >
                {t(section.titleKey)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
