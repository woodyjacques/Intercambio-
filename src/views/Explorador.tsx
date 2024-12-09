
function Explorador() {
    return (
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 relative flex flex-col justify-between h-1/2 p-4 rounded-lg mt-14 shadow-md mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-4">

                <div className="max-w-sm border bg-gray-800 border-gray-700 rounded-lg shadow">
                    <a href="#">
                        <img
                            className="rounded-t-lg"
                            src="https://freeimag.com/files/preview/960x960/11701112011sg6qqjftcia4mecmtoinhtjz0qezg0poiwjubcj8lgnazbi2apjzc1epzdjqzlewll2qv1jdkzqpnlvqscx9jfnlaqoexrwke9ag.png"
                            alt=""
                        />
                    </a>
                    <div className="p-5">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-gray-500">
                                Fecha: 07/12/2024
                            </span>
                            <span className="text-sm font-semibold text-green-600">
                                Estado: Nuevo
                            </span>
                        </div>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-400 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim
                            optio omnis asperiores error placeat...
                            {/* {cate.descripcion.slice(0, 50)}... */}
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
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
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Explorador;
