import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./pages/App";
import Home from "./pages/Home";
import About from "./pages/About";
import RD from "./pages/RD";
import GetStarted from "./pages/GetStarted";
import Topic from "./pages/Topic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "rd", element: <RD /> },
      { path: "get-started", element: <GetStarted /> },
      // “pills” pages
      { path: "topics/:slug", element: <Topic /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
