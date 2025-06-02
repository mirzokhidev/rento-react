import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../../../reduxToolkit/hooks";
import { setLogoutModal } from "../../../../../reduxToolkit/reducers/layoutSlice";
import CloseBtn from "../../../../commonComponents/CloseBtn";
import { dynamicSvg, Image } from "../../../../../utils";
import { AreYouLoggingOut, Cancel, LogOut } from "../../../../../constants";
import { Link } from "react-router-dom";
import { routes } from "../../../../../routers/routes";
import { LogoutModalContent } from "../../../../../data/pages/Other";

const LogoutModal = () => {
  const { logoutModal } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  const toggle = () => dispatch(setLogoutModal());
  return (
    <Modal fade centered modalClassName="theme-modal" isOpen={logoutModal} toggle={toggle}>
      <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
      <ModalBody>
        <div className="logout-img">
          <Image src={dynamicSvg("other/logout.svg")} alt="logout" className="img-fluid d-block mx-auto" />
        </div>
        <div className="logout-content">
          <h4 className="text-center">{AreYouLoggingOut}</h4>
          <p className="text-center">{LogoutModalContent}</p>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <Button className="btn-border" onClick={toggle}>
              {Cancel}
            </Button>
            <Link to={routes.Pages.Other.Login1} className="btn-solid">
              {LogOut}
            </Link>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default LogoutModal;
