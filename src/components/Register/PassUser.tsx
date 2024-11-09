
interface PassUser{
    password:string;
    setPassword: (value:string) => void;
    showPassword: boolean;
    togglePasswordVisibility: () => void;
}

function PassUser({password, setPassword, showPassword, togglePasswordVisibility}:PassUser) {
    return (
        <div>
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
        </div>
    );
}

export default PassUser;