export default function AboutEyebrow({ children }) {
  return (
    <p className="mb-5 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
      {children}<span aria-hidden="true" className="h-px w-16 bg-primary/70" />
    </p>
  );
}
