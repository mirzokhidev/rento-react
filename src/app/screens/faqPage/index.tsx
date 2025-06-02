import QuestionBox from "./QuestionBox";
import FaqSection from "./FaqSection";
import { routes } from "../../../routers/routes";
import Breadcrumbs from "../../components/commonComponents/breadcrumbs";
import Newsletter from "../../components/commonComponents/Newsletter";

const Faq = () => {
  return (
    <>
      <Breadcrumbs
        title="FAQ"
        url={routes.Home.Landing}
        mainClass="page-breadcrumbs-section"
      />
      <FaqSection />
      <Newsletter type="pricing" />
      <QuestionBox />
    </>
  );
};

export default Faq;
