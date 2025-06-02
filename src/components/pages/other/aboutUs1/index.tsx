 
import { routes } from "../../../../routers/routes";
import Breadcrumbs from "../../../commonComponents/breadcrumbs";
import About from "../../../home/carDemo1/About";
import CarService from "./CarService";

const AboutUs1Container = () => {
  return (
    <>
      <Breadcrumbs title="About" url={routes.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <About />
      <CarService />
    </>
  );
};

export default AboutUs1Container;
