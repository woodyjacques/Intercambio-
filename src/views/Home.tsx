import { useState } from 'react';

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="font-agdasima bg-gradient-to-r from-purple-900 via-black to-blue-900 min-h-screen text-white">

            <header className="container mx-auto py-8 px-6 flex justify-between items-center">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                    NexChange
                </h1>
                <button
                    className="block md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <nav className="hidden md:flex space-x-6 text-xl md:text-2xl">
                    <a href="#features" className="hover:text-purple-400">Características</a>
                    <a href="#how-it-works" className="hover:text-purple-400">Cómo Funciona</a>
                    <a href="#contact" className="hover:text-purple-400">Contacto</a>
                </nav>
            </header>

            {isOpen && (
                <nav className="md:hidden bg-gradient-to-r from-blue-900 to-purple-900 p-6">
                    <ul className="space-y-4 text-xl">
                        <li><a href="#features" className="block text-white hover:text-purple-400">Características</a></li>
                        <li><a href="#how-it-works" className="block text-white hover:text-purple-400">Cómo Funciona</a></li>
                        <li><a href="#contact" className="block text-white hover:text-purple-400">Contacto</a></li>
                    </ul>
                </nav>
            )}

            <section className="relative h-screen flex items-center justify-center text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-50"></div>
                <div className="z-10">
                    <h2 className="text-7xl md:text-8xl font-extrabold mb-6">
                        Intercambia sin Límites
                    </h2>
                    <p className="text-3xl font-light mb-10">Una forma futurista de intercambiar bienes, rápida y segura.</p>
                    <a href="#features" className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-2xl rounded-full shadow-lg hover:opacity-90 transition">Descubre Más</a>
                </div>
                <div className="absolute inset-0 bg-abstract-pattern opacity-25"></div>
            </section>

            <section id="features" className="py-20 container mx-auto text-center">
                <h3 className="text-5xl font-bold mb-16">Características Clave</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
                    <div className="p-8 bg-gradient-to-br from-purple-800 to-blue-800 rounded-lg shadow-xl transform hover:scale-105 transition">
                        <h4 className="text-3xl font-semibold mb-4">Intercambio Sencillo</h4>
                        <p className="text-gray-300 text-xl">Experimenta un intercambio rápido y seguro con la última tecnología garantizando privacidad y confianza.</p>
                    </div>
                    <div className="p-8 bg-gradient-to-br from-blue-800 to-purple-800 rounded-lg shadow-xl transform hover:scale-105 transition">
                        <h4 className="text-3xl font-semibold mb-4">Coincidencias Avanzadas con IA</h4>
                        <p className="text-gray-300 text-xl">Nuestro sistema usa IA avanzada para emparejarte con los mejores intercambios posibles al instante.</p>
                    </div>
                    <div className="p-8 bg-gradient-to-br from-purple-800 to-blue-800 rounded-lg shadow-xl transform hover:scale-105 transition">
                        <h4 className="text-3xl font-semibold mb-4">Comunidad Global</h4>
                        <p className="text-gray-300 text-xl">Conéctate con comerciantes de todo el mundo. Rompe barreras, intercambia bienes globalmente.</p>
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="py-20 bg-black bg-opacity-75 text-center">
                <div className="container mx-auto">
                    <h3 className="text-5xl font-bold mb-16">Cómo Funciona</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
                        <div className="p-8 bg-gradient-to-tl from-purple-700 to-blue-700 rounded-lg shadow-xl transform hover:scale-105 transition">
                            <h4 className="text-3xl font-semibold mb-4">Paso 1: Crea tu Cuenta</h4>
                            <p className="text-gray-300 text-xl">Regístrate y únete a la plataforma de intercambio futurista. Es fácil y gratis.</p>
                        </div>
                        <div className="p-8 bg-gradient-to-tl from-blue-700 to-purple-700 rounded-lg shadow-xl transform hover:scale-105 transition">
                            <h4 className="text-3xl font-semibold mb-4">Paso 2: Publica tus Artículos</h4>
                            <p className="text-gray-300 text-xl">Publica los artículos que deseas intercambiar y deja que nuestra IA te empareje con intercambios potenciales.</p>
                        </div>
                        <div className="p-8 bg-gradient-to-tl from-purple-700 to-blue-700 rounded-lg shadow-xl transform hover:scale-105 transition">
                            <h4 className="text-3xl font-semibold mb-4">Paso 3: Realiza el Intercambio</h4>
                            <p className="text-gray-300 text-xl">Finaliza el intercambio de manera fluida con nuestro sistema de transacciones seguras.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-purple-800 to-blue-800 text-center">
                <div className="container mx-auto">
                    <h3 className="text-6xl font-bold mb-10">¿Listo para unirte al futuro del intercambio?</h3>
                    <a href="#contact" className="px-12 py-5 bg-black text-white text-2xl rounded-full shadow-lg hover:opacity-90 transition">Empieza Ahora</a>
                </div>
            </section>

            <footer id="contact" className="bg-black py-10">
                <div className="container mx-auto text-center text-gray-400">
                    <p>&copy; 2024 NexChange. Todos los derechos reservados.</p>
                    <p>Contacto: <a href="mailto:support@nexchange.com" className="hover:text-white">support@nexchange.com</a></p>
                </div>
            </footer>

        </div>
    );
}

export default Home;
