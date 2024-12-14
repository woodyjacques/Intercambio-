function Perfil() {
    return (
        <div className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden">
            {/* Encabezado */}
            <div className="flex flex-col sm:flex-row items-center bg-blue-500 text-white p-6">
                <img
                    className="w-24 h-24 rounded-full border-4 border-white mb-4 sm:mb-0 sm:mr-4"
                    src="https://via.placeholder.com/150"
                    alt="Foto de perfil"
                />
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-bold">Nombre del Usuario</h1>
                    <p className="text-sm">email@example.com</p>
                </div>
            </div>

            {/* Información del perfil */}
            <div className="p-6">
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Biografía</h2>
                    <p className="text-gray-700">
                        Esta es una breve descripción del usuario. Aquí puede ir algo sobre sus
                        intereses o cualquier otro dato relevante.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <h3 className="text-lg font-semibold">Intercambios Completados</h3>
                        <p className="text-2xl font-bold text-blue-500">12</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <h3 className="text-lg font-semibold">Puntuación</h3>
                        <p className="text-2xl font-bold text-yellow-500">4.8/5</p>
                    </div>
                </div>
            </div>

            {/* Artículos publicados */}
            <div className="p-6 border-t">
                <h2 className="text-lg font-semibold mb-4">Artículos Publicados</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Ejemplo de artículo */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                        <img
                            className="w-full h-32 object-cover rounded-lg mb-2"
                            src="https://via.placeholder.com/150"
                            alt="Artículo"
                        />
                        <h3 className="text-md font-semibold">Nombre del Artículo</h3>
                        <p className="text-sm text-gray-600">
                            Breve descripción del artículo. Categoría.
                        </p>
                    </div>
                    {/* Repite este bloque para cada artículo */}
                </div>
            </div>
        </div>
    );
}

export default Perfil;
