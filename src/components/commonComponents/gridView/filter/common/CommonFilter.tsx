import { ChangeEvent, FC } from "react";
import { AccordionBody, AccordionHeader, AccordionItem, Input, Label } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../../../reduxToolkit/hooks";
import { setCarCategories, setCarFuelType, setCarModalYear, setCarSeats, setCarColor, setCarTransmission, setCarOwner } from "../../../../../reduxToolkit/reducers/filterSlice";
import { CommonFilterType } from "../../../../../types/Product";

const CommonFilter: FC<CommonFilterType> = ({ title, id, data, checkValue, radio, subClass }) => {
  const dispatch = useAppDispatch();
  const { carCategories, carFuelType, carModalYear, carSeats, carColor, carTransmission, carOwner } = useAppSelector((state) => state.filter);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, title: string) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    const actionCreator = (option?: string[] | string) => {
      if (Array.isArray(option)) return isChecked ? [...option, value] : option.filter((v) => v !== value);
      else if (typeof option === "string") return isChecked ? value : option !== value;
      return [];
    };

    const updateState = {
      Categories: () => dispatch(setCarCategories(actionCreator(carCategories))),
      "Fuel Type": () => dispatch(setCarFuelType(actionCreator(carFuelType))),
      "Modal Year": () => dispatch(setCarModalYear(actionCreator(carModalYear))),
      Seats: () => dispatch(setCarSeats(actionCreator(carSeats))),
      Color: () => dispatch(setCarColor(actionCreator(carColor))),
      Transmission: () => dispatch(setCarTransmission(actionCreator(carTransmission))),
      Owner: () => dispatch(setCarOwner(actionCreator(carOwner))),
    };

    updateState[title as keyof typeof updateState]?.();
  };

  return (
    <AccordionItem>
      <AccordionHeader targetId={id}>{title}</AccordionHeader>
      <AccordionBody accordionId={id}>
        <div className={`sidebar-choose-list categories-list ${subClass ? subClass : ""}`}>
          {data?.map((item, index) => (
            <div className="main-choose-item" key={index}>
              <div className="choose-item">
                <Input
                  type={radio ? "radio" : "checkbox"}
                  name={radio ? `category-${id}` : ""}
                  id={item.id}
                  value={item.type}
                  checked={checkValue?.includes(item.type)}
                  onChange={(event) => handleCheckboxChange(event, title)}
                />
                <Label htmlFor={item.id} className="label-flex">
                  <span>{item.label}</span>
                  {item.count && <span>({item.count})</span>}
                </Label>
              </div>
            </div>
          ))}
        </div>
      </AccordionBody>
    </AccordionItem>
  );
};

export default CommonFilter;