import CarBreadcrumb from "../../commonComponents/breadcrumbs/CarBreadcrumb";
import CarDetail from "../../commonComponents/productDetail/CarDetail";

const CarScrollspyContainer = () => {
  return (
    <>
      <CarBreadcrumb detailImages />
      <CarDetail type="car" detailImages scrollspy />
    </>
  );
};

export default CarScrollspyContainer;
