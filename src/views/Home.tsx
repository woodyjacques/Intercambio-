import { useState } from 'react';
import logo from "../assets/logo.png";

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="font-inter bg-gradient-to-r from-gray-900 via-black to-gray-900 min-h-screen text-white">

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

            <section className="relative h-screen flex items-center justify-center text-center px-4">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-80"></div>
                <div className="z-10">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg">
                        Intercambia sin Límites
                    </h2>
                    <p className="text-xl sm:text-2xl md:text-3xl font-light mb-10 text-gray-300">
                        La mejor plataforma para intercambiar productos de forma rápida y segura.
                    </p>
                    <a href="/sesion" className="px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-lg sm:text-xl md:text-2xl rounded-full shadow-lg hover:opacity-90 transition transform hover:scale-105">
                        Descubre Más
                    </a>
                </div>
            </section>

            <section id="features" className="py-16 sm:py-20 container mx-auto text-center px-4">
                <h3 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-white">Características Clave</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12 px-4">
                    <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-800 to-black rounded-lg shadow-xl transform hover:scale-105 transition">
                        <h4 className="text-2xl sm:text-3xl font-semibold mb-4 text-orange-400">Intercambio Sencillo</h4>
                        <p className="text-gray-300 text-lg sm:text-xl">Experimenta un intercambio rápido y seguro con la última tecnología garantizando privacidad y confianza.</p>
                    </div>
                    <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-800 to-black rounded-lg shadow-xl transform hover:scale-105 transition">
                        <h4 className="text-2xl sm:text-3xl font-semibold mb-4 text-orange-400">Coincidencias Avanzadas con IA</h4>
                        <p className="text-gray-300 text-lg sm:text-xl">Nuestro sistema usa IA avanzada para emparejarte con los mejores intercambios posibles al instante.</p>
                    </div>
                    <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-800 to-black rounded-lg shadow-xl transform hover:scale-105 transition">
                        <h4 className="text-2xl sm:text-3xl font-semibold mb-4 text-orange-400">Comunidad Global</h4>
                        <p className="text-gray-300 text-lg sm:text-xl">Conéctate con comerciantes de todo el mundo. Rompe barreras, intercambia bienes globalmente.</p>
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="py-16 sm:py-20 bg-gradient-to-r from-gray-900 to-black text-center px-4">
                <div className="container mx-auto">
                    <h3 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-white">Cómo Funciona</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12 px-4">
                        <div className="p-6 sm:p-8 bg-gradient-to-tl from-gray-800 to-black rounded-lg shadow-xl transform hover:scale-105 transition">
                            <h4 className="text-2xl sm:text-3xl font-semibold mb-4 text-orange-400">Paso 1: Crea tu Cuenta</h4>
                            <p className="text-gray-300 text-lg sm:text-xl">Regístrate y únete a la plataforma de intercambio futurista. Es fácil y gratis.</p>
                        </div>
                        <div className="p-6 sm:p-8 bg-gradient-to-tl from-gray-800 to-black rounded-lg shadow-xl transform hover:scale-105 transition">
                            <h4 className="text-2xl sm:text-3xl font-semibold mb-4 text-orange-400">Paso 2: Publica tus Artículos</h4>
                            <p className="text-gray-300 text-lg sm:text-xl">Publica los artículos que deseas intercambiar y deja que nuestra IA te empareje con intercambios potenciales.</p>
                        </div>
                        <div className="p-6 sm:p-8 bg-gradient-to-tl from-gray-800 to-black rounded-lg shadow-xl transform hover:scale-105 transition">
                            <h4 className="text-2xl sm:text-3xl font-semibold mb-4 text-orange-400">Paso 3: Realiza el Intercambio</h4>
                            <p className="text-gray-300 text-lg sm:text-xl">Finaliza el intercambio de manera fluida con nuestro sistema de transacciones seguras.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20 bg-gradient-to-r from-black to-gray-900 text-center px-4">
                <div className="container mx-auto">
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 text-white">¿Listo para unirte al futuro del intercambio?</h3>
                    <a href="/sesion" className="px-10 py-4 sm:px-12 sm:py-5 bg-gradient-to-r from-orange-500 to-yellow-500 text-lg sm:text-2xl rounded-full shadow-lg hover:opacity-90 transition transform hover:scale-105">Empieza Ahora</a>
                </div>
            </section>

            <footer id="contact" className="bg-black py-10">
                <div className="container mx-auto text-center text-gray-400">
                    <p>&copy; 2024 TruequeMania. Todos los derechos reservados.</p>
                    <p>Contacto: <a href="mailto:support@truequemania.com" className="hover:text-white">support@truequemania.com</a></p>
                </div>
            </footer>

        </div>
    );
}

export default Home;
