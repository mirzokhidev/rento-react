import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { RecommendedUsedCarsTitle } from "../../../../constants";
import { DetailCarSlider } from "../../../../data/Property";
import { useAppSelector } from "../../../../reduxToolkit/hooks";
import CarProductBox1 from "../productBox/CarProductBox1";

const RelatedProduct: FC = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const carProducts = productItem.filter((item) => item.type === "car");

  return (
    <div className="section-t-space car-product-section">
      <div className="detail-flex-title">
        <h3>{RecommendedUsedCarsTitle}</h3>
        <div className="swiper-flex car-arrow">
          <div className="swiper-button-prev car-related-prev">
            <ArrowLeft2 className="iconsax" />
          </div>
          <div className="swiper-button-next car-related-next">
            <ArrowRight2 className="iconsax" />
          </div>
        </div>
      </div>
      <Swiper {...DetailCarSlider} className="car-related-slider ratio_65">
        {carProducts.map((item, index) => (
          <SwiperSlide key={index}>
            <CarProductBox1 data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProduct;