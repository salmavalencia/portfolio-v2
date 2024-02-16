"use client";

import { Button } from "./ui/button";
import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { create } from "zustand";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const useStore = create<Store>((set) => ({
  isOpen: false,
  toggle: () => set((state: any) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
}));

type Store = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
};

export default function Header() {
  const { isOpen, toggle, close } = useStore();

  const ref = useRef(null);
  useClickAway(ref, close);

  return (
    <AnimatePresence>
      <nav
        className={`z-10 backdrop-blur-xl backdrop-brightness-250 fixed px-6 py-4 md:px-10 md:py-8 w-full ${isOpen ? "bg-navy-light" : "shadow-lg shadow-black"}`}
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
                <NavBar />
                <Button className="text-sm">Resume</Button>
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
                    <NavBar />
                    <Button className="text-sm mt-6 mx-auto">Resume</Button>
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </AnimatePresence>
  );
}

function NavBar() {
  return data.map((item) => <NavLink props={item} />);
}
interface NavLinkProps {
  props: {
    index: string;
    text: string;
    href: string;
  };
}
function NavLink({ props }: NavLinkProps) {
  const { index, text, href } = props;
  const { close } = useStore();

  return (
    <li>
      <Link
        onClick={close}
        href={href}
        className="p-2 text-font-primary hover:text-green"
      >
        <span className="text-green">{index}. </span>
        {text}
      </Link>
    </li>
  );
}

const data = [
  {
    index: "01",
    text: "About",
    href: "#",
  },
  {
    index: "02",
    text: "Experience",
    href: "#",
  },
  {
    index: "03",
    text: "Work",
    href: "#",
  },
  {
    index: "04",
    text: "Contact",
    href: "#",
  },
];
