import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="bg-gray-800 p-4 z-50 fixed top-0  w-[100%] ">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold text-blue-400">Keshav Tiwari</div>
                    <div className="flex space-x-6">
                        {/* <NavLink to="/" className="hover:text-blue-400">Home</NavLink>
                        <NavLink to="projects" className="hover:text-blue-400">Projects</NavLink>
                        <NavLink to="skills" className="hover:text-blue-400">Skills</NavLink>
                        <NavLink to="contact" className="hover:text-blue-400">Contact</NavLink> */}

                        <NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-blue-400" : "hover:text-blue-400"} end > Home </NavLink>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? "border-b-2 border-blue-400" : "hover:text-blue-400"} > Projects </NavLink>
                        <NavLink to="/skills" className={({ isActive }) => isActive ? "border-b-2 border-blue-400" : "hover:text-blue-400"} > Skills </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "border-b-2 border-blue-400" : "hover:text-blue-400"} > Contact </NavLink>
                        <NavLink to="/blogs" className={({ isActive }) => isActive ? "border-b-2 border-blue-400" : "hover:text-blue-400"} > Blogs </NavLink>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header