import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSubmitUsers } from '../validation/Auth';

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVerified, setisVerified] = useState(false);
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

    const handleSubmitRegister = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true); 

        const registrationSuccessful = await handleSubmitUsers(event, name, email, password, isVerified, setName, setEmail, setPassword, setisVerified);

        if (registrationSuccessful) {
            setTimeout(() => {
                navigate("/verifi");
            }, 3000);
        }

        setIsLoading(false);
    };

    return (
        <div className="font-inter flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-extrabold text-white text-center mb-6">
                    Crea tu Cuenta
                </h2>

                <p id="MensajeErrUsuario" className="hidden text-red-500 text-sm font-medium rounded-lg text-center"></p>
                <p id="MensajeActUsuario" className="hidden text-green-500 text-sm font-medium rounded-lg text-center"></p>

                <form onSubmit={handleSubmitRegister} className="space-y-6">
                    <div>
                        <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="username">
                            Nombre de usuario
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            placeholder="Tu nombre de usuario"
                        />
                    </div>

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
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

                    <div>
                        <button
                            type="submit"
                            className="w-full p-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold hover:opacity-90 transition transform hover:scale-105" disabled={isLoading} 
                        >
                            {isLoading ? "Registrando..." : "Registrarse"}
                        </button>
                    </div>
                </form>

                <p className="text-gray-400 text-sm text-center mt-6">
                    ¿Ya tienes una cuenta?{" "}
                    <a href="/sesion" className="text-orange-400 hover:text-yellow-400 transition">
                        Inicia sesión
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Register;
