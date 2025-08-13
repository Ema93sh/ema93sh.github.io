interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-4 mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 text-white shadow dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}
