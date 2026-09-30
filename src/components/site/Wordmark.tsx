import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <span className={cn("wordmark", `wordmark--${size}`, className)}>
      <span className="wordmark-top">
        EMBROWERMENT<sup>®</sup>
      </span>
      <span className="wordmark-rule" aria-hidden="true" />
      <span className="wordmark-sub">FOUNDATION</span>
    </span>
  );
}
