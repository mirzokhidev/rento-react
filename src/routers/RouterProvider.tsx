import { createBrowserRouter } from "react-router-dom";
import Layout from "../app/components/layout";
import CarScrollspy from "../pages/car/detail/CarScrollspy";
import CarTopCategory from "../pages/car/other/CarTopCategory";
import CarDemo1 from "../pages/home/CarDemo1";
import AboutUs1 from "../pages/pages/other/AboutUs1";
import ContactUs1 from "../pages/pages/other/ContactUs1";
import Error404 from "../pages/pages/other/Error404";
import Faq from "../pages/pages/other/Faq";
import Login1 from "../pages/pages/other/Login1";
import SignUp1 from "../pages/pages/other/SignUp1";
import UserDashboard from "../pages/pages/other/UserDashboard";
import { routes } from "./routes";

const RouterProvider = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: "*", element: <Error404 /> },

        //Home
        { path: routes.Home.CarDemo1, element: <CarDemo1 />, index: true },
        //Car
        { path: routes.Car.Other.CarTopCategory, element: <CarTopCategory /> },
        { path: routes.Car.Detail.CarScrollspy, element: <CarScrollspy /> },
        //Other-Pages
        { path: routes.Pages.Other.AboutUs1, element: <AboutUs1 /> },
        { path: routes.Pages.Other.ContactUs1, element: <ContactUs1 /> },
        { path: routes.Pages.Other.Faq, element: <Faq /> },
        { path: routes.Pages.Other.UserDashboard, element: <UserDashboard /> },
        { path: routes.Pages.Other.Error404, element: <Error404 /> },
        { path: routes.Pages.Other.Login1, element: <Login1 /> },
        { path: routes.Pages.Other.SignUp1, element: <SignUp1 /> },
       
      ],
    },
  ],
  {
    basename: "/",
  }
);

export default RouterProvider;
