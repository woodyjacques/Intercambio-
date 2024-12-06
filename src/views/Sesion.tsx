import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSubmitUserSesion, handleSubmitVerifi } from '../validation/AuthSesion';

export interface UserData {
    name: string;
    email: string;
}

function Sesion() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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

    const urlParams = new URLSearchParams(window.location.search);
    const tokens = urlParams.get("token");

    async function verificarTokens(tokens: any) {
        if (tokens) {
            const tokenData = await handleSubmitVerifi(tokens);

            if (tokenData) {
                const { token, name, email } = tokenData;

                localStorage.setItem("ACCESS_TOKEN", token);

                const sessionData: UserData = {
                    name,
                    email,
                };

                localStorage.setItem("USER_SESSION", JSON.stringify(sessionData));

                setTimeout(() => {
                    navigate("/userhome");
                }, 1000);
            }
        }
    }

    verificarTokens(tokens);

    const handleSubmitSesion = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        const sesionData = await handleSubmitUserSesion(event, email, password, setEmail, setPassword);

        if (sesionData) {
            const { token, name, email } = sesionData;

            localStorage.setItem("ACCESS_TOKEN", token);

            const sessionData: UserData = {
                name,
                email,
            };

            localStorage.setItem("USER_SESSION", JSON.stringify(sessionData));

            setTimeout(() => {
                navigate("/explorar");
            }, 3000);
        }

        setIsLoading(false);
    };

    return (
        <div className="font-quicksand flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-extrabold text-white text-center mb-6">
                    Inicia Sesión
                </h2>
                <p id="MensajeErrUsuario" className="hidden text-red-500 text-sm font-medium rounded-lg text-center"></p>
                <p id="MensajeActUsuario" className="hidden text-green-500 text-sm font-medium rounded-lg text-center"></p>
                
                <form onSubmit={handleSubmitSesion} className="space-y-6">
                    <div>
                        <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="email">
                            Correo electrónico
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            placeholder="tuemail@ejemplo.com"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={showPassword ? "text" : "password"}
                                className="w-full p-3 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                placeholder="Tu contraseña"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 px-3 py-2 text-gray-400 hover:text-white focus:outline-none"
                            >
                                {showPassword ? "Ocultar" : "Mostrar"}
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <a href="/emailverificacion" className="text-orange-400 hover:text-yellow-400 transition">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full p-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold hover:opacity-90 transition transform hover:scale-105" disabled={isLoading}
                        >
                            {isLoading ? "Iniciando..." : "Iniciar Sesión"}
                        </button>
                    </div>
                </form>

                <p className="text-gray-400 text-sm text-center mt-6">
                    ¿No tienes cuenta?{" "}
                    <a href="/register" className="text-orange-400 hover:text-yellow-400 transition">
                        Regístrate aquí
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Sesion;
