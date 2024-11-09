
function Section2(){
    return(
        <div>
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
        </div>
    );
}

export default Section2;