import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { FC, } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { MeetOurBrokers, MeetOurTeam, TeamTitle } from "../../../constants";
import { SocialData, SocialListData, TeamData } from "../../../data/demo/PropertyDemo2";
import { AboutTeamSlider, TeamContent } from "../../../data/pages/Other";
import { routes } from "../../../routers/routes";
import { PropsType } from "../../../types/HomeDemo";
import { dynamicImage, dynamicSvg, Image } from "../../../utils";
import RatioImage from "../../../utils/RatioImage";
import CommonHeader from "./CommonHeader";

const Team: FC<PropsType> = ({ type }) => {
  return (
    <>
      {type === "property_demo2" && (
        <section className="property2-team-section section-t-lg-space section-b-lg-space">
          <Container>
            <CommonHeader title={MeetOurBrokers} headClass="title-style-1 title-style-6" subClass="horizontal-title" url={routes.Pages.Other.Team} view />
            <Row className="ratio_square justify-content-center gy-4">
              {TeamData.slice(5, 9).map((member, index) => (
                <Col lg="3" sm="6" key={index}>
                  <div className="team-box">
                    <div className="team-img">
                      <RatioImage src={dynamicImage(member.image)} alt={`team-${index + 1}`} className="bg-img" />
                    </div>
                    <div className="team-content">
                      <h5>{member.name}</h5>
                      <ul className="team-social">
                        {SocialData.map((social, i) => (
                          <li key={i}>
                            <Link to={`https://${social}.com/`} target="_blank" rel="noopener noreferrer">
                              <Image src={dynamicSvg(`property2/team/${i + 1}.svg`)} alt={`social-${i + 1}`} className="img-fluid" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      {type === "about3" && (
        <section className="property2-team-section car-about-team section-b-space">
          <Container>
            <div className="detail-flex-title">
              <h2>{MeetOurTeam}</h2>
              <div className="swiper-flex car-arrow">
                <div className="swiper-button-prev about-team-prev">
                  <ArrowLeft2 className="iconsax" />
                </div>
                <div className="swiper-button-next about-team-next">
                  <ArrowRight2 className="iconsax" />
                </div>
              </div>
            </div>
            <Swiper className="about-team-slider ratio_square" {...AboutTeamSlider}>
              {TeamData.slice(0, 9).map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="team-box">
                    <div className="team-img">
                      <RatioImage src={dynamicImage(item.image)} alt={`team-${index + 1}`} className="bg-img" />
                      <ul className="team-social">
                        {SocialData.map((social, i) => (
                          <li key={i}>
                            <Link to={`https://${social}.com/`} target="_blank" rel="noopener noreferrer">
                              <Image src={dynamicSvg(`property2/team/${i + 1}.svg`)} alt={`social-${i + 1}`} className="img-fluid" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="team-content">
                      <h5>{item.name}</h5>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </section>
      )}

      {type === "team" && (
        <section className="team-section section-b-space">
          <Container>
            <CommonHeader title={TeamTitle} content={TeamContent} headClass="content-title" />
            <Row className="g-xl-5 gy-4 ratio_square">
              {TeamData.slice(9).map((item, index) => (
                <Col xxl="3" lg="4" md="6" key={index}>
                  <div className="team-box">
                    <div className="overflow-hidden">
                      <div className="team-img">
                        <RatioImage src={dynamicImage(item.image)} alt={`team-${index + 1}`} className="bg-img" />
                      </div>
                    </div>
                    <div className="team-content">
                      <div>
                        <h4>{item.name}</h4>
                        <span>{item.type}</span>
                      </div>
                      <ul className="social-list">
                        {SocialListData.map((item, index) => (
                          <li key={index}>
                            <Link to={item.url} target="_blank">
                              <i className={item.icon} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default Team;
