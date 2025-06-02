import { FC, useState } from "react";
import { Container } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href } from "../../../constants";
import { BackSlider, FrontSlider } from "../../../data/Car";
import { CarBreadcrumbType } from "../../../types/Product";
import { dynamicImage, dynamicNumber, Image } from "../../../utils";
import RatioImage from "../../../utils/RatioImage";
import CarImageSlider from "../../home/common/CarImageSlider";
import DetailImages from "../productDetail/detailImages";
import MainDetail from "../productDetail/mainDetail";

const CarBreadcrumb: FC<CarBreadcrumbType> = ({
  detailImages,
  mailClass,
  multiple,
  type,
  modernSlider,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      {type === "car_thumbnail_slider" ? (
        <div className="style-breadcrumbs-4">
          <div className="car-detail-image">
            <Swiper
              className="back-slider ratio_45"
              {...BackSlider}
              thumbs={{ swiper: thumbsSwiper }}
            >
              {dynamicNumber(8).map((item, index) => (
                <SwiperSlide key={index}>
                  <a href={Href} className="back-img">
                    <RatioImage
                      src={dynamicImage(`car/black-images/${item}.jpg`)}
                      alt="dm-1"
                      className="img-fluid bg-img"
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              className="front-slider"
              {...FrontSlider}
              direction="vertical"
              onSwiper={setThumbsSwiper}
            >
              {dynamicNumber(8).map((item, index) => (
                <SwiperSlide key={index}>
                  <a href={Href} className="front-img">
                    <Image
                      src={dynamicImage(`car/black-images/${item}.jpg`)}
                      alt="dm-1"
                      className="img-fluid"
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        <div
          className={`car-breadcrumbs-section ${mailClass ? mailClass : ""}`}
        >
          <Container>
            {!detailImages && (
              <div className="car-detail-image">
                <DetailImages type={type} multiple={multiple} />
              </div>
            )}
            {modernSlider && <CarImageSlider />}
            <MainDetail type="car" />
          </Container>
        </div>
      )}
    </>
  );
};

export default CarBreadcrumb;
