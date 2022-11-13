import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="flex flex-grow max-w-screen-xl mx-auto min-h-screen">{children}</div>
      <Footer />
    </>
  );
};
