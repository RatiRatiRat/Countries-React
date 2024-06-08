import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Countries1 from "./components/Countries/Countries";
import CountryDetail from "./components/Single-Country-page/country";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Countries1 />,
    },
    {
        path: "/single-page/:id",
        element: <CountryDetail />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
