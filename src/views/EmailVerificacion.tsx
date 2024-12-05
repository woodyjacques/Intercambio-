import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSubmitEmail } from "../validation/Pass";

function EmailVerification() {

    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const token = localStorage.getItem("ACCESS_TOKEN");

    useEffect(() => {
        if (token) {
            navigate("/login");
        }
    }, [token, navigate]);

    if (token) {
        return null;
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        const emailData = await handleSubmitEmail(event, email, setEmail);

        if (emailData) {
            setTimeout(() => {
                navigate("/verificacion");
            }, 3000);
        }

        setIsLoading(false);
    };

    return (
        <div className="font-quicksand flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-extrabold text-white text-center mb-6">
                    Verifica tu Correo Electrónico
                </h2>

                <p className="text-gray-400 text-center mb-6">
                    Ingresa tu correo electrónico para recibir el enlace de verificación.
                </p>
                
                <p id="MensajeErr" className="hidden text-red-500 text-sm font-medium rounded-lg text-center"></p>
                <p id="MensajeAct" className="hidden text-green-500 text-sm font-medium rounded-lg text-center"></p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="email">
                            Correo electrónico
                        </label>
                        <input
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="w-full p-3 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            placeholder="tuemail@ejemplo.com"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full p-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold hover:opacity-90 transition transform hover:scale-105"
                            disabled={isLoading}
                        >
                            {isLoading ? "Enviando..." : "Enviar"}
                        </button>
                    </div>
                </form>

                <p className="text-gray-400 text-sm text-center mt-6">
                    ¿Recuerdas la contraseña?{" "}
                    <a href="/login" className="text-orange-400 hover:text-yellow-400 transition">
                        Inicia Sesión
                    </a>
                </p>
            </div>
        </div>
    );
}

export default EmailVerification;
