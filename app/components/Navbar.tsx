"use client"

import Link from "next/link"
import NavLink from "@/app/components/NavLink"
import Image from "next/image"
import PFLogoIcon from "@/public/printforge-logo-icon.svg"
import PFLogo from "@/public/printforge-logo.svg"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const pathname = usePathname()
    return (
        <header className="w-full bg-white">
            <nav className="flex justify-between px-6 py-4">
                <Link href="/">
                    <div className="relative cursor-pointer">
                        {/* Desktop Logo */}
                        <Image
                            src={PFLogo}
                            alt="PrintForge Logo"
                            className="w-[200px] h-auto hidden md:block"
                            loading="eager"
                        />
                        {/* Mobile Logo */}
                        <Image
                            src={PFLogoIcon}
                            alt="PrintForge Logo"
                            className="w-[40px] h-auto block md:hidden"
                            loading="eager"
                        />
                    </div>
                </Link>
                <ul className="flex items-center gap-2.5">
                    <li className="text-sm uppercase cursor-pointer">
                        <NavLink href="/3d-models" isActive={pathname.startsWith("/3d-models")}>
                            3D Models
                        </NavLink>
                    </li>
                    <li className="text-sm uppercase cursor-pointer">
                        <NavLink href="/about" isActive={pathname === "/about"}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}