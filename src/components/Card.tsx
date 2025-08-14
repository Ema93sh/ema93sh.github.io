import React from "react";

type CardProps = React.PropsWithChildren<{
  className?: string;
}>;

export function Card({ children, className }: CardProps) {
  const base =
    "rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/60";
  return <div className={`${base} ${className ?? ""}`}>{children}</div>;
}

