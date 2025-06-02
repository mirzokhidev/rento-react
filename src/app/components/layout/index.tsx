import Aos from "aos";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SearchModal from "../../../components/commonComponents/modals/SearchModal";
import { PathSettings, SearchModalData } from "../../../data/layout/Layout";
import { SetFavicon } from "../../../utils/SetFavicon";
import UsePathName from "../../../utils/UsePathName";
import Header from "./header";
import Loader from "./Loader";
import MobileMenu from "./MobileMenu";
import TapTop from "./TapTop";
import Customizer from "./Customizer";
import FooterDemo1 from "./footer";

const Layout = () => {
  const Path = UsePathName();

  const { className, favicon } = PathSettings[Path[0]] || PathSettings.default;

  useEffect(() => {
    document.body.className = className;
    SetFavicon(`${process.env.PUBLIC_URL}/assets/images/logo/${favicon}`);
    Aos.init({ once: true });

    return () =>
      SetFavicon(`${process.env.PUBLIC_URL}/assets/images/logo/favicon-3.png`);
  }, [className, favicon]);
  const isJobOrProperty = ["car-2", "job-3", "job-2", "property-2"].some(
    (item) => Path[0].includes(item)
  );
  const carSpaceClass = Path[1] === "detail" ? "car-detail-space" : "";

  return (
    <>
      {["login-2", "login-3", "signup-2", "signup-3", "coming-soon"].includes(
        Path[2]
      ) ? (
        <Outlet />
      ) : (
        <>
          <Loader />
          <Header />
          <MobileMenu />
          <Outlet />
          <FooterDemo1 />
          <TapTop />
          <SearchModal
            type={SearchModalData[Path[0]] || SearchModalData.car}
            carSpaceClass={carSpaceClass}
          />
        </>
      )}
      <Customizer />
    </>
  );
};
export default Layout;
