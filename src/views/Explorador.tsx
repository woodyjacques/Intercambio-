import { useEffect, useState } from "react";
import { obtenerarticulos } from "../validation/Articulos";

function Explorador() {
    const [articulos, setArticulos] = useState<
        {
            id: number;
            nombre: string;
            descripcion: string;
            categoria: string;
            fecha: string;
            estado: string;
            imagen: string;
            email: string;
            name:string;
        }[]
    >([]);

    useEffect(() => {
        obtenerarticulos()
            .then((data) => {
                setArticulos(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Error al obtener los artículos:", error);
            });
    }, []);

    return (
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 relative flex flex-col justify-between h-auto p-4 rounded-lg mt-14 shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-4">
                {articulos.map((articulo) => (
                    <div
                        key={articulo.id}
                        className="max-w-sm border bg-gray-800 border-gray-700 rounded-lg shadow"
                    >
                        <a href="#">
                            <img
                                className="rounded-t-lg"
                                src={articulo.imagen || "https://via.placeholder.com/150"}
                                alt={articulo.nombre}
                            />
                        </a>
                        <div className="p-5">
                            <div className="flex justify-center mb-3">
                                <span className="text-sm font-semibold text-orange-400">
                                    {articulo.name}
                                </span>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-gray-500">
                                    Fecha: {new Date(articulo.fecha).toLocaleDateString()}
                                </span>
                                <span className="text-sm font-semibold text-green-600">
                                    Estado: {articulo.estado}
                                </span>
                            </div>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                                    {articulo.nombre}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-400">
                                {articulo.descripcion.length > 100
                                    ? `${articulo.descripcion.substring(0, 100)}...`
                                    : articulo.descripcion}
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                                Agregar a favorito
                                <svg
                                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Explorador;
