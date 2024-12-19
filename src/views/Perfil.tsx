import { useState } from "react";

function Perfil() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="mt-14 bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md flex justify-center items-center min-h-screen">
            <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <div className="flex justify-end px-4 pt-4 relative">
                    <button
                        onClick={toggleDropdown}
                        className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                        type="button"
                    >
                        <span className="sr-only">Open dropdown</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 3"
                        >
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    <div
                        className={`absolute top-12 right-4 z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${
                            isDropdownOpen ? "block" : "hidden"
                        }`}
                    >
                        <ul className="py-2">
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Actualizar información
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Cambiar contraseña
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Verifícate
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center pb-10">
                    <img
                        className="w-20 h-20 sm:w-24 sm:h-24 mb-3 rounded-full shadow-lg"
                        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                        alt="Woody Jacques"
                    />
                    <h5 className="mb-1 text-lg sm:text-xl font-medium text-gray-900 dark:text-white">
                        Woody Jacques
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Woodyjacques1@gmail.com
                    </span>
                    <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, dolores distinctio.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4">
                    <div className="text-center">
                        <h5 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white">
                            Intercambios
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            25
                        </p>
                    </div>
                    <div className="text-center">
                        <h5 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white">
                            Puntuación
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            4.8/5
                        </p>
                    </div>
                    <div className="text-center">
                        <h5 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white">
                            Verificación
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Completada
                        </p>
                    </div>
                </div>

                <div className="px-6 py-4">
                    <h3 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white mb-4">
                        Artículos
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
                            <img
                                className="w-full h-32 object-cover rounded-lg mb-4"
                                src="https://via.placeholder.com/150"
                                alt="Artículo 1"
                            />
                            <h4 className="font-medium text-gray-900 dark:text-white">Artículo 1</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Descripción breve del artículo.
                            </p>
                        </div>
            
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
                            <img
                                className="w-full h-32 object-cover rounded-lg mb-4"
                                src="https://via.placeholder.com/150"
                                alt="Artículo 2"
                            />
                            <h4 className="font-medium text-gray-900 dark:text-white">Artículo 2</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Descripción breve del artículo.
                            </p>
                        </div>
                     
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
                            <img
                                className="w-full h-32 object-cover rounded-lg mb-4"
                                src="https://via.placeholder.com/150"
                                alt="Artículo 3"
                            />
                            <h4 className="font-medium text-gray-900 dark:text-white">Artículo 3</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Descripción breve del artículo.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white mt-6 mb-4">
                        Favoritos
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
                            <img
                                className="w-full h-32 object-cover rounded-lg mb-4"
                                src="https://via.placeholder.com/150"
                                alt="Favorito 1"
                            />
                            <h4 className="font-medium text-gray-900 dark:text-white">Favorito 1</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Descripción breve del favorito.
                            </p>
                        </div>
                       
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
                            <img
                                className="w-full h-32 object-cover rounded-lg mb-4"
                                src="https://via.placeholder.com/150"
                                alt="Favorito 2"
                            />
                            <h4 className="font-medium text-gray-900 dark:text-white">Favorito 2</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Descripción breve del favorito.
                            </p>
                        </div>
                      
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
                            <img
                                className="w-full h-32 object-cover rounded-lg mb-4"
                                src="https://via.placeholder.com/150"
                                alt="Favorito 3"
                            />
                            <h4 className="font-medium text-gray-900 dark:text-white">Favorito 3</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Descripción breve del favorito.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Perfil;




