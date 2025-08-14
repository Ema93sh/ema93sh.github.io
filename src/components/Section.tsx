interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 mb-10">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-1.5 w-6 rounded-full bg-gradient-to-r from-blue-600 to-teal-500" />
        <h2 id={`${id}-title`} className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
