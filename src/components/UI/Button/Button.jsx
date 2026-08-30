import Link from "next/link";

const styles = {
  primary:
    "rounded-[4px] bg-primary px-6 py-[14px] font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-background transition-colors duration-200 hover:bg-primary-light",
  secondary:
    "min-w-[160px] rounded-[4px] border border-foreground/30 bg-background/10 px-7 py-[16px] font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-foreground backdrop-blur-[2px] transition-all duration-300 hover:border-primary hover:text-primary",
  tertiary:
    "min-w-[190px] rounded-[4px] border border-primary/40 px-7 py-[15px] font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-primary transition-all duration-300 hover:bg-primary hover:text-background",
};

export const ButtonLink = ({
  href,
  type = "primary",
  className = "",
  children,
  ...props
}) => {
  return (
    <Link href={href} className={`${styles[type]} ${className}`} {...props}>
      {children}
    </Link>
  );
};

export const Button = ({
  type = "primary",
  className = "",
  children,
  ...props
}) => {
  return (
    <button type="button" className={`${styles[type]} ${className}`} {...props}>
      {children}
    </button>
  );
};
