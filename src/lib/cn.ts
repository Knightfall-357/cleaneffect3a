import { twMerge } from "tailwind-merge";

/**
 * Join conditional classes and resolve conflicting Tailwind utilities.
 *
 * This matters for responsive components: `inline-flex` from a base button and
 * `hidden md:inline-flex` from a breakpoint variant must not both reach the DOM.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return twMerge(classes.filter(Boolean).join(" "));
}
