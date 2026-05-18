"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

type NavItem = {
  label: string;
  path: string;
};

const Navbar = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 10) {
        setVisible(true);
      } else if (currentY < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/product" },
    { label: "Process", path: "/process" },
    { label: "Partners", path: "/partners" },
    { label: "Contact", path: "/contact" },
  ];

  const half = Math.ceil(navLinks.length / 2);
  const leftLinks = navLinks.slice(0, half);
  const rightLinks = navLinks.slice(half);

  const NavLink = ({ item }: { item: NavItem }) => {
    const isActive = pathname === item.path;

    return (
      <li className="relative group list-none">
        <Link
          href={item.path}
          className={`font-body text-[0.74rem] tracking-[0.1em] uppercase no-underline transition-colors text-[11px] duration-200
            ${
              isActive
                ? "text-[#dbdbdb] font-medium"
                : "text-[#1a130c]/50 font-normal hover:text-[#1a130c]"
            }`}
        >
          {item.label}
        </Link>
        <span
          className={`
            absolute -bottom-[3px] left-0 h-px
            bg-[#d4622a]
            transition-all duration-300 ease-out
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}
          `}
        />
      </li>
    );
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-[60]
        flex items-center justify-between px-12 h-10
        bg-transparent backdrop-blur-md border-b border-black/[0.08]
        transition-transform duration-300 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <ul className="hidden md:flex items-center gap-9 m-0 p-0">
        {leftLinks.map((item) => (
          <NavLink key={item.path} item={item} />
        ))}
      </ul>

      <div className="absolute left-1/2 -translate-x-1/2 h-7 flex-shrink-0">
        <Image
          src="/Logo/Asset 5.png"
          alt="Logo"
          width={120}
          height={40}
          className="h-full w-auto object-contain"
          priority
        />
      </div>

      <ul className="hidden md:flex items-center gap-9 m-0 p-0">
        {rightLinks.map((item) => (
          <NavLink key={item.path} item={item} />
        ))}
      </ul>

      <div className="flex md:hidden flex-col gap-1.5 cursor-pointer ml-auto">
        <span className="block w-6 h-px bg-[#1a130c]" />
        <span className="block w-6 h-px bg-[#1a130c]" />
        <span className="block w-6 h-px bg-[#1a130c]" />
      </div>
    </nav>
  );
};

export default Navbar;
