 
import { routes } from "../../../routers/routes";
import Breadcrumbs from "../../components/commonComponents/breadcrumbs";
import About from "../homePage/About";
import CarService from "./CarService";

const AboutUs = () => {
  return (
    <>
      <Breadcrumbs title="About" url={routes.Home.Landing} mainClass="page-breadcrumbs-section" />
      <About />
      <CarService />
    </>
  );
};

export default AboutUs;
