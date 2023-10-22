import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import TimetablePage from "./pages/TimetablePage.jsx";
import PricesPage from "./pages/PricesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ClassPage from "./pages/ClassPage.jsx";
import "./fonts.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "timetable",
        element: <TimetablePage />,
      },
      {
        path: "prices",
        element: <PricesPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "class/:id",
        element: <ClassPage />, 
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
