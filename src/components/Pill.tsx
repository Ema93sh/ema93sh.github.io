export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full bg-gray-100/80 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-200 transition-colors dark:bg-gray-800/60 dark:text-gray-200 dark:ring-gray-700"
    >
      {children}
    </span>
  );
}
