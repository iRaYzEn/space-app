import Image from "next/image"
import Link from "next/link"

import logo from "@/public/assets/shared/logo.svg"

export default function Header() {
    return <header className="flex justify-between items-center ">
        <Image src={logo} alt="logo" />
        <nav className="bg-white">
            <ul className="flex px-800 gap-600 ">
                <li>
                    <Link href="/">00 HOME</Link>
                </li>
                <li>
                    <Link href="./destination">01 DESTINATION</Link>
                </li>
                <li>
                    <Link href="./crew">02 CREW</Link>
                </li>
                <li>
                    <Link href="./technology">03 TECHNOLOGY</Link>
                </li>
            </ul>
        </nav>
    </header>
}
