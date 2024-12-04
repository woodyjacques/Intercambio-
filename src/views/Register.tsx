import Message from '../components/Register/Message';
import NameUser from '../components/Register/NameUser';
import EmailUser from '../components/Register/EmailUser';
import PassUser from '../components/Register/PassUser';
import ButUser from '../components/Register/ButUser';
import useRegisterForm from '../components/Register/userRegiter';
import useRegisterHandler from '../components/Validation/handle';

function Register() {

    const { name, setName, email, setEmail, password, setPassword,
        isVerified, setisVerified, showPassword,
        togglePasswordVisibility,
    } = useRegisterForm();

    const { handleSubmitRegister, isLoading } = useRegisterHandler(
        name,
        email,
        password,
        isVerified,
        setName,
        setEmail,
        setPassword,
        setisVerified
    );
    return (
        <div className="font-quicksand flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-extrabold text-white text-center mb-6">
                    Crea tu Cuenta
                </h2>
                <Message />
                <form onSubmit={handleSubmitRegister} className="space-y-6">
                    <NameUser
                        name={name}
                        setName={setName}
                    />

                    <EmailUser
                        email={email}
                        setEmail={setEmail}
                    />
                    <PassUser
                        password={password}
                        setPassword={setPassword}
                        showPassword={showPassword}
                        togglePasswordVisibility={togglePasswordVisibility}
                    />
                    <ButUser
                        isLoading={isLoading}
                    />
                </form>

                <p className="text-gray-400 text-sm text-center mt-6">
                    ¿Ya tienes una cuenta?{" "}
                    <a href="/login" className="text-orange-400 hover:text-yellow-400 transition">
                        Inicia sesión
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Register;
