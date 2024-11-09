import { FormEvent } from "react";
import axios from "axios";
import { api } from "./Url";
import { mostrarMensaje } from "../components/toast";

export interface TokensData {
    token: any;
    name: string;
    email: string;
}

export const handleSubmitVerifi = async (tokens: any): Promise<TokensData | null> => {
    const MensajeErrUsuario = document.getElementById("MensajeErrUsuario");
    const MensajeActUsuario = document.getElementById("MensajeActUsuario");

    const isVerified: boolean = true;

    try {
        const responseSesion = await axios.patch(`${api}/auth/tokens-verifi`, { isVerified }, {
            headers: {
                Authorization: `Bearer ${tokens}`,
            },
        });
        const token = responseSesion.data.token;
        const name = responseSesion.data.name;
        const emaile = responseSesion.data.email;

        mostrarMensaje(responseSesion.data.message, MensajeActUsuario);
        return { token, name, email: emaile };
    } catch (error: any) {
        const message = error.response?.data.message;
        mostrarMensaje(message, MensajeErrUsuario);
        return null;
    }
}

export interface SesionData {
    token: string;
    name: string;
    email: string;
}

export const handleSubmitUserSesion = async (
    event: FormEvent,
    email: string,
    password: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>
): Promise<SesionData | null> => {
    event.preventDefault();
    const MensajeErrUsuario = document.getElementById("MensajeErrUsuario");
    const MensajeActUsuario = document.getElementById("MensajeActUsuario");

    if (email === "") {
        mostrarMensaje("Ingrese su correo", MensajeErrUsuario);
        return null;
    }

    if (password === "") {
        mostrarMensaje("Ingrese su contraseña", MensajeErrUsuario);
        return null;
    }

    function resetForm() {
        setEmail("");
        setPassword("");
    }

    try {
        const responseSesion = await axios.post(`${api}/auth/login`, { email, password });
        const token = responseSesion.data.token;
        const name = responseSesion.data.name;
        const emaile = responseSesion.data.email;
        resetForm();
        mostrarMensaje("Cargando ...", MensajeActUsuario);
        return { token, name, email: emaile };
    } catch (error: any) {
        const message = error.response?.data.message;
        mostrarMensaje(message, MensajeErrUsuario);
        resetForm();
        return null;
    }
};

