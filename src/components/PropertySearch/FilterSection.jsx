export default function FilterSection({ title, icon: Icon, children }) {
  return (
    <div className="border-b border-foreground/10 py-6">
      <div className="mb-5 flex items-center gap-3">
        {Icon && <Icon className="h-4 w-4 text-primary" strokeWidth={1.5} />}

        <h3 className="font-sans text-[12px] font-medium uppercase tracking-[0.05em] text-foreground">
          {title}
        </h3>
      </div>

      {children}
    </div>
  );
}
