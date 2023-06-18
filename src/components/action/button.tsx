"use client";

type ButtonProps = {
  variant?: "normal" | "ghost";
  type?: "button" | "link";
  children: React.ReactNode;
  attrb?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  url?: string;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  variant = "normal",
  type = "button",
  children,
  onClick,
  url,
  className,
  ...attrb
}: ButtonProps) {
  if (type === "button") {
    return (
      <button onClick={onClick} {...attrb} className={className}>
        {children}
      </button>
    );
  }

  if (type === "link") {
    return (
      <a href={url} className={className} {...attrb}>
        {children}
      </a>
    );
  }
}
