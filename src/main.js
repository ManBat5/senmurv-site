import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
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
        element: _jsx(App, {}),
        children: [
            { index: true, element: _jsx(Home, {}) },
            { path: "about", element: _jsx(About, {}) },
            { path: "rd", element: _jsx(RD, {}) },
            { path: "get-started", element: _jsx(GetStarted, {}) },
            // “pills” pages
            { path: "topics/:slug", element: _jsx(Topic, {}) },
        ],
    },
]);
createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(RouterProvider, { router: router }) }));
