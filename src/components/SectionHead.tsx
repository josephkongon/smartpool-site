import type { ReactNode } from "react";

interface SectionHeadProps {
  eyebrow: ReactNode;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
}

export default function SectionHead({ eyebrow, title, children, center }: SectionHeadProps) {
  return (
    <div className={center ? "section-head center reveal" : "section-head reveal"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <div className="felt-underline"></div>
      {children && <p>{children}</p>}
    </div>
  );
}
