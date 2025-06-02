import { FC, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href } from "../../../../constants";
import { ProductSwiperSetting } from "../../../../data/demo/CarDemo1";
import { SliderFor, SliderNav } from "../../../../data/Property";
import { ProductBoxType } from "../../../../types/Product";
import { dynamicImage } from "../../../../utils";
import RatioImage from "../../../../utils/RatioImage";

const PropertyBoxSlider: FC<ProductBoxType> = ({ view, data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      {view === "multiple" ? (
        <>
          <Swiper className="thumb-main-slider ratio_65" {...SliderFor} thumbs={{ swiper: thumbsSwiper }}>
            {data.image.map((testimonial, index) => (
              <SwiperSlide key={index} className="bg-size">
                <RatioImage src={dynamicImage(testimonial)} alt="featured-img" className="bg-img" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper className="thumb-sub-slider" {...SliderNav} onSwiper={setThumbsSwiper}>
            {data.image.map((testimonial, i) => (
              <SwiperSlide key={i}>
                <a href={Href}>
                  <RatioImage src={dynamicImage(testimonial)} alt="featured-img" className="img-fluid" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : view === "image" ? (
        <RatioImage src={dynamicImage(data.image[0])} alt="featured-img" className="img-fluid bg-img" />
      ) : (
        <Swiper {...ProductSwiperSetting}>
          {data.image.map((testimonial, index) => (
            <SwiperSlide key={index} className="bg-size">
              <RatioImage src={dynamicImage(testimonial)} alt="featured-img" className="img-fluid bg-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default PropertyBoxSlider;
