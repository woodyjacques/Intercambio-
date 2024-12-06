import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logoImage from '../../assets/logo.png';
import { Modal } from "../toast";

function Header() {
    const [isAsideOpen, setIsAsideOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("ACCESS_TOKEN");
        setIsLogged(!!token);
    }, []);

    const showModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const toggleAside = () => {
        setIsAsideOpen(!isAsideOpen);
    };

    const logOut = () => {
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("USER_SESSION");
        setIsLogged(false);
        navigate("/");
    };

    const handleNavigation = (path:any) => {
        if (!isLogged) {
            navigate("/login");
        } else {
            navigate(path);
            setIsAsideOpen(false);
        }
    };

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-sky-600 border-b border-sky-900 shadow-md">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button
                                onClick={toggleAside}
                                aria-controls="logo-sidebar"
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    ></path>
                                </svg>
                            </button>
                            <Link to="/obtener" className="flex ml-2 md:mr-24">
                                
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                                <img
                                    src={logoImage}
                                    className="h-12 rounded-full bg-white"
                                    alt="FlowBite Logo"
                                />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${isAsideOpen ? "translate-x-0" : "-translate-x-full"
                    } bg-blue-200 border-r border-blue-200 shadow-md`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-blue-200 flex flex-col justify-between">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <button
                                onClick={() => handleNavigation("/")}
                                className="transition duration-300 transform hover:scale-105 flex items-center p-2 text-white rounded-lg bg-sky-600 hover:bg-sky-500 w-full text-left"
                            >
                                <span className="flex-1 ml-3 whitespace-nowrap">Genera tus propuestas</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation("/works")}
                                className="transition duration-300 transform hover:scale-105 flex items-center p-2 text-white rounded-lg bg-gray-800 hover:bg-gray-500 w-full text-left"
                            >
                                <span className="flex-1 ml-3 whitespace-nowrap">Historial de propuestas</span>
                            </button>
                        </li>
                    </ul>

                    {isLogged && (
                        <div className="mt-auto">
                            <button
                                onClick={showModal}
                                className="transition duration-300 transform hover:scale-105 w-full p-2 text-white bg-gray-800 hover:bg-gray-500 rounded-lg"
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    )}
                </div>
            </aside>

            <div
                className={`p-4 transition-all ${isAsideOpen ? "lg:ml-64" : "ml-0"
                    }`}
                style={{
                    background: "#e8f0fa",
                }}
            >
                <Outlet />
            </div>
            <Modal
                onConfirm={() => {
                    logOut();
                    showModal();
                }}
                isVisible={isModalVisible}
                onClose={showModal}
                message="¿Estás seguro de cerrar sesión?"
            />
        </>
    );
}

export default Header;
