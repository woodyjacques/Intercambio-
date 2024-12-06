import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSubmitPassUpEmail } from '../validation/Pass';

export interface UserData {
    name: string;
    email: string;
}

function ActContrasena() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [verPassword, setVerPassword] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, [token, navigate]);

    if (!token) {
        return null;
    }

    const handleSubmitPassEmail = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        const emailData = await handleSubmitPassUpEmail(event, password, verPassword, setPassword, setVerPassword);

        if (emailData) {
            const { tokens, name, email } = emailData;
            localStorage.setItem("ACCESS_TOKEN", tokens);
            const sessionData: UserData = {
                name, email
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
                    Actualiza tu Contraseña
                </h2>

                <p id="MensajeErrEmail" className="hidden text-red-500 text-sm font-medium rounded-lg text-center"></p>
                <p id="MensajeActEmail" className="hidden text-green-500 text-sm font-medium rounded-lg text-center"></p>

                <form onSubmit={handleSubmitPassEmail} className="space-y-6">
                    <div>
                        <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="newPassword">
                            Nueva contraseña
                        </label>
                        <div className="relative">
                            <input
                                id="newPassword"
                                name="newPassword"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                placeholder="Tu nueva contraseña"
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

                    <div>
                        <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="confirmPassword">
                            Confirmar nueva contraseña
                        </label>
                        <div className="relative">
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                value={verPassword}
                                onChange={(e) => setVerPassword(e.target.value)}
                                className="w-full p-3 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                placeholder="Confirma tu nueva contraseña"
                            />
                            <button
                                type="button"
                                onClick={toggleConfirmPasswordVisibility}
                                className="absolute inset-y-0 right-0 px-3 py-2 text-gray-400 hover:text-white focus:outline-none"
                            >
                                {showConfirmPassword ? "Ocultar" : "Mostrar"}
                            </button>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full p-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold hover:opacity-90 transition transform hover:scale-105" disabled={isLoading}
                        >
                            {isLoading ? "Actualizando" : "Actualizar"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ActContrasena;
