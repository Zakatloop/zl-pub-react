import {
    createBrowserRouter
} from "react-router-dom";
// import Home from "../components/pages/Home";
import OurValues from "../components/organism/OurValues";

export const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Home/>,
    // },
    {
        path: "our-values",
        element: <OurValues/>,
    },
]);