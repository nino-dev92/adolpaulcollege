import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Router,
  RouterProvider,
  HashRouter,
} from "react-router";
import "./index.css";
import Home from "./Pages/Home.jsx";
import Programs from "./Pages/Programs.jsx";
import Admissions from "./Pages/Admissions.jsx";
import Facilities from "./Pages/Facilities.jsx";
import Contact from "./Pages/Contact.jsx";
import App from "./App.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/programs",
    Component: Programs,
  },
  {
    path: "/admissions",
    Component: Admissions,
  },
  {
    path: "/facilities",
    Component: Facilities,
  },
  {
    path: "/contact",
    Component: Contact,
  },
]);
createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
