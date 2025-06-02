import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AmenitiesTitle } from "../../../../../../constants";
import { AmenitiesData, AmenitiesSlider } from "../../../../../../data/Property";
import { DetailBodyItemType } from "../../../../../../types/Product";
import { dynamicImage } from "../../../../../../utils";
import RatioImage from "../../../../../../utils/RatioImage";

const Amenities: FC<DetailBodyItemType> = ({ label }) => {
  return (
    <div className="detail-body" id="amenities">
      {label && <h4 className="detail-page-title">{AmenitiesTitle}</h4>}
      <Swiper {...AmenitiesSlider} className="amenities-slider ratio_square">
        {AmenitiesData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="categories-box">
              <RatioImage
                src={dynamicImage(`property/${item.image}.jpg`)}
                alt="categories"
                className="img-fluid bg-img"
              />
              <div className="categories-box-border">
                <div className="icon-name">
                  <h5>{item.title}</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Amenities;
