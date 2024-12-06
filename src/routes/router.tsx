import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Register from "../views/Register";
import Sesion from "../views/Sesion";
import EmailVerification from "../views/EmailVerificacion";
import ActContrasena from "../views/ActContrasena";
import Explorador from "../views/Explorador";
import Emailverifi from "../views/EmailVerifi";
import Header from "../components/userHome/header";

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
    ]
},

]);

export default router;



