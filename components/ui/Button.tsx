"use client";

import React from "react";
import { BOOKSY_URL, openBooksyWidget } from "@/lib/booksyWidget";

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
  onClick,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.97]";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-[#180D14] text-white hover:opacity-80 hover:shadow-[0_4px_16px_rgba(0,0,0,0.18)]",
    outline: "border border-[#180D14] text-[#180D14] bg-transparent hover:bg-[#180D14] hover:text-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]",
    pink: "bg-[#E0448E] text-white hover:bg-[#A81458] hover:shadow-[0_4px_20px_rgba(224,68,142,0.35)]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const isBooksy = href === BOOKSY_URL;
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
        onClick={(e) => {
          if (isBooksy) openBooksyWidget(e);
          onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
