import { Col, Container, Row } from "reactstrap";
import { FooterDetailData, FooterDescription, SocialMediaData } from "../../data/layout/Footer";
import UsePathName from "../../utils/UsePathName";
import FooterBranding from "./FooterBranding";
import FooterContacts from "./FooterContacts";
import FooterInfo from "./FooterInfo";
import { Link } from "react-router-dom";
import { routes } from "../../routers/routes";
import { dynamicImage } from "../../utils";

const FooterDemo1 = () => {
  const [Path] = UsePathName();

  const FooterData = FooterDetailData.filter(({ id }) =>
    [1, 2, 4, 5].includes(id)
  );
  return (
    <footer
      className={`property-footer-section ${
        Path?.includes("job") ? "job-footer-section" : ""
      }`}>
      <Container>
        <FooterContacts />
        <div className="dark-job-footer">
          <Row className="gy-4">
            <Col lg="3" xs="12">
              <div className="footer-branding-wrapper">
                <Link to={routes.Home.CarDemo1} className="footer-logo">
                  Rentoo
                </Link>
                <p>Find your ideal car with personalized support, together.</p>
                <ul className="dark-footer-social">
                  {SocialMediaData.slice(0, 3).map((item, index) => (
                    <li key={index}>
                      <Link to={item.url} target="_blank">
                        <i className={item.icon} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
             
            </Col>
            <Col lg="9" xs="12">
              <Row className="gy-lg-4 gy-3">
                <FooterInfo data={FooterData} footerMenu />
              </Row>
            </Col>
          </Row>
        </div>
        <div className="copyright">
          <p>@ 2025 All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default FooterDemo1;
