
interface NameString {
    name: string;
    setName: (value: string) => void;
}

function NameUser({ name, setName }:NameString) {
    return (
        <div>
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
        </div>
    );
}

export default NameUser;