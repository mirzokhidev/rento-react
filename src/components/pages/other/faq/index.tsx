 
import { routes } from "../../../../routers/routes";
import Breadcrumbs from "../../../commonComponents/breadcrumbs";
import Newsletter from "../../../home/common/Newsletter";
import QuestionBox from "./QuestionBox";
import FaqSection from "./FaqSection";

const FaqContainer = () => {
  return (
    <>
      <Breadcrumbs title="FAQ" url={routes.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <FaqSection />
      <Newsletter type="pricing" />
      <QuestionBox />
    </>
  );
};

export default FaqContainer;
