import type { HTMLAttributes } from "react";
export function Container({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={`max-w-7xl mx-auto ${props.className ?? ''}`}>
      {children}
    </div>
  );
}
