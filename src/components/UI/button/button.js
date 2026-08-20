export default function Button({
  type = "button",
  className = "",
  style = {},
  onClick,
  children,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center cursor-pointer w-max px-12 rounded-3xl py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-primary bg-secondary  focus:ring-4 focus:ring-secondary-200 dark:focus:ring-secondary-900 hover:bg-secondary-800";

  return (
    <button
      type={type}
      className={`${baseClasses} ${className}`}
      style={style}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
