import { FC, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button, Row } from "reactstrap";
import { LoadMore, NoMoreProductsAvailable } from "../../../../constants";
import { useAppDispatch, useAppSelector } from "../../../../reduxToolkit/hooks";
import {
  setCardToShow,
  setTotalProduct,
} from "../../../../reduxToolkit/reducers/layoutSlice";
import { GridLayoutType} from "../../../../types/Product";
import NotFound from "../NotFound";
import PaginationDynamic from "../Pagination";
import CarProductBox1 from "../productBox/CarProductBox1";
import UseFilterCar from "./UseFilterCar";

const GridLayout: FC<GridLayoutType> = ({
  value,
  gridSize,
  gridType,
  view,
  scrollType,
  map,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { cardToShow } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  const Product = UseFilterCar({ value });
  const totalPages = Math.ceil(Product?.length / cardToShow);
  const showProduct =
    scrollType === "infinite"
      ? Product.slice(0, cardToShow * currentPage)
      : Product?.slice(
          cardToShow * currentPage - cardToShow,
          cardToShow * currentPage
        );
  const RowBoxClass =
    gridType === "list-view"
      ? "car-list-section ratio_65"
      : view === "multiple"
      ? "ratio_65"
      : "ratio_landscape";
  const ColBoxClass =
    gridSize === 3
      ? "col-lg-4 col-sm-6"
      : gridSize === 4
      ? "col-xxl-3 col-lg-4 col-sm-6"
      : gridSize === 1
      ? "col-xl-12"
      : gridSize === 2
      ? "col-lg-6"
      : "col-sm-6";

  const fetchMoreData = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const InfiniteScrollClass = {
    dataLength: showProduct.length,
    next: fetchMoreData,
    hasMore: currentPage < totalPages,
    className: "row gy-4",
    loader: <h4>Loading...</h4>,
  };

  useEffect(() => {
    dispatch(setTotalProduct(Product.length || 0));
  }, [Product.length, dispatch]);

  return (
    <div
      className={`${map ? "col-xl-6" : ""} ${
        scrollType === "load_more" ? "featured-wrapper" : ""
      }`}>
      <Row className={`gy-4 ${RowBoxClass}`}>
        {scrollType === "infinite" ? (
          <InfiniteScroll {...InfiniteScrollClass}>
            {showProduct.map((data, index) => (
              <div className={ColBoxClass} key={data.id || index}>
                <CarProductBox1 data={data} view={view} />
              </div>
            ))}
          </InfiniteScroll>
        ) : (
          showProduct.map((data, index) => (
            <div className={ColBoxClass} key={data.id || index}>
              <CarProductBox1 data={data} view={view} />
            </div>
          ))
        )}
      </Row>

      {showProduct.length !== 0 ? (
        scrollType === "load_more" ? (
          currentPage < totalPages ? (
            <Button
              className="btn-solid load-more"
              onClick={() => dispatch(setCardToShow(cardToShow + 3))}>
              {LoadMore}
            </Button>
          ) : (
            <p id="no-more-products" style={{ display: "block" }}>
              {NoMoreProductsAvailable}
            </p>
          )
        ) : (
          scrollType !== "infinite" && (
            <PaginationDynamic
              totalPages1={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )
        )
      ) : (
        <NotFound word="No cars found" />
      )}
    </div>
  );
};

export default GridLayout;
