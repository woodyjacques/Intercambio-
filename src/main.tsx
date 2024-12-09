import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./css/index.css";
import router from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 min-h-screen">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
