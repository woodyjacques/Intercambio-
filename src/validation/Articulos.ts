import { FormEvent } from "react";
import { mostrarMensaje } from "../components/toast";
import axios, { AxiosResponse } from "axios";
import { api } from "./Url";

const token = localStorage.getItem("ACCESS_TOKEN");

interface CampanaResponse {
    message: string;
}

export const handleSubmitArticulos = async (
    event: FormEvent,
    id: number,
    nombre: string,
    descripcion: string,
    categoria: string,
    fecha: string,
    estado: string,
    imagen: string
): Promise<AxiosResponse<CampanaResponse> | null> => {
    event.preventDefault();
    const MensajeErr = document.getElementById("MensajeErrCat");
    const MensajeAct = document.getElementById("MensajeCat");

    if (nombre === "") {
        mostrarMensaje("Ingrese el nombre", MensajeErr);
        return null;
    }

    if (categoria === "") {
        mostrarMensaje("Ingrese la categoría", MensajeErr);
        return null;
    }

    if (estado === "") {
        mostrarMensaje("Ingrese el estado", MensajeErr);
        return null;
    }

    if (fecha === "") {
        mostrarMensaje("Ingrese la fecha", MensajeErr);
        return null;
    }

    if (imagen === "") {
        mostrarMensaje("Ingrese la imagen", MensajeErr);
        return null;
    }

    if (descripcion === "") {
        mostrarMensaje("Ingrese el descripción", MensajeErr);
        return null;
    }

    const userSession = localStorage.getItem('USER_SESSION');

    const email = userSession ? JSON.parse(userSession).email : null;
    const name = userSession ? JSON.parse(userSession).name : null;

    const method = id === 0 ? 'post' : 'patch';
    const url = id === 0 ? `${api}/articulos` : `${api}/articulos/${id}`;

    const requestData = { nombre, categoria, estado, fecha, imagen, descripcion, email, name };

    const headers = {
        Authorization: `Bearer ${token}`,
    };

    try {
        const response: AxiosResponse<CampanaResponse> = await axios[method](url, requestData, { headers });
        mostrarMensaje(response.data.message, MensajeAct);
        return response;
    } catch (error: any) {
        mostrarMensaje(error.response?.data?.message || "Error al enviar los datos", MensajeErr);
        return null;
    }
};

export async function obtenerarticulos() {
    try {
        const response = await axios.get(`${api}/articulos`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export function handleClickEl(art: any) {
    const id = art.id;
    const MensajeNegToast = document.getElementById("toast-negative");

    axios
        .delete(`${api}/articulos/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            console.log(response);
            window.location.reload();
        })
        .catch((error) => {
            if (error.response) {
                mostrarMensaje(error.response.data.error, MensajeNegToast);
            }
        });
}
