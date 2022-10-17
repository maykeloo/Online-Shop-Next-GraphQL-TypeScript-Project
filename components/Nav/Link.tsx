import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface NavLinkProps {
  children: ReactNode;
  pathName: string;
}

export const NavLink = ({ children, pathName: pathNameProp }: NavLinkProps) => {
  const { asPath } = useRouter();
  const pageActive = asPath.replace("/", "") === pathNameProp;
  const activeClass = pageActive ? "border-b-2 border-black p-4 flex items-center" : "border-b-2 border-transparent p-4 flex items-center";
  const desitnation = "/" + pathNameProp;
  return (
    <>
      <Link href={desitnation}>
        <span className={activeClass}><span>{children}</span></span>
      </Link>
    </>
  );
};
