import { FC, } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import {  CategoriesTitle,  } from "../../../constants";
import { CategoriesContentData, CategoriesSettingData } from "../../../data/demo/CarDemo1";
import { useAppSelector } from "../../../reduxToolkit/hooks";
import { routes } from "../../../routers/routes";
import { PropsType } from "../../../types/HomeDemo";
import { dynamicImage, dynamicSvg, Image } from "../../../utils";
import RatioImage from "../../../utils/RatioImage";
import CommonHeader from "./CommonHeader";

const Categories: FC<PropsType> = ({ type }) => {
  const { categoryItem } = useAppSelector((state) => state.product);
  return (
    <>
   
      {type === "car_demo1" && (
        <section className="car-categories-section bg-color section-t-lg-space">
          <Container>
            <CommonHeader title={CategoriesTitle} content={CategoriesContentData} headClass="title-style-2" animation />
            <Swiper {...CategoriesSettingData} className="car-categories-slider">
              {categoryItem
                .filter((e) => [1, 2, 3, 4, 5, 6, 7].includes(e.id))
                .map((car, index) => (
                  <SwiperSlide key={index}>
                    <div className="categories-box">
                      <Link to={routes.Car.Listing.CarLeftList} className="categories-img">
                        <Image src={dynamicImage(car.categoryImage)} alt={`car-${index + 1}`} className="img-fluid" />
                      </Link>
                      <div className="categories-board">
                        <span>{car.label}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </Container>
        </section>
      )}

      
    </>
  );
};

export default Categories;
