"use client";

type ButtonProps = {
  variant: "normal" | "ghost";
  type: string;
  children: React.ReactNode;
  attrb: React.ButtonHTMLAttributes<HTMLButtonElement>;
  url: string;
  classess: string;
  onClick: () => void;
};

export default function Button({
  variant = "normal",
  type = "button",
  children,
  onClick,
  url,
  classess,
  ...attrb
}: ButtonProps) {
  if (type === "button") {
    return (
      <button onClick={onClick} {...attrb} className={classess}>
        {children}
      </button>
    );
  }

  if (type === "anchor") {
    return (
      <a href={url} className={classess} {...attrb}>
        {children}
      </a>
    );
  }
}
