 
import { routes } from "../../../routers/routes";
import Breadcrumbs from "../../components/commonComponents/breadcrumbs";
import GridView from "../../components/commonComponents/gridView";



const Products = () => {
  return (
    <>
      <Breadcrumbs title="Car Shop" url={routes.Home.Landing} mainClass="car-breadcrumbs-section" />
      <GridView  sectionClass="car-shop-section car-product-section" filterTagsClass="car-list-header" gridSize={3} carShow={9} topCategory />
    </>
  );
};

export default Products;
