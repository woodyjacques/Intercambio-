import { useState } from 'react';
import logo from "../../assets/logo.png";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <header className="container mx-auto py-8 px-6 flex justify-between items-center">
                <a href="/sesion">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover"
                    />
                </a>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest text-white">
                    TruequeMania
                </h1>
                <button
                    className="block md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <nav className="hidden md:flex space-x-6 text-lg md:text-2xl">
                    <a href="#features" className="hover:text-orange-400">Características</a>
                    <a href="#how-it-works" className="hover:text-orange-400">Cómo Funciona</a>
                    <a href="#contact" className="hover:text-orange-400">Contacto</a>
                </nav>
            </header>

            {isOpen && (
                <nav className="md:hidden bg-gradient-to-r from-black to-gray-900 p-6">
                    <ul className="space-y-4 text-lg">
                        <li><a href="#features" className="block text-white hover:text-orange-400">Características</a></li>
                        <li><a href="#how-it-works" className="block text-white hover:text-orange-400">Cómo Funciona</a></li>
                        <li><a href="#contact" className="block text-white hover:text-orange-400">Contacto</a></li>
                    </ul>
                </nav>
            )}

        </div>
    );
}

export default Header;