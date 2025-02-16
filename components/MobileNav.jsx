"use client"

import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Link from "next/link"
import {CiMenuFries} from "react-icons/ci"


const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
]

function MobileNav() {
    const pathname = usePathname()
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent"/>
        </SheetTrigger>

        <SheetContent className="flex flex-col">
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Joseph<span>.</span>
                </h1>
                </Link>
            </div>

            <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize text-xl hover:text-accent transition-all cursor-pointer`}
                        >
                            {link.name}
                    </Link>
                )
            })}
        </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav