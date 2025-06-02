import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { Href } from "../../../../constants";
import { ContainerClassMap, HeaderClassMap } from "../../../../data/layout/Header";
import { useAppSelector } from "../../../../reduxToolkit/hooks";
import UsePathName from "../../../../utils/UsePathName";
import { ProfileCircle } from "iconsax-react";
const Header = () => {
  const [Path] = UsePathName();
  const { sidebarOpen } = useAppSelector((state) => state.layout);
  const isAuthenticated = false;
  return (
    <header className={`px-0${HeaderClassMap[Path || ""] || ""}`} id="header">
      
      <Container className={ContainerClassMap[Path || ""] || ""}>
        <div className="header-flex">
          <div className="logo-link left-side-header">
            <a href="/">Rentoo</a> <span>| best car rental</span>
          </div>
          <div className="sidebar-nav">
            <ul className="menu-items">
              {/* Home */}
              <li className="">
                <Link to="/" className="menu-item">
                  Home
                </Link>
              </li>

              {/* Product */}
              <li className="">
                <Link to="/product" className="menu-item">
                  Products
                </Link>
              </li>

              {/* FAQ */}
              <li className="">
                <Link to="/faq" className="menu-item">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="right-side-header">
            <div className="icon-side">
              <div className="login-flex onhover-dropdown">
                <a href={Href} className="login-icon">
                  <ProfileCircle className="iconsax" />
                  <span>Account</span>
                  <i className="ri-arrow-down-wide-line" />
                </a>
                {isAuthenticated && (
                  <ul className="login-list onhover-list">
                    <li className="active-item">
                      <a href="#">My profile</a>
                    </li>

                    <li className="active-item">
                      <a href="#" className="btn-solid">
                        Sing out
                      </a>
                    </li>
                  </ul>
                )}
                {!isAuthenticated && (
                  <ul className="login-list onhover-list">
                    <li className="active-item">
                      <a href="#" className="btn-solid">
                        Login
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Link
        to={Href}
        className={`overlay${sidebarOpen ? " overlay--active" : ""}`}
      />
    </header>
  );
};

export default Header;
