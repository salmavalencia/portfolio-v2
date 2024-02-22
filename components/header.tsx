"use client";

import { Button } from "./ui/button";
import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useStore } from "@/components/actions";

export default function Header() {
  const { isOpen, toggle, close } = useStore();

  const ref = useRef(null);
  useClickAway(ref, close);

  return (
    <AnimatePresence>
      <header
        className={`z-10 backdrop-blur-xl backdrop-brightness-100 sticky top-0 px-6 py-4 md:px-10 md:py-8 w-full shadow-lg shadow-black ${isOpen && "bg-navy-light transition-all duration-[400ms] shadow-none"}`}
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
      </header>
    </AnimatePresence>
  );
}

function NavBar() {
  return data.map((item, index) => (
    <NavLink key={index} index={index} props={item} />
  ));
}
interface NavLinkProps {
  props: {
    text: string;
    href: string;
  };
  index: number;
}
function NavLink({ props, index }: NavLinkProps) {
  const { text, href } = props;
  const { close } = useStore();

  return (
    <li>
      <Link
        onClick={close}
        href={href}
        className="drop-shadow-lg shadow-black p-2 text-font-primary hover:text-green"
      >
        <span className="text-green">{index + 1}. </span>
        {text}
      </Link>
    </li>
  );
}

const data = [
  {
    text: "About",
    href: "#",
  },
  {
    text: "Experience",
    href: "#",
  },
  {
    text: "Work",
    href: "#",
  },
  {
    text: "Contact",
    href: "#",
  },
];
