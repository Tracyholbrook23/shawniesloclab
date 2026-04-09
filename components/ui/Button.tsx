import React from "react";

type ButtonVariant = "primary" | "outline" | "pink";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  target?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  target,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.97]";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-black text-white hover:opacity-80 hover:shadow-[0_4px_16px_rgba(0,0,0,0.18)]",
    outline: "border border-black text-black bg-transparent hover:bg-black hover:text-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]",
    pink: "bg-[#F472B6] text-white hover:bg-[#DB2777] hover:shadow-[0_4px_20px_rgba(244,114,182,0.35)]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
