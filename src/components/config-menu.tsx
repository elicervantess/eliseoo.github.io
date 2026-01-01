"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Settings, Sun, Moon, Monitor, Languages, Check } from "lucide-react";
import { useTheme } from "@/contexts/theme-provider";
import { useLanguage, type Language } from "@/contexts/language-provider";
import { useTranslations } from "@/lib/i18n";

export function ConfigMenu() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const t = useTranslations(language);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className="border-fg-muted text-fg-muted hover:border-fg hover:text-fg focus-visible:ring-fg-link focus-visible:ring-offset-bg rounded-none border px-6 py-3 text-lg transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          aria-label={t.nav.config}
        >
          <Settings className="inline h-5 w-5" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="border-bg-light bg-bg-dark animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 z-50 min-w-55 overflow-hidden rounded-lg border p-1 shadow-lg"
          sideOffset={5}
          align="end"
        >
          <DropdownMenu.Label className="text-fg-muted px-2 py-1.5 text-xs font-semibold">
            {t.config.theme}
          </DropdownMenu.Label>

          <DropdownMenu.RadioGroup
            value={theme}
            onValueChange={(v) => setTheme(v as "dark" | "light" | "system")}
          >
            <DropdownMenu.RadioItem
              value="light"
              className="text-fg hover:bg-bg-light focus:bg-bg-light relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              <Sun className="mr-2 h-4 w-4" />
              <span>{t.config.themeLight}</span>
              <DropdownMenu.ItemIndicator className="ml-auto">
                <Check className="h-4 w-4" />
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>

            <DropdownMenu.RadioItem
              value="dark"
              className="text-fg hover:bg-bg-light focus:bg-bg-light relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              <Moon className="mr-2 h-4 w-4" />
              <span>{t.config.themeDark}</span>
              <DropdownMenu.ItemIndicator className="ml-auto">
                <Check className="h-4 w-4" />
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>

            <DropdownMenu.RadioItem
              value="system"
              className="text-fg hover:bg-bg-light focus:bg-bg-light relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              <Monitor className="mr-2 h-4 w-4" />
              <span>{t.config.themeSystem}</span>
              <DropdownMenu.ItemIndicator className="ml-auto">
                <Check className="h-4 w-4" />
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Separator className="bg-bg-light my-1 h-px" />

          <DropdownMenu.Label className="text-fg-muted px-2 py-1.5 text-xs font-semibold">
            {t.config.language}
          </DropdownMenu.Label>

          <DropdownMenu.RadioGroup
            value={language}
            onValueChange={(v) => setLanguage(v as Language)}
          >
            <DropdownMenu.RadioItem
              value="en"
              className="text-fg hover:bg-bg-light focus:bg-bg-light relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              <Languages className="mr-2 h-4 w-4" />
              <span>{t.config.languageEnglish}</span>
              <DropdownMenu.ItemIndicator className="ml-auto">
                <Check className="h-4 w-4" />
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>

            <DropdownMenu.RadioItem
              value="es"
              className="text-fg hover:bg-bg-light focus:bg-bg-light relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              <Languages className="mr-2 h-4 w-4" />
              <span>{t.config.languageSpanish}</span>
              <DropdownMenu.ItemIndicator className="ml-auto">
                <Check className="h-4 w-4" />
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>

            <DropdownMenu.RadioItem
              value="pt"
              className="text-fg hover:bg-bg-light focus:bg-bg-light relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              <Languages className="mr-2 h-4 w-4" />
              <span>{t.config.languagePortuguese}</span>
              <DropdownMenu.ItemIndicator className="ml-auto">
                <Check className="h-4 w-4" />
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
