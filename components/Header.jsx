"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const Header = () => {
  const navlinks = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/posts",
      title: "Posts",
    },
    {
      href: "/create-post",
      title: "Create Post",
    },
  ];
  const pathname = usePathname();

  return (
    <>
      <main className="header px-5 py-2 h-[65px] flex items-center justify-between border-b-[1px]">
        <div className="logodiv">
          <Link href="/">
            <div className="logo bg-zinc-900 text-slate-200 px-4 py-2 rounded-md w-fit">
              A
            </div>
          </Link>
        </div>
        <div className="right_menu items-center flex">
          <ul className="flex items-center gap-3">
            {navlinks.map((link, index) => (
              <li
                key={index}
                className={` ${
                  pathname === link.href ? "text-slate-900" : "text-zinc-400"
                }`}
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Header;
