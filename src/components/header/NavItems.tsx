"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hook/use-on-click-outside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const isAnyOpen = activeIndex !== null;

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };
    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  const navRef = React.useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES?.map((category, index) => {
        const handleChange = () => {
          if (activeIndex === index) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };
        const isOpen = index === activeIndex;

        const close = () => setActiveIndex(null);

        return (
          <NavItem
            key={`${category.label}-${index}`}
            category={category}
            isOpen={isOpen}
            close={close}
            handleOpen={handleChange}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
