export default function Container({
  children,
  className = "",
  size = "default",
}) {
  // Map sizes to Tailwind max-width classes
  const sizeClasses = {
    sm: "max-w-[78rem]", // custom size 78rem
    md: "max-w-5xl",
    lg: "max-w-7xl",
  };

  const maxWidthClass = sizeClasses[size] || "";

  return (
    <div className={`container mx-auto px-4 ${maxWidthClass} ${className}`}>
      {children}
    </div>
  );
}
