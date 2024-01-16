"use client"
import Link from "next/link"

//import icons from react-icons for home, team, services, projects, blog, about, contact
import { FaHome } from "react-icons/fa"
import { FaUserFriends } from "react-icons/fa"
import { FaBriefcase } from "react-icons/fa"
import { FaProjectDiagram } from "react-icons/fa"
import { FaBlog } from "react-icons/fa"
import { FaInfoCircle } from "react-icons/fa"

import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"

const navItems = [
    {
        id: 1,
        name: "Home",
        link: "/",
        icon: <FaHome className="w-6 h-6" />
    },
    {
        id: 2,
        name: "Experts",
        link: "/experts",
        icon: <FaUserFriends className="w-6 h-6" />
    },
    {
        id: 3,
        name: "Services",
        link: "/services",
        icon: <FaBriefcase className="w-6 h-6" />
    },
    {
        id: 4,
        name: "Projects",
        link: "/projects",
        icon: <FaProjectDiagram className="w-6 h-6" />
    },
    {
        id: 5,
        name: "Blog",
        link: "/blog",
        icon: <FaBlog className="w-6 h-6" />
    },
    {
        id: 6,
        name: "About",
        link: "/about",
        icon: <FaInfoCircle className="w-6 h-6" />
    },


]
//tailwind modern stylish responsive navbar
const Navbar = () => {
    //sticky navbar but when scroll down it will be blured transparent

    return (
        <nav className={"px-4 navbar active backdrop-blur-sm sticky top-0 z-50"}>
            <div className="container mx-auto flex justify-between py-4 items-center">
                <Link href="/">
                    <p className="font-bold text-2xl lg:text-4xl text-white">DevWave</p>
                </Link>
                <div className="hidden lg:block">
                    <ul className="inline-flex">
                        {navItems.map((item, index) => (
                            <li key={index} className="px-4 hover:opacity-75 transition duration-300">
                                <Link href={item.link} className="flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300">
                                    {item.icon}
                                    <p className="text-white">{item.name}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => {
                            document.querySelector(".mobile-menu").classList.toggle("hidden");
                            document.querySelector(".mobile-menu").classList.toggle("flex");
                        }}
                        className="outline-none mobile-menu-button"
                    >
                        <FaBars className="w-6 h-6 text-white hover:text-gray-300" />
                    </button>
                </div>
            </div>
            {/* mobile menu */}
            <div className="hidden mobile-menu transition-all duration-300 ease-in-out">
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index} className="block px-4 py-2 text-white font-semibold hover:bg-gray-700 rounded-md">
                            <Link href={item.link} className="flex items-center transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300">
                                {item.icon}
                                <p className="transition duration-300 text-white hover:text-gray-300 ml-4">{item.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );


}

export default Navbar