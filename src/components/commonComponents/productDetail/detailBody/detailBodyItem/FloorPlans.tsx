import { FC } from "react";
import { Bedroom, FloorPlansTitle } from "../../../../../constants";
import { FloorPlansContentData, FloorPlansData } from "../../../../../data/Property";
import { DetailBodyItemType } from "../../../../../types/Product";
import { dynamicImage, Image } from "../../../../../utils";
import SvgIcon from "../../../../../utils/SvgIcon";

const FloorPlans: FC<DetailBodyItemType> = ({ label }) => {
  return (
    <div className="detail-body" id="floor">
      {label && <h4 className="detail-page-title">{FloorPlansTitle}</h4>}
      <p className="p-0">{FloorPlansContentData}</p>
      <div className="floor-img">
      <ul className="floor-list">
        {FloorPlansData.map((item, index) => (
          <li className="floor-item" key={index}>
            <div className="floor-icon">
              <SvgIcon iconId={`property/sprite/overview.svg#${item}`} />
              <span>2</span>
            </div>
            <h5>{Bedroom}</h5>
          </li>
        ))}
      </ul>
        <Image src={dynamicImage("property/detail/floor.png")} alt="f-2" className="img-fluid" />
      </div>
    </div>
  );
};

export default FloorPlans;
