import { useState, FormEvent, Dispatch, SetStateAction } from 'react';
import { handleSubmitUsers } from '../../validation/Auth';
import { useNavigate } from 'react-router-dom';

function useRegisterHandler(
    name: string,
    email: string,
    password: string,
    isVerified: boolean,
    setName: Dispatch<SetStateAction<string>>,
    setEmail: Dispatch<SetStateAction<string>>,
    setPassword: Dispatch<SetStateAction<string>>,
    setisVerified: Dispatch<SetStateAction<boolean>>
) {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmitRegister = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        const registrationSuccessful = await handleSubmitUsers(event, name, email, password, isVerified, setName, setEmail, setPassword, setisVerified);

        if (registrationSuccessful) {
            setTimeout(() => {
                navigate("/verificacion");
            }, 3000);
        }

        setIsLoading(false);
    };

    return { handleSubmitRegister, isLoading };
}

export default useRegisterHandler;
