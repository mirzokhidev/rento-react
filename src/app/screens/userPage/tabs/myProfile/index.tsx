import { Edit } from "iconsax-react";
import React, { FC, } from "react";
import { Col, Row } from "reactstrap";
import { Address, EditTitle, Href, LeedsUnitedKingdom, MyProfileTitle, PersonalInformation, ProfileName, RealEstateAgent } from "../../../../../constants";
import { dynamicImage, Image } from "../../../../../utils";
import { AddressListData, PersonalInformationListData } from "../../../../../data/pages/Other";
import { TextInputType } from "../../../../../types/Other";
import PersonalModal from "./PersonalModal";
import { useAppDispatch } from "../../../../../reduxToolkit/hooks";
import { setAddressModal, setPersonalModal } from "../../../../../reduxToolkit/reducers/layoutSlice";
import AddressModal from "./AddressModal";

const MyProfile = () => {
  const dispatch = useAppDispatch();

  const TextInput: FC<TextInputType> = ({ label, value }) => (
    <div className="text-input">
      <span>{label}</span>
      <h5>{value}</h5>
    </div>
  );

  return (
    <>
      <div className="profile-main">
        <div className="common-card">
          <div className="white-card">
            <div className="edit-flex">
              <h4 className="dashboard-title mb-0">{MyProfileTitle}</h4>
            </div>
            <div className="profile-img">
              <Image src={dynamicImage("car/person/2.jpg")} alt="Profile" className="img-fluid" />
              <div className="profile-content">
                <h4>{ProfileName}</h4>
                <h6>{RealEstateAgent}</h6>
                <span>{LeedsUnitedKingdom}</span>
              </div>
            </div>
          </div>
          <div className="white-card">
            <div className="edit-flex">
              <h4 className="dashboard-title mb-0">{PersonalInformation}</h4>
              <a href={Href} className="edit-btn" onClick={() => dispatch(setPersonalModal())}>
                <Edit className="iconsax" />
                {EditTitle}
              </a>
            </div>
            <Row className="gy-lg-4 gy-3">
              {PersonalInformationListData.map((data, index) => (
                <Col lg="6" key={index}>
                  <TextInput label={data.label} value={data.value} />
                </Col>
              ))}
            </Row>
          </div>
          <div className="white-card">
            <div className="edit-flex">
              <h4 className="dashboard-title mb-0">{Address}</h4>
              <a href={Href} className="edit-btn" onClick={() => dispatch(setAddressModal())}>
                <Edit className="iconsax" />
                {EditTitle}
              </a>
            </div>
            <Row className="gy-lg-4 gy-3">
              {AddressListData.map((data, index) => (
                <Col lg="6" key={index}>
                  <TextInput label={data.label} value={data.value} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
      <PersonalModal />
      <AddressModal />
    </>
  );
};

export default MyProfile;
