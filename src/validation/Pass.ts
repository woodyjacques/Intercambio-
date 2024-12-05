import { FormEvent } from "react";
import { mostrarMensaje } from "../components/toast";
import axios from "axios";
import { api } from "./Url";

export interface emailData {
    email: string
}

export const handleSubmitEmail = async (
    event: FormEvent,
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
): Promise<emailData | null> => {
    event.preventDefault();
    const MensajeErr = document.getElementById("MensajeErr");
    const MensajeAct = document.getElementById("MensajeAct");

    if (email === "") {
        mostrarMensaje("Ingrese su correo electrónico", MensajeErr);
        return null;
    }

    function resetForm() {
        setEmail("");
    }

    try {
        const responseEmail = await axios.post(`${api}/auth/email`, { email });
        resetForm();
        mostrarMensaje(responseEmail.data.message, MensajeAct);
        return { email };
    } catch (error: any) {
        const message = error.response?.data.message;
        mostrarMensaje(message, MensajeErr);
        resetForm();
        return null;
    }
};