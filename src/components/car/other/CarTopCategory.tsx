 
import { routes } from "../../../routers/routes";
import Breadcrumbs from "../../commonComponents/breadcrumbs";
import GridView from "../../commonComponents/gridView";

const CarTopCategoryContainer = () => {
  return (
    <>
      <Breadcrumbs title="Car Shop" url={routes.Home.CarDemo1} mainClass="car-breadcrumbs-section" />
      <GridView  sectionClass="car-shop-section car-product-section" filterTagsClass="car-list-header" gridSize={3} carShow={9} topCategory />
    </>
  );
};

export default CarTopCategoryContainer;
