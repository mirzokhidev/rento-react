import { FC, useEffect } from "react";
import { Col, Row } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../../reduxToolkit/hooks";
import { fetchProductApiData } from "../../../../reduxToolkit/reducers/productSlice";
import { setCardToShow } from "../../../../reduxToolkit/reducers/layoutSlice";
import FilterOffcanvas from "../FilterOffcanvas";
import FilterTags from "./filter/FilterTags";
import GridLayout from "./GridLayout";
import Category from "./Category";
import TopFilter from "./filter/TopFilter";

type CarGridViewProps = {
  gridSize?: number;
  sectionClass?: string;
  gridType?: string;
  view?: string;
  topFilterSidebar?: boolean;
  offcanvasSide?: string;
  scrollType?: string;
  map?: boolean;
  mapSide?: "left" | "right";
  modalType?: string;
  filterTagsClass?: string;
  carShow?: number;
  topCategory?: boolean;
};

const GridView: FC<CarGridViewProps> = ({
  gridSize = 3,
  sectionClass = "",
  gridType,
  view,
  topFilterSidebar,
  offcanvasSide,
  scrollType,
  map = false,
  mapSide = "left",
  modalType,
  filterTagsClass,
  carShow = 6,
  topCategory = false,
}) => {
  const dispatch = useAppDispatch();
  const { productItem } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(setCardToShow(carShow));
  }, [carShow, dispatch]);

  const carProducts = productItem.filter((item) => item.type === "car");

  return (
    <>
      <section
        className={`section-t-md-space section-b-md-space ${sectionClass}`}>
        {topCategory && <Category />}
        <div className={gridSize === 4 ? "custom-container" : "container"}>
          <Row>
            <div className="col-xl-12">
              <TopFilter />
              <FilterTags
                side="left"
                topFilterSidebar={topFilterSidebar}
                mainClass={filterTagsClass}
                type="car"
              />
              {map ? (
                <Row className="gy-4">
                  <Col
                    xl="6"
                    className={`map-section ${
                      mapSide === "right" ? "order-1" : ""
                    }`}>
                    <div id="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20281.52037088709!2d56.051818439171534!3d25.89548611084295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef67bc7d52f2459%3A0xa922da11fbe1044d!2zQWxqb29kIFJlc29ydCDYpdiz2KrYsdin2K3YqSDYp9mE2KzZiNiv!5e0!3m2!1sen!2sin!4v1731671548714!5m2!1sen!2sin"
                        width={650}
                        height={800}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps"
                      />
                    </div>
                  </Col>
                  <GridLayout
                    value={carProducts}
                    type="car"
                    gridSize={gridSize}
                    gridType={gridType}
                    view={view}
                    scrollType={scrollType}
                    map={true}
                    side="left"
                  />
                </Row>
              ) : (
                <GridLayout
                  value={carProducts}
                  type="car"
                  gridSize={gridSize}
                  gridType={gridType}
                  view={view}
                  scrollType={scrollType}
                  map={false}
                  side="left"
                />
              )}
            </div>
          </Row>
        </div>
      </section>
      <FilterOffcanvas
        modalType={modalType}
        type="car"
        offcanvasSide={offcanvasSide}
      />
    </>
  );
};

export default GridView;
