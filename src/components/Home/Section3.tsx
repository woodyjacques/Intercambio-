
function Section3() {
    return (
        <div>
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
        </div>
    );
}

export default Section3;