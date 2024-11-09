import { useState } from 'react';

function useRegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVerified, setisVerified] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return {name, setName, email, setEmail, password, setPassword,
        isVerified, setisVerified, showPassword,
        togglePasswordVisibility,
    };
}

export default useRegisterForm;
