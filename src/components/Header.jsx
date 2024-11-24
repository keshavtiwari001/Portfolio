import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { href: '/', label: 'Home', id: 'home' },
        { href: 'projects', label: 'Projects', id: 'projects' },
        { href: 'skills', label: 'Skills', id: 'skills' },
        { href: 'contact', label: 'Contact', id: 'contact' },
        { href: 'blogs', label: 'Blogs', id: 'blogs' }
    ];

    const handleLinkClick = (id) => {
        setActiveLink(id);
        setIsMenuOpen(false);
    };

    const getLinkStyles = (id) =>
        activeLink === id ? "border-b-2 border-blue-400" : "hover:text-blue-400";

    return (
        <nav className="bg-gray-800 p-4 z-50 fixed top-0 w-full text-white">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-blue-400 cursor-pointer" onClick={() => useNavigate('/')}>Keshav Tiwari</div>

                    {/* Hamburger menu button - only visible on mobile */}
                    <button
                        className="lg:hidden text-white"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden lg:flex space-x-6">
                        {navLinks.map(({ href, label, id }) => (
                            <Link
                                key={id}
                                to={href}
                                className={getLinkStyles(id)}
                                onClick={() => handleLinkClick(id)}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
                    <div className="flex flex-col space-y-4">
                        {navLinks.map(({ href, label, id }) => (
                            <Link
                                key={id}
                                to={href}
                                className={getLinkStyles(id)}
                                onClick={() => handleLinkClick(id)}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;