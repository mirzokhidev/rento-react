import { Col, Container, Row } from "reactstrap";
import {
  FooterDetailData,
  FooterDescription,
  SocialMediaData,
  ContactListData,
} from "../../../../data/layout/Footer";
import UsePathName from "../../../../utils/UsePathName";
import { Link } from "react-router-dom";
import { routes } from "../../../../routers/routes";
import { dynamicImage } from "../../../../utils";

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
        <ul className="footer-contact-list">
          {ContactListData.map((item, index) => (
            <li key={index}>
              <div className="footer-icon">{item.icon}</div>
              <div className="footer-contact">
                <h4>{item.title}</h4>
                <h6>{item.text}</h6>
              </div>
            </li>
          ))}
        </ul>
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
                {FooterData.map((item, index) => {
                  const columnClass = item.contactList
                    ? "col-lg-3 col-sm-5"
                    : "col-md-2 col-sm-3";
                  return (
                    <div key={index} className={`${columnClass} `}>
                      <div>
                        <div className="footer-title">
                          <h4>{item.title}</h4>
                        </div>
                        <ul
                          className={`footer-link ${
                            item.contactList ? "footer-contact" : ""
                          }`}>
                          {item.links.map((link, idx) => (
                            <li key={idx}>
                              {item.contactList ? (
                                <>
                                  <i className={link.icon ? link.icon : ""} />
                                  <span>{link.title}</span>
                                </>
                              ) : (
                                <Link to={link.url ? link.url : ""}>
                                  {link.title}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
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
