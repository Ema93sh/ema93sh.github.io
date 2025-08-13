export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-colors dark:bg-gray-800 dark:text-gray-200"
    >
      {children}
    </span>
  );
}
