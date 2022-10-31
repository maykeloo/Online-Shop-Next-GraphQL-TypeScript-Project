import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="w-full xl:px-0 p-4 gap-6 flex flex-col sm:flex-row">
      {children}
    </main>
  );
};
