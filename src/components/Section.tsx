interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-4 mb-6 bg-white/70 px-4 py-2 backdrop-blur dark:bg-gray-900/70">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}
