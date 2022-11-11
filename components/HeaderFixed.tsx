import {
  HomeIcon,
  ShoppingBagIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

export const HeaderFixed = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heightFromTop = 150;
    window.addEventListener("scroll", () => {
      if (window.scrollY > heightFromTop) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);
  return (
    <>
      {visible && (
        <div className="bg-black flex gap-6 rounded-[50px] mx-auto text-white px-6 py-4 fixed justify-center bottom-4 z-10 left-1/2 translate-x-[-50%]">
          <Link href="/">
            <HomeIcon className="text-color-white w-6" />
          </Link>
          <Link href="/products/1">
            <ShoppingBagIcon className="text-color-white w-6" />
          </Link>
          <Link href="/about">
            <InformationCircleIcon className="text-color-white w-6" />
          </Link>
        </div>
      )}
    </>
  );
};
