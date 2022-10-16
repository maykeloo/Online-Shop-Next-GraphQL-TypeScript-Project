import { HeaderFixed } from "./HeaderFixed";
import { NavLink } from "./Nav/Link";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {

  return (
    <header>
      <nav className="bg-black cursor-pointer flex justify-center gap-2 rounded-xl my-4 max-w-7xl mx-auto text-white px-6 py-4">
        <NavLink pathName="">Głowna</NavLink>
        <NavLink pathName="about">O nas</NavLink>
        <NavLink pathName="products/1">Produkty</NavLink>
      </nav>
      <HeaderFixed/>
    </header>
  );
};
