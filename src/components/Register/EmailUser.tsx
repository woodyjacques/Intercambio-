interface EmailString {
    email: string;
    setEmail: (value: string) => void;
}

function EmailUser({ email, setEmail }: EmailString) {
    return (
        <div>
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
        </div>
    );
}

export default EmailUser;