"use client";

import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/cn";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector / Seletor de idioma"
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border border-brand-200/90 bg-white/90 p-0.5 shadow-sm backdrop-blur",
        className,
      )}
    >
      {(["pt", "en"] as const).map((option) => {
        const selected = locale === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLocale(option)}
            aria-pressed={selected}
            aria-label={option === "pt" ? "Mudar para Português" : "Switch to English"}
            className={cn(
              "flex h-6 min-w-7 items-center justify-center rounded-full px-1.5 text-[10px] font-bold uppercase tracking-[0.04em] transition-all duration-300 sm:h-7 sm:min-w-9 sm:px-2 sm:text-[11px]",
              selected
                ? "bg-brand-950 text-white shadow-sm"
                : "text-slate-600 hover:bg-brand-50 hover:text-brand-950",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
