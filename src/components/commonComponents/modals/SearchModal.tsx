import { FC, } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Reset, Search } from "../../../constants";
import { useAppDispatch, useAppSelector } from "../../../reduxToolkit/hooks";
import { setAmenities, setBedsRooms, setBudgetStatus, setCarBrandModel, setCarCategories, setCarColor, setCarFuelType, setCarKilometers, setCarModalYear, setCarOwner, setCarSeats, setCarTransmission, setPopular, setPriceStatus, setPropertyType, setSortBy, setSquareFeetStatus, setyearBuiltStatus } from "../../../reduxToolkit/reducers/filterSlice";
import { setSearchModal } from "../../../reduxToolkit/reducers/layoutSlice";
import CloseBtn from "../CloseBtn";
import FilterSidebar from "../gridView/filter";

const SearchModal: FC<{ type: string, carSpaceClass?: string }> = ({ type, carSpaceClass = "" }) => {
  const { searchModal } = useAppSelector((state) => state.layout);
  const { productItem } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const showProduct = productItem.filter((item) => item.type === type);

  const toggle = () => dispatch(setSearchModal());

  const handleReset = () => {
    const resetActions = [setPropertyType([]), setBedsRooms([]), setAmenities([]), setSortBy(null), setPopular(null), setPriceStatus([40000, 500000]), setSquareFeetStatus([400, 4000]), setyearBuiltStatus([2019, 2024]), setCarBrandModel([]), setBudgetStatus([40000, 300000]), setCarCategories(""), setCarFuelType([]), setCarModalYear(""), setCarSeats([]), setCarColor([]), setCarTransmission([]), setCarOwner([]), setCarKilometers([10000, 40000])];
    resetActions.forEach(dispatch);
  };

  return (
    <>
      <div className={`mobile-space ${carSpaceClass}`} />
      <Modal scrollable fade modalClassName="theme-modal search-modal" isOpen={searchModal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
        <ModalBody>
          <div className="filter-header">
            <h3>{Search}</h3>
            <span onClick={handleReset}>{Reset}</span>
          </div>
          <FilterSidebar value={showProduct} type={type} />
        </ModalBody>
        <ModalFooter>
          <Button className="btn-solid">{Search}</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default SearchModal;
