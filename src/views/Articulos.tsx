import { FormEvent, useEffect, useState } from "react";
import { handleClickEl, handleSubmitArticulos, obtenerarticulos } from "../validation/Articulos";
import { Modal } from "../components/toast";

function Articulos() {

    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState(0);
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [fecha, setFecha] = useState("");
    const [estado, setEstado] = useState("");
    const [imagen, setImagen] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const toggleModal = () => {
        setId(0); setNombre(""); setDescripcion(""); setCategoria("");
        setFecha(""); setEstado(""); setImagen(""); setIsOpen(!isOpen);
    };

    const handleSubmit = async (event: FormEvent) => {
        setIsLoading(true);

        const respuesta = await handleSubmitArticulos(event, id, nombre, descripcion, categoria, fecha, estado, imagen);

        if (respuesta?.data?.message) {
            toggleModal();
            window.location.reload();
        }

        setIsLoading(false);
    };

    const [articulos, setArticulos] = useState<
        {
            id: number; nombre: string; descripcion: string; categoria: string; fecha: string; estado: string; imagen: string
        }[]
    >([]);

    useEffect(() => {
        obtenerarticulos()
            .then((data) => {
                setArticulos(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleActualizar = (
        id: number, nombre: string,
        categoria: string, descripcion: string,
        imagen: string, fecha: string,
        estado: string,
    ) => {
        setId(id); setNombre(nombre);
        setDescripcion(descripcion); setCategoria(categoria);
        setImagen(imagen);
        setFecha(fecha); setEstado(estado);
        toggleModalAct();
    };

    const toggleModalAct = () => {
        setIsOpen(!isOpen);
    };

    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <div className="bg-gray-900 p-4 rounded-lg mt-14 shadow-md mt-20">
            <div className="text-black text-2xl mb-4 p-4 rounded-lg shadow-lg bg-gray-200 flex items-center justify-between">
                <p className="text-center">Artículos</p>
                <button
                    className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-700 font-medium rounded-lg text-sm px-5 py-2.5" onClick={toggleModal}
                >Agregar</button>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-400">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">Nombre</th>
                            <th scope="col" className="px-6 py-3">Descripción</th>
                            <th scope="col" className="px-6 py-3">Categoría</th>
                            <th scope="col" className="px-6 py-3">Fecha</th>
                            <th scope="col" className="px-6 py-3">Estado</th>
                            <th scope="col" className="px-6 py-3">Imagen</th>
                            <th scope="col" className="px-6 py-3">Acción</th>
                        </tr>
                    </thead>
                    <tbody>

                        {articulos.map((art, index) => (
                            <tr
                                key={index}
                                className=" border-b bg-gray-900 border-gray-700"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                                >
                                    {art.nombre}
                                </th>
                                <td className="px-6 py-4">{art.descripcion.slice(0, 50)}...</td>
                                <td className="px-6 py-4">{art.categoria}</td>
                                <td className="px-6 py-4">{art.fecha}</td>
                                <td className="px-6 py-4">{art.estado}</td>
                                <td className="px-6 py-4">
                                    <img src={art.imagen} alt="" className="w-12 h-12 rounded-full" />
                                </td>
                                <td className="px-6 py-4">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-500 hover:underline"
                                        onClick={() =>
                                            handleActualizar(
                                                art.id,
                                                art.nombre,
                                                art.categoria,
                                                art.descripcion,
                                                art.imagen,
                                                art.estado,
                                                art.fecha
                                            )
                                        }
                                    >
                                        Actualizar
                                    </a>
                                    <a href="#"
                                        onClick={showModal}
                                        className="ml-8 font-medium text-red-500 hover:underline"
                                    >
                                        Eliminar
                                    </a>
                                    <Modal
                                        onConfirm={() => {
                                            handleClickEl(art);
                                            showModal();
                                        }}
                                        isVisible={isModalVisible}
                                        onClose={showModal}
                                        message="¿Estás seguro de eliminar el artículo?"
                                    />
                                </td>
                            </tr>
                        ))}
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

                                <p id="MensajeErrCat" className=" hidden text-red-500 text-sm font-medium rounded-lg text-center"></p>
                                <p id="MensajeCat" className=" hidden text-green-500 text-sm font-medium rounded-lg text-center"></p>

                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm font-medium text-white">Nombre</label>
                                            <input
                                                type="text"
                                                className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                                                placeholder="nombre"
                                                value={nombre}
                                                onChange={(e) => setNombre(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm font-medium text-white">Categoría</label>
                                            <select
                                                className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                                                value={categoria}
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
                                            <select
                                                className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                                                value={estado}
                                                onChange={(e) => setEstado(e.target.value)}
                                            >
                                                <option value="" disabled>
                                                    Selecciona el estado
                                                </option>
                                                <option value="Nuevo">Nuevo</option>
                                                <option value="Semi-nuevo">Semi-nuevo</option>
                                                <option value="Usado">Usado</option>
                                                <option value="Reacondicionado">Reacondicionado</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm font-medium text-white">Fecha</label>
                                            <input
                                                type="date"
                                                className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder-gray-400"
                                                value={fecha}
                                                onChange={(e) => setFecha(e.target.value)}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm font-medium text-white">Imagen</label>
                                            <input
                                                type="text"
                                                className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                                                value={imagen}
                                                onChange={(e) => setImagen(e.target.value)}
                                                placeholder="imagen"
                                            />
                                        </div>
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
                                            className="mb-10 mt-5 w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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