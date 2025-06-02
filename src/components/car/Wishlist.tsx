import { useEffect } from "react";
import { Wishlist } from "../../constants";
import { useAppDispatch } from "../../reduxToolkit/hooks";
import { routes } from "../../routers/routes";
import Breadcrumbs from "../commonComponents/breadcrumbs";
import WishlistBox from "../commonComponents/WishlistBox";
import { fetchProductApiData } from "../../reduxToolkit/reducers/productSlice";

const CarWishlistContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  return (
    <>
      <Breadcrumbs title={Wishlist} url={routes.Home.CarDemo1} mainClass="car-breadcrumbs-section" />
      <WishlistBox type="car" />
    </>
  );
};

export default CarWishlistContainer;
