import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Register from "../views/Register";
import Sesion from "../views/Sesion";
import EmailVerification from "../views/EmailVerificacion";
import ActContrasena from "../views/ActContrasena";
import Explorador from "../views/Explorador";
import Emailverifi from "../views/EmailVerifi";
import Header from "../components/userHome/header";
import Articulos from "../views/Articulos";
import Trueques from "../views/Trueques";
import Favorito from "../views/Favorito";
import Perfil from "../views/Perfil";
import Soporte from "../views/Soporte";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Sesion /> },
  { path: "/emailverificacion", element: <EmailVerification /> },
  { path: "/actualizacion", element: <ActContrasena /> },
  { path: "/verificacion", element: <Emailverifi /> },
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/explorar", element: <Explorador /> },
      { path: "/articulos", element: <Articulos /> },
      { path: "/trueques", element: <Trueques /> },
      { path: "/favorito", element: <Favorito /> },
      { path: "/perfil", element: <Perfil /> },
      { path: "/soporte", element: <Soporte /> }
    ]
  },

]);

export default router;



