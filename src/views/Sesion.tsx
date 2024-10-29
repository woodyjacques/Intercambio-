import { useState } from 'react';

function Sesion() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="font-inter flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-extrabold text-white text-center mb-6">
                    Inicia Sesión
                </h2>

                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="email">
                            Correo electrónico
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
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
                                required
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
                            className="w-full p-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold hover:opacity-90 transition transform hover:scale-105"
                        >
                            Iniciar Sesión
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
