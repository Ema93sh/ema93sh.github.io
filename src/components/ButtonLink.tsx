import React from "react";

type ButtonLinkProps = React.PropsWithChildren<{
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  variant?: "neutral" | "primary";
}>;

export function ButtonLink({
  href,
  children,
  className,
  target,
  rel,
  variant = "neutral",
}: ButtonLinkProps) {
  const base =
    "inline-flex w-fit items-center rounded-xl px-4 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black"
      : "border border-gray-200 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800";
  return (
    <a href={href} target={target} rel={rel} className={`${base} ${styles} ${className ?? ""}`}>
      {children}
    </a>
  );
}

