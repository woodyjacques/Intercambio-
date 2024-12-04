
function Section1() {
    return (
        <div>
            <section className="relative h-screen flex items-center justify-center text-center px-4">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-80"></div>
                <div className="z-10">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg">
                        Intercambia sin Límites
                    </h2>
                    <p className="text-xl sm:text-2xl md:text-3xl font-light mb-10 text-gray-300">
                        La mejor plataforma para intercambiar productos de forma rápida y segura.
                    </p>
                    <a href="/login" className="px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-lg sm:text-xl md:text-2xl rounded-full shadow-lg hover:opacity-90 transition transform hover:scale-105">
                        Descubre Más
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Section1;