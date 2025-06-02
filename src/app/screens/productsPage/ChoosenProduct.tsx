import CarBreadcrumb from "../../components/commonComponents/breadcrumbs/CarBreadcrumb";
import CarDetail from "../../components/commonComponents/productDetail/CarDetail";

const ProductDetail = () => {
  return (
    <>
      <CarBreadcrumb detailImages />
      <CarDetail type="car" detailImages scrollspy />
    </>
  );
};

export default ProductDetail;
