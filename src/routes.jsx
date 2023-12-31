import { createBrowserRouter } from "react-router-dom";
import { LayoutAuth } from "./auth/layout";
import { Signin } from "./auth/signin";
import { Signup } from "./auth/signup";
import { Home } from "./pages/home";
import { LayoutHome } from "./pages/layout";
import Services from "./pages/services";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutHome />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/Services",
                element: <Services />,
            },
        ]
    },
    {
        path: "/auth",
        element: <LayoutAuth />,
        children: [
            {
                path: "signin",
                element: <Signin />,
            },
            {
                path: "signup",
                element: <Signup />,
            },

            

        ]
    },
]);

export default router;