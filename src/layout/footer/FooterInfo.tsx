import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { DetailType } from "../../types/Layout";

const FooterInfo: FC<DetailType> = ({ data, footerMenu }) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (title: string) => setOpenSections((prevState) => ({ [title]: !prevState[title] }));
  return (
    <>
      {data.map((item, index) => {
        const columnClass = item.contactList ? "col-lg-3 col-sm-5" : footerMenu ? "col-md-3 col-sm-6" : "col-md-2 col-sm-3";
        return (
          <div key={index} className={`${columnClass} ${openSections[item.title] ? "open-footer-content" : ""}`}>
            <div>
              <div className="footer-title">
                <h4 onClick={() => toggleSection(item.title)}>{item.title}</h4>
              </div>
              <ul className={`footer-link ${item.contactList ? "footer-contact" : ""}`}>
                {item.links.map((link, idx) => (
                  <li key={idx}>
                    {item.contactList ? (
                      <>
                        <i className={link.icon ? link.icon : ""} />
                        <span>{link.title}</span>
                      </>
                    ) : (
                      <Link to={link.url ? link.url : ""}>{link.title}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FooterInfo;
