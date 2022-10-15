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
  const activeClass = pageActive ? "border border-white rounded-[50px] px-4 py-2 flex items-center" : "border border-transparent px-4 py-2 flex items-center";
  const desitnation = "/" + pathNameProp;
  return (
    <>
      <Link href={desitnation}>
        <span className={activeClass}><span>{children}</span></span>
      </Link>
    </>
  );
};
