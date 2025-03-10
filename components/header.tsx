"use client";

import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useStore } from "@/components/actions";

export default function Header({headerData}: {headerData: HeaderProps}) {
  const { isOpen, toggle, close } = useStore();

  const ref = useRef(null);
  useClickAway(ref, close);

  return (
    <AnimatePresence>
      <header
        className={`z-10 backdrop-blur-xl backdrop-brightness-100 sticky top-0 px-6 py-4 md:px-10 md:py-6 w-full shadow-md shadow-black ${isOpen && "bg-navy-light transition-all duration-[400ms] shadow-none"}`}
      >
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link href="#">
              <h1 className="text-2xl font-semibold text-green items-center">
                SV
              </h1>
            </Link>
          </motion.div>
          <div className="font-mono">
            <div className="hidden md:block">
              <ul className="flex text-sm gap-2.5 lg:gap-6 items-center">
                {headerData && <NavBar navbarData={headerData.navbar}/>}
                <Link href="#social" onClick={close} className="transition-all duration-350 hover:shadow-[3px_3px_0px_0px] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none hover:ring-green border border-green rounded px-4 py-2 text-green font-mono text-sm">Social</Link>
              </ul>
            </div>
            <div ref={ref} className="md:hidden">
              <Hamburger
                color="#64ffda"
                toggled={isOpen}
                size={20}
                toggle={toggle}
              />
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <ul className="text-center fixed left-0 shadow-4xl right-0 top-[5rem] py-8 flex flex-col gap-6 bg-navy-light">
                    {headerData && <NavBar navbarData={headerData.navbar}/>}
                    <Link href="#social" onClick={close} className="transition-all duration-350 hover:shadow-[3px_3px_0px_0px] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none hover:ring-green border border-green rounded px-4 py-2 text-green font-mono text-sm mt-6 mx-auto">Social</Link>
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </header>
    </AnimatePresence>
  );
}

function NavBar({navbarData}: {navbarData: NavbarProps[]}) {
  return (
    navbarData.map((item, index) => (
      <NavLink key={index} index={index} props={{ text: item.title, href: item.link }} isExternal={item.isExternal}/>
    ))
  )    
}
interface NavLinkProps {
  props: {
    text: string;
    href: string;
  };
  index: number;
  isExternal: boolean
}
function NavLink({ props, index, isExternal }: NavLinkProps) {
  const { text, href } = props;
  const { close } = useStore();

  return (
    <li>
      <Link
        onClick={close}
        href={href}
        className="drop-shadow-lg shadow-black p-2 text-font-primary hover:text-green"
        target={isExternal ? "_blank" : ""}
      >
        <span className="text-green">{index + 1}. </span>
        {text && text}
      </Link>
    </li>
  );
}

interface HeaderProps {
  navbar: NavbarProps[]
  button: NavbarProps
}

interface NavbarProps {
  id: number
  isExternal: boolean;
  link: string;
  title: string
}