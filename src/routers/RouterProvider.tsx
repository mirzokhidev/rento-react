import { createBrowserRouter } from "react-router-dom";
import Layout from "../app/components/layout";
import Error404 from "../app/screens/errorPage/Error404";
import Login1 from "../app/screens/loginPage";
import SignUp from "../app/screens/signupPage";
import { routes } from "./routes";
import Products from "../app/screens/productsPage";
import CarDemo1 from "../app/screens/homePage";
import UserDashboard from "../app/screens/userPage";
import Faq from "../app/screens/faqPage";
import AboutUs from "../app/screens/aboutPage";
import Contact from "../app/screens/contactPage";
import ProductDetail from "../app/screens/productsPage/ChoosenProduct";

const RouterProvider = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: "*", element: <Error404 /> },

        //Home
        { path: routes.Home.Landing, element: <CarDemo1 /> },
        //Product
        { path: routes.Product.Products, element: <Products /> },
        { path: routes.Product.ProductDetail, element: <ProductDetail /> },
        //Other-Pages
        { path: routes.Pages.Other.AboutUs, element: <AboutUs /> },
        { path: routes.Pages.Other.Contact, element: <Contact /> },
        { path: routes.Pages.Other.Faq, element: <Faq /> },
        { path: routes.Pages.Other.UserDashboard, element: <UserDashboard /> },
        { path: routes.Pages.Other.Error404, element: <Error404 /> },
        { path: routes.Pages.Other.Login, element: <Login1 /> },
        { path: routes.Pages.Other.SignUp, element: <SignUp /> },
      ],
    },
  ],
  {
    basename: "/",
  }
);

export default RouterProvider;
