import { useState } from "react";

function Articulos() {

    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState(0);
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [Categoria, setCategoria] = useState("");
    const [fecha, setFecha] = useState("");
    const [estado, setEstado] = useState("");
    const [imagen, setImagen] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const toggleModal = () => {
        setId(0); setNombre(""); setDescripcion(""); setCategoria("");
        setFecha(""); setEstado(""); setImagen(""); setIsOpen(!isOpen);
    };

    return (
        <div className="bg-gray-900 p-4 rounded-lg mt-14 shadow-md mt-20">
            <div className="text-black text-2xl mb-4 p-4 rounded-lg shadow-lg bg-gray-200 flex items-center justify-between">
                <p className="text-center">Artículos</p>
                <button
                    className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-lg text-sm px-5 py-2.5" onClick={toggleModal}
                >Agregar</button>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-400">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descripción
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Categoría
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Estado
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Imagen
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acción
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            className=" border-b bg-gray-900 border-gray-700"
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap text-white"
                            >
                                Woody Jacques Aimable
                            </th>
                            <td className="px-6 py-4">Lorem ipsum dolor...</td>
                            <td className="px-6 py-4">Tecnologia</td>
                            <td className="px-6 py-4">06/01/2024</td>
                            <td className="px-6 py-4">nuevo</td>
                            <td className="px-6 py-4">
                                <img src="https://freeimag.com/files/preview/960x960/11701112011sg6qqjftcia4mecmtoinhtjz0qezg0poiwjubcj8lgnazbi2apjzc1epzdjqzlewll2qv1jdkzqpnlvqscx9jfnlaqoexrwke9ag.png" alt="" className="w-12 h-12 rounded-full" />
                            </td>

                            <td className="px-6 py-4">
                                <a
                                    href="#"
                                    className="font-medium text-blue-500 hover:underline"

                                >
                                    Actualizar
                                </a>
                                <a href="#"

                                    className="ml-8 font-medium text-red-500 hover:underline"
                                >
                                    Eliminar
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {isOpen && (
                <div
                    id="authentication-modal"
                    className="bg-gray-100 bg-opacity-50 formPer fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center"
                    aria-hidden={!isOpen ? "true" : undefined}
                >
                    <div
                        className="relative w-full max-w-md max-h-full"
                        aria-hidden={isOpen ? "false" : "true"}
                    >
                        <div className="relative bg-gray-900 rounded-lg shadow-lg">
                            <button
                                type="button"
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                                data-modal-hide="authentication-modal"
                                onClick={toggleModal}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="px-6 py-6 lg:px-8">
                                <h3 className="mb-4 text-xl font-medium text-white">Artículos</h3>

                                <p
                                    id="MensajeErrCat"
                                    className=" hidden text-red-500 text-sm font-medium rounded-lg text-center"
                                ></p>
                                <p
                                    id="MensajeCat"
                                    className=" hidden text-green-500 text-sm font-medium rounded-lg text-center"
                                ></p>

                                <form className="space-y-6">
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm font-medium text-white">Nombre</label>
                                            <input
                                                type="text"
                                                className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                                                placeholder="Título"
                                                value={nombre}
                                                onChange={(e) => setNombre(e.target.value)}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm font-medium text-white">Descripción</label>
                                            <input
                                                type="text"
                                                className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                                                placeholder="Subtítulo"
                                                value={descripcion}
                                                onChange={(e) => setDescripcion(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm font-medium text-white">Categoría</label>
                                            <select
                                                className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                value={Categoria}
                                                onChange={(e) => setCategoria(e.target.value)}
                                            >
                                                <option value="" disabled>
                                                    Selecciona una categoría
                                                </option>
                                                <option value="Electrónica">Electrónica</option>
                                                <option value="Ropa y Accesorios">Ropa y Accesorios</option>
                                                <option value="Hogar y Cocina">Hogar y Cocina</option>
                                                <option value="Deportes y Aire Libre">Deportes y Aire Libre</option>
                                                <option value="Juguetes y Juegos">Juguetes y Juegos</option>
                                                <option value="Belleza y Cuidado Personal">Belleza y Cuidado Personal</option>
                                                <option value="Libros">Libros</option>
                                                <option value="Mascotas">Mascotas</option>
                                                <option value="Automotriz">Automotriz</option>
                                                <option value="Salud">Salud</option>
                                            </select>
                                        </div>
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm font-medium text-white">Estado</label>
                                            <input
                                                type="text"
                                                className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                                                value={estado}
                                                onChange={(e) => setEstado(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm font-medium text-white">Imagen uno</label>
                                            <input
                                                type="text"
                                                className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                                                value={fecha}
                                                onChange={(e) => setFecha(e.target.value)}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm font-medium text-white">Imagen dos</label>
                                            <input
                                                type="text"
                                                className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                                                value={imagenDos}
                                                onChange={(e) => setImagenDos(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <label className="block mb-2 text-sm font-medium text-white">Beneficios</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                                                placeholder="Beneficio"
                                                value={beneficio}
                                                onChange={(e) => setBeneficio(e.target.value)}
                                            />
                                            <button
                                                type="button"
                                                className="absolute right-0 top-0 bg-blue-500 text-white p-2 rounded-r-lg"
                                                onClick={handleAddBeneficio}
                                            >
                                                Agregar
                                            </button>
                                        </div>
                                        <ul className="mt-2 text-sm text-gray-400">
                                            {beneficios.map((item, index) => (
                                                <li key={index} className="flex items-center gap-2">
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-white">Descripción</label>
                                        <textarea
                                            placeholder="Descripción"
                                            className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                                            value={descripcion}
                                            onChange={(e) => setDescripcion(e.target.value)}
                                        ></textarea>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="mb-10 mt-5 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? "Agregando..." : "Agregar"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Articulos;