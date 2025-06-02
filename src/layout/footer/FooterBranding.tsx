import { FC } from "react";
import { Link } from "react-router-dom";

import { dynamicImage, Image } from "../../utils";
import { SocialMediaData } from "../../data/layout/Footer";
import { routes } from "../../routers/routes";
import { FooterBrandingType } from "../../types/Layout";

const FooterBranding: FC<FooterBrandingType> = ({ description, endPoint }) => {
  return (
    <>
      <Link to={routes.Home.CarDemo1} className="footer-logo">
        <Image
          src={dynamicImage("logo/footer-logo.png")}
          alt="footer-logo"
          className="img-fluid"
        />
      </Link>
      <p>{description}</p>
      <ul className="dark-footer-social">
        {SocialMediaData.slice(0, endPoint).map((item, index) => (
          <li key={index}>
            <Link to={item.url} target="_blank">
              <i className={item.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterBranding;
