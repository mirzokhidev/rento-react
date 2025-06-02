import { ArrowLeft2, ArrowRight2, Play } from "iconsax-react";
import { FC, useEffect, useState } from "react";
import { Button, Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href, VideoTitle } from "../../../constants";
import { CraNavDetailsData, DetailSimpleSlider } from "../../../data/Property";
import { useAppDispatch } from "../../../reduxToolkit/hooks";
import { fetchProductApiData } from "../../../reduxToolkit/reducers/productSlice";
import { setVideoModal } from "../../../reduxToolkit/reducers/layoutSlice";
import { CarDetailType } from "../../../types/Product";
import { dynamicImage, dynamicNumber } from "../../../utils";
import RatioImage from "../../../utils/RatioImage";
import UseStickyBar from "../../../utils/UseStickyBar";
import DetailBody from "./detailBody";
import DetailImages from "./detailImages";
import DetailSidebar from "./detailSidebar";
import RelatedProduct from "./RelatedProduct";

const CarDetail: FC<CarDetailType> = ({ detailImages, type, scrollspy, classicSlider }) => {
  const [activeTab, setActiveTab] = useState(CraNavDetailsData[0].id);
  const dispatch = useAppDispatch();
  const fix = UseStickyBar(300);

  const toggle = (id: string) => {
    setActiveTab(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 20;

      CraNavDetailsData.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="section-b-space car-detail-section">
      <Container>
        {detailImages && (
          <div className="car-detail-image">
            <DetailImages type="car_detail" />
          </div>
        )}
        <Row className="custom-row">
          <Col lg="9">
            {scrollspy && (
              <div className={`sticky-nav ${fix ? "sticky" : ""}`}>
                <Nav pills>
                  {CraNavDetailsData.map(({ id, label }) => (
                    <NavItem key={id} onClick={() => toggle(id)}>
                      <NavLink className={`${activeTab === id ? "active" : ""}`} href={`#${id}`}>
                        {label}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </div>
            )}
            {classicSlider && (
              <div className="car-detail-image position-relative">
                <Swiper {...DetailSimpleSlider} className="detail-simple-slider ratio2_3">
                  {dynamicNumber(9).map((item) => (
                    <SwiperSlide key={item}>
                      <a href={Href} className="car-slider-img bg-size">
                        <RatioImage src={dynamicImage(`car/product/${item}.jpg`)} alt="d-1" className="img-fluid bg-img" />
                      </a>
                    </SwiperSlide>
                  ))}
                  <div className="swiper-button-next">
                    <ArrowRight2 className="iconsax" />
                  </div>
                  <div className="swiper-button-prev">
                    <ArrowLeft2 className="iconsax" />
                  </div>
                </Swiper>
                <Button className="video-modal-btn" onClick={() => dispatch(setVideoModal())}>
                  <Play className="iconsax" />
                  {VideoTitle}
                </Button>
              </div>
            )}
            <div className="car-detail-right">{scrollspy ? <DetailBody type={type} /> : <DetailBody type={type} />}</div>
          </Col>
          <DetailSidebar  />
        </Row>
        <RelatedProduct  />
      </Container>
    </div>
  );
};

export default CarDetail;
