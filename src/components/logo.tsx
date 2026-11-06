import Image from "next/image";

import { cn } from "@/lib/cn";

/**
 * CleanEffect logo rendered from the supplied brand PNG.
 *
 * Original: /public/brand/cleaneffect-logo.png
 * Display asset: the same PNG, cropped to its artwork so the logo has a stable
 * intrinsic ratio and never stretches the navigation or footer on a phone.
 */
export const LOGO_SRC = "/brand/cleaneffect-logo-cropped.png";

const heights = {
  sm: "h-7 sm:h-8",
  md: "h-8 sm:h-9",
  lg: "h-9 sm:h-11",
} as const;

type LogoProps = {
  className?: string;
  /** "light" places the logo on a white badge for dark backgrounds. */
  tone?: "dark" | "light";
  size?: keyof typeof heights;
  priority?: boolean;
};

export function Logo({ className, tone = "dark", size = "md", priority = false }: LogoProps) {
  const artwork = (
    <Image
      src={LOGO_SRC}
      alt="CleanEffect"
      width={1670}
      height={654}
      priority={priority}
      unoptimized
      sizes="180px"
      className={cn("block w-auto shrink-0", heights[size])}
    />
  );

  if (tone === "light") {
    return (
      <span
        className={cn(
          "inline-flex max-w-full rounded-xl bg-white px-3 py-2 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)] ring-1 ring-white/60 sm:rounded-2xl sm:px-3.5 sm:py-2.5",
          className,
        )}
      >
        {artwork}
      </span>
    );
  }

  return <span className={cn("inline-flex max-w-full", className)}>{artwork}</span>;
}
