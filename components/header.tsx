'use client'
import { useState } from "react";
import { Button } from "./ui/button";
import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import { useRef } from "react";

export default function Header() {
    let [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    useClickAway(ref, () => setIsOpen(false));

    return (
        <nav className="px-10 py-8 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-green items-center">SV</h1>
            <div>
                <div className="hidden md:block">
                    <ul className="font-mono flex text-sm gap-6 items-center">
                        <NavBar />
                        <Button className="text-sm">Resume</Button>
                        </ul>
                </div>
                <div ref={ref} className="md:hidden">
                    <Hamburger color="#64ffda" toggled={isOpen} size={20} toggle={setIsOpen} />
                    {isOpen && (
                        <div className="fixed left-0 shadow-4xl right-0 top-[5rem] p-5 pt-0 bg-navy-light">
                            <NavBar />
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

function NavBar() {
    return (
        data.map(item => (
            <NavLink props={item} />
        ))
    )
}
interface NavLinkProps {
    props: {
        index: string;
        text: string;
        href: string;
    }
}
function NavLink({props} : NavLinkProps) {

    const {index, text, href} = props;
    
    return (
        <li>
            <a href={href} className="p-2 text-font-primary hover:text-green"><span className="text-green">{index}. </span>{text}</a>
        </li>
    )
}

const data = [
    {
        index: "01",
        text: "About",
        href: "#"
    },
    {
        index: "02",
        text: "Experience",
        href: "#"
    },  
    {
        index: "03",
        text: "Work",
        href: "#"
    },
    {
        index: "04",
        text: "Contact",
        href: "#"
    }
]
