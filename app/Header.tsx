import Image from "next/image"
import Link from "next/link"

import logo from "@/public/assets/shared/logo.svg"

export default function Header() {
    return <header className="flex justify-between items-center ml-800">
        <Image className="mt-600" src={logo} alt="logo" />
        <nav className="text-white bg-transparent  py-600 pl-1600 mt-600">
                <ul className="flex px-800 gap-600 mr-800 ">
                    <li>
                        <Link className="opacity-100" href="/">00 HOME</Link>
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
