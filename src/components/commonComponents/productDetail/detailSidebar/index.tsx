import { FC } from "react";
import { Button, Col } from "reactstrap";
import { MakeOfferPriceTitle, ScheduleTestDriverTitle } from "../../../../constants";
import { useAppDispatch } from "../../../../reduxToolkit/hooks";
import { setDriverModal, setOfferModal } from "../../../../reduxToolkit/reducers/layoutSlice";
import DriverModal from "../../modals/DriverModal";
import OfferModal from "../../modals/OfferModal";
import ContactInfo from "./ContactInfo";
import Exploration from "./Exploration";


const DetailSidebar: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Col lg="3">
        <div className="car-detail-sidebar">
          <div className="sidebar-box">
            <Button className="btn-solid" onClick={() => dispatch(setDriverModal())}>
              <i className="ri-steering-2-line" /> {ScheduleTestDriverTitle}
            </Button>
            <Button className="btn-border" onClick={() => dispatch(setOfferModal())}>
              <i className="ri-price-tag-3-line" /> {MakeOfferPriceTitle}
            </Button>
          </div>
          <div className="sidebar-box">
            <div className="detail-sub-sidebar">
              <ContactInfo />
              <Exploration />
            </div>
          </div>
        
        </div>
      </Col>
      <DriverModal />
      <OfferModal />
    </>
  );
};

export default DetailSidebar;