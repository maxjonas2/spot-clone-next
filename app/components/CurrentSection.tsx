import { ReactNode } from "react";

export default ({ children }: { children: ReactNode }) => {
  return <div className="h-full pt-4">{children}</div>;
};
