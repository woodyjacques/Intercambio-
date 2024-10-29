import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Register from "../views/Register";
import Sesion from "../views/Sesion";
import EmailVerification from "../views/EmailVerificacion";
import ActContrasena from "../views/ActContrasena";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/sesion", element: <Sesion /> },
  {path:"/emailverificacion", element:<EmailVerification/>},
  {path:"/actualizacion",element:<ActContrasena/>}
]);

export default router;



