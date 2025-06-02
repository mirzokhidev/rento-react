import { FC } from "react";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { Filters } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../reduxToolkit/hooks";
import { setOpenFilterSidebar } from "../../reduxToolkit/reducers/layoutSlice";
import { FilterOffcanvasType } from "../../types/CommonComponents";
import FilterSidebar from "./gridView/filter";

const FilterOffcanvas: FC<FilterOffcanvasType> = ({ type, offcanvasSide, modalType }) => {
  const { productItem } = useAppSelector((state) => state.product);
  const { openFilterSidebar } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  const showProduct = productItem.filter((item) => item.type === type);
  const toggle = () => dispatch(setOpenFilterSidebar());

  const OffcanvasCloseBtn = ({ toggle }: { toggle: () => void }) => (
    <Button onClick={toggle} className="close-btn">
      <i className="ri-close-line" />
    </Button>
  );
  

  return (
    <Offcanvas fade direction={offcanvasSide === "right" ? "end" : "start"} isOpen={openFilterSidebar} toggle={toggle}>
      <OffcanvasHeader toggle={toggle} tag="h5" close={<OffcanvasCloseBtn toggle={toggle} />}>
        {Filters}
      </OffcanvasHeader>
      <OffcanvasBody>
        <FilterSidebar value={showProduct} modalType={modalType} type={type} />
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default FilterOffcanvas;
