import { FC, } from "react";
import { DescriptionTitle, PropertyDescriptionTitle, PropertyDetailsTitle } from "../../../../../constants";
import { PropertyDescriptionData, PropertyDetailsData } from "../../../../../data/Property";
import { DetailBodyItemType } from "../../../../../types/Product";
import { CarDescription } from "../../../../../data/Car";

const Description: FC<DetailBodyItemType> = ({ label, type }) => {
  return (
    <>
      {type === "car" ? (
        <div className="detail-box" id="description">
          <h3 className="car-title">{DescriptionTitle}</h3>
          {CarDescription.map((item, index) => (
            <p className={index === 0 ? "mb-md-2" : ""} key={index}>
              {item}
            </p>
          ))}
        </div>
      ) : (
        <div className="detail-body" id="description">
          {label && <h4 className="detail-page-title">{PropertyDescriptionTitle}</h4>}
          <p>{PropertyDescriptionData}</p>
          <h4 className="detail-page-title">{PropertyDetailsTitle}</h4>
          <ul className="property-detail-page">
            {PropertyDetailsData.map((item) => (
              <li key={item.id}>
                <h6>{item.label}</h6>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Description;
