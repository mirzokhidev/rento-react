import { Col, Container, Row } from "reactstrap";
import { MostSearchedTitle } from "../../../constants";
import { MostSearchedContentData } from "../../../data/demo/CarDemo1";
import { useAppSelector } from "../../../reduxToolkit/hooks";
import CarProductBox1 from "../../commonComponents/productBox/CarProductBox1";
import CommonHeader from "../common/CommonHeader";

const Product = () => {
  const { productItem } = useAppSelector((state) => state.product);

  return (
    <section className="car-product-section section-b-space">
      <Container>
        <CommonHeader title={MostSearchedTitle} content={MostSearchedContentData} headClass="title-style-2" animation />
        <Row className="gy-4 ratio_65">
          {productItem
            .filter(({ id }) => [1, 2, 3, 4].includes(id))
            .map((item, index) => (
              <Col xxl="3" lg="4" sm="6" data-aos="fade-up" data-aos-duration={200 * (index + 1)} key={index}>
                <CarProductBox1 data={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default Product;
