"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Type,
  Palette,
  Contrast,
  Underline,
  Space,
  MousePointerClick,
  Accessibility,
} from "lucide-react";

interface AccessibilitySettings {
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  wordSpacing: number;
  fontFamily: string;
  highContrast: boolean;
  invertColors: boolean;
  grayscale: boolean;
  underlineLinks: boolean;
  highlightLinks: boolean;
  cursorSize: "normal" | "large";
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 100,
  lineHeight: 1.5,
  letterSpacing: 0,
  wordSpacing: 0,
  fontFamily: "default",
  highContrast: false,
  invertColors: false,
  grayscale: false,
  underlineLinks: false,
  highlightLinks: false,
  cursorSize: "normal",
};

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] =
    useState<AccessibilitySettings>(defaultSettings);

  useEffect(() => {
    const savedSettings = localStorage.getItem("accessibilitySettings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  useEffect(() => {
    applySettings();
    localStorage.setItem("accessibilitySettings", JSON.stringify(settings));
  }, [settings]);

  const togglePanel = () => setIsOpen(!isOpen);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K],
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const applySettings = () => {
    document.documentElement.style.setProperty(
      "--font-size-multiplier",
      `${settings.fontSize}%`,
    );
    document.documentElement.style.setProperty(
      "--line-height",
      settings.lineHeight.toString(),
    );
    document.documentElement.style.setProperty(
      "--letter-spacing",
      `${settings.letterSpacing}px`,
    );
    document.documentElement.style.setProperty(
      "--word-spacing",
      `${settings.wordSpacing}px`,
    );
    document.documentElement.style.setProperty(
      "--font-family",
      settings.fontFamily === "default" ? "inherit" : settings.fontFamily,
    );
    document.documentElement.classList.toggle(
      "high-contrast",
      settings.highContrast,
    );
    document.documentElement.classList.toggle(
      "invert-colors",
      settings.invertColors,
    );
    document.documentElement.classList.toggle("grayscale", settings.grayscale);
    document.documentElement.classList.toggle(
      "underline-links",
      settings.underlineLinks,
    );
    document.documentElement.classList.toggle(
      "highlight-links",
      settings.highlightLinks,
    );
    document.documentElement.classList.toggle(
      "large-cursor",
      settings.cursorSize === "large",
    );
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={togglePanel}
        variant="outline"
        size="icon"
        className="bg-blue-500"
      >
        <Accessibility className="h-4 w-4 text-white hover:text-black" />
        <span className="sr-only">Przełącz Panel Dostępności</span>
      </Button>
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-80 rounded-lg border bg-background p-4 shadow-lg">
          <h2 className="mb-4 text-lg font-semibold">Ustawienia Dostępności</h2>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            <div>
              <Label htmlFor="font-size" className="flex items-center">
                <Type className="h-4 w-4 mr-2" />
                Rozmiar Czcionki
              </Label>
              <Slider
                id="font-size"
                min={75}
                max={200}
                step={25}
                value={[settings.fontSize]}
                onValueChange={([value]) => updateSetting("fontSize", value)}
              />
            </div>
            <div>
              <Label htmlFor="line-height" className="flex items-center">
                <Space className="h-4 w-4 mr-2" />
                Wysokość Linii
              </Label>
              <Slider
                id="line-height"
                min={1}
                max={2}
                step={0.1}
                value={[settings.lineHeight]}
                onValueChange={([value]) => updateSetting("lineHeight", value)}
              />
            </div>
            <div>
              <Label htmlFor="letter-spacing" className="flex items-center">
                <Space className="h-4 w-4 mr-2" />
                Odstęp Między Literami
              </Label>
              <Slider
                id="letter-spacing"
                min={0}
                max={10}
                step={1}
                value={[settings.letterSpacing]}
                onValueChange={([value]) =>
                  updateSetting("letterSpacing", value)
                }
              />
            </div>
            <div>
              <Label htmlFor="word-spacing" className="flex items-center">
                <Space className="h-4 w-4 mr-2" />
                Odstęp Między Słowami
              </Label>
              <Slider
                id="word-spacing"
                min={0}
                max={10}
                step={1}
                value={[settings.wordSpacing]}
                onValueChange={([value]) => updateSetting("wordSpacing", value)}
              />
            </div>
            <div>
              <Label htmlFor="font-family" className="flex items-center">
                <Type className="h-4 w-4 mr-2" />
                Rodzina Czcionek
              </Label>
              <Select
                value={settings.fontFamily}
                onValueChange={(value) => updateSetting("fontFamily", value)}
              >
                <SelectTrigger id="font-family">
                  <SelectValue placeholder="Wybierz czcionkę" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Domyślna</SelectItem>
                  <SelectItem value="Arial, sans-serif">Arial</SelectItem>
                  <SelectItem value="Verdana, sans-serif">Verdana</SelectItem>
                  <SelectItem value="Tahoma, sans-serif">Tahoma</SelectItem>
                  <SelectItem value="'Times New Roman', serif">
                    Times New Roman
                  </SelectItem>
                  <SelectItem value="Georgia, serif">Georgia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="high-contrast" className="flex items-center">
                <Contrast className="h-4 w-4 mr-2" />
                Wysoki Kontrast
              </Label>
              <Switch
                id="high-contrast"
                checked={settings.highContrast}
                onCheckedChange={(checked) =>
                  updateSetting("highContrast", checked)
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="invert-colors" className="flex items-center">
                <Palette className="h-4 w-4 mr-2" />
                Odwróć Kolory
              </Label>
              <Switch
                id="invert-colors"
                checked={settings.invertColors}
                onCheckedChange={(checked) =>
                  updateSetting("invertColors", checked)
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="grayscale" className="flex items-center">
                <Palette className="h-4 w-4 mr-2" />
                Skala Szarości
              </Label>
              <Switch
                id="grayscale"
                checked={settings.grayscale}
                onCheckedChange={(checked) =>
                  updateSetting("grayscale", checked)
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="underline-links" className="flex items-center">
                <Underline className="h-4 w-4 mr-2" />
                Podkreśl Linki
              </Label>
              <Switch
                id="underline-links"
                checked={settings.underlineLinks}
                onCheckedChange={(checked) =>
                  updateSetting("underlineLinks", checked)
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="highlight-links" className="flex items-center">
                <Underline className="h-4 w-4 mr-2" />
                Podświetl Linki
              </Label>
              <Switch
                id="highlight-links"
                checked={settings.highlightLinks}
                onCheckedChange={(checked) =>
                  updateSetting("highlightLinks", checked)
                }
              />
            </div>
            <div>
              <Label htmlFor="cursor-size" className="flex items-center">
                <MousePointerClick className="h-4 w-4 mr-2" />
                Rozmiar Kursora
              </Label>
              <Select
                value={settings.cursorSize}
                onValueChange={(value: "normal" | "large") =>
                  updateSetting("cursorSize", value)
                }
              >
                <SelectTrigger id="cursor-size">
                  <SelectValue placeholder="Wybierz rozmiar kursora" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normalny</SelectItem>
                  <SelectItem value="large">Duży</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <Button onClick={resetSettings} variant="outline">
              Resetuj Ustawienia
            </Button>
            <Button onClick={togglePanel} variant="default">
              Zamknij
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
