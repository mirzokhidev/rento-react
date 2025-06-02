import { useEffect } from "react";
import { useAppDispatch } from "../../../reduxToolkit/hooks";
import Categories from "../../components/commonComponents/Categories";
import Testimonials from "../../components/commonComponents/Testimonials";
import { fetchCategoryApiData, fetchProductApiData } from "../../../reduxToolkit/reducers/productSlice";
import CarHomeSection from "./CarHomeSection";
import Product from "./Product";
import Service from "./Service";
import Offer from "./Offer";
import Work from "./Work";
import Experience from "./Experience";
import About from "./About";

const CarDemo1 = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
  }, [dispatch]);
  return (
    <>
      <CarHomeSection />
      <Categories type={"car_demo1"} />
      <Product />
      <Service />
      <Offer />
      <Work />
      <Experience />
      <About header />
      <Testimonials type={"car_demo1"} animation />
    </>
  );
};

export default CarDemo1;
