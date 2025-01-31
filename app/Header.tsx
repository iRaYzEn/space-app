"use client"
import Image from "next/image"
import iconHamburger from "@/public/assets/shared/icon-hamburger.svg"
import iconClose from "@/public/assets/shared/icon-close.svg"
import logo from "@/public/assets/shared/logo.svg"
import Link from "next/link"
import { useState } from "react"


export default function Header() {
    let [isClicked, setIsClicked] = useState(false);

    function iconSwap() {
        setIsClicked(state => !state);
    }

    return (
        <header className="flex justify-between  items-center ml-800 mt-400">
            <Image className="" src={logo} alt="logo" />
            <nav className="text-white bg-transparent  py-600 pl-1600 mt-600 hidden md:block">
                <ul className="flex px-800 gap-600 mr-800 ">
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
            {
                isClicked ? <button onClick={iconSwap} className="mr-800 md:hidden block">
                    <Image src={iconClose} alt="icon close" /></button> :
                    <button className="mr-800 md:hidden block" onClick={iconSwap}>
                        <Image src={iconHamburger} alt="hamburger icon" />  </button>
            }
        </header>
    )
}
