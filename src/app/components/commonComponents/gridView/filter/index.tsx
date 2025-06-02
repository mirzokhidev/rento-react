import { FC, useEffect, useState } from "react";
import { UncontrolledAccordion } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../../../reduxToolkit/hooks";
import { setMinAndMaxKilometers, setMinAndMaxPrice } from "../../../../../reduxToolkit/reducers/filterSlice";
import { FilterSidebarType } from "../../../../../types/Product";
import { CategoriesData, FuelTypeData, ModalYearData, SeatsData, CarColorData, TransmissionData, OwnerData } from "../../../../../data/Car";
import BrandModelFilter from "./BrandModelFilter";
import CommonFilter from "./common/CommonFilter";

const FilterSidebar: FC<FilterSidebarType> = ({ value }) => {
  const { carCategories, carFuelType, carModalYear, carSeats, carColor, carTransmission, carOwner } = useAppSelector((state) => state.filter);
  const [openItems, setOpenItems] = useState<string[]>(["1", "2", "3", "8", "9", "10", "11", "12", "13", "14"]);
  const dispatch = useAppDispatch();

  const toggle = (id: string) => setOpenItems((openItems) => (openItems.includes(id) ? openItems.filter((item) => item !== id) : [...openItems, id]));

  let minPrice = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.price) < Math.round(res?.price) ? obj : res)) : undefined;
  let maxPrice = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.price) > Math.round(res?.price) ? obj : res)) : undefined;

  let minKilometers = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.kilometers) < Math.round(res?.kilometers) ? obj : res)) : undefined;
  let maxKilometers = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.kilometers) > Math.round(res?.kilometers) ? obj : res)) : undefined;

  useEffect(() => {
    dispatch(setMinAndMaxPrice([minPrice?.price, maxPrice?.price]));
    dispatch(setMinAndMaxKilometers([minKilometers?.kilometers, maxKilometers?.kilometers]));
  }, [dispatch, maxKilometers, maxPrice, minKilometers, minPrice]);

  return (
    <div className="property-sidebar car">
      <UncontrolledAccordion defaultOpen={openItems} stayOpen toggle={toggle} className="car-accordion">
        <BrandModelFilter id="1" />
        <CommonFilter title="Budget" id="2" priceRange type="car" />
        <CommonFilter title="Categories" id="3" data={CategoriesData} checkValue={carCategories} radio type="car" />
        <CommonFilter title="Fuel Type" id="8" data={FuelTypeData} checkValue={carFuelType} type="car" />
        <CommonFilter title="Modal Year" id="9" data={ModalYearData} checkValue={carModalYear} radio type="car" />
        <CommonFilter title="Seats" id="10" data={SeatsData} checkValue={carSeats} type="car" />
        <CommonFilter title="Color" id="11" data={CarColorData} checkValue={carColor} type="car" subClass="filter-color" />
        <CommonFilter title="KMS Driven" id="12" priceRange type="kilometers" />
        <CommonFilter title="Transmission" id="13" data={TransmissionData} checkValue={carTransmission} type="car" />
        <CommonFilter title="Owner" id="14" data={OwnerData} checkValue={carOwner} type="car" />
      </UncontrolledAccordion>
    </div>
  );
};

export default FilterSidebar;