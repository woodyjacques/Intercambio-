import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Emailverifi() {
    const navigate = useNavigate();
    const token = localStorage.getItem("ACCESS_TOKEN");

    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [token, navigate]);

    if (token) {
        return null;
    }

    return (
        <div>
            <section className="font-quicksand">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
                        Verificación
                    </h1>
                    <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-gray-200">
                        Revise su correo electrónico que le hemos enviado un link.
                    </p>
                    <Link to="/login">
                        <button
                            type="submit"
                            className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold hover:opacity-90 transition transform hover:scale-105"
                        >
                            Ir a sesión
                        </button>
                    </Link>
                </div>
                <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 w-full h-full absolute top-0 left-0 z-0"></div>
            </section>
        </div>
    );
}

export default Emailverifi;
