import { Link } from "react-router-dom";
import { routes } from "../../../routers/routes";
import { dynamicImage, Image } from "../../../utils";

import { GoToHomePage, WhoopsPageNotFound } from "../../../constants";
import { Error404Content } from "../../../data/pages/Other";
import Breadcrumbs from "../../components/commonComponents/breadcrumbs";

const Error404Container = () => {
  return (
    <>
      <Breadcrumbs
        title="404"
        url={routes.Home.Landing}
        mainClass="page-breadcrumbs-section"
      />
      <section className="section-b-space error-section">
        <div className="container">
          <div className="error-box">
            <div className="error-content">
              <Image
                src={dynamicImage("other/404.svg")}
                className="img-fluid"
              />
              <h2>{WhoopsPageNotFound}</h2>
              <p>{Error404Content}</p>
              <Link to={routes.Home.Landing} className="btn-solid">
                {GoToHomePage}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error404Container;
