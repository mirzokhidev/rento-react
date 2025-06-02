import { Link } from "react-router-dom";
import { ViewAll } from "../../../constants";
import { routes } from "../../../routers/routes";
import { CommonHeaderType } from "../../../types/CommonComponents";
import { FC } from "react";

const CommonHeader: FC<CommonHeaderType> = ({ title, content, animation, headClass, titleClass, view, subClass, url, contentClass }) => {
  return (
    <div className={headClass}>
      <div className={subClass ? subClass : "title-flex"}>
        {animation && (
          <div className="title-animation-left">
            <span />
            <span />
          </div>
        )}
        <h2 className={titleClass}>{title}</h2>
        {animation && (
          <div className="title-animation-right">
            <span />
            <span />
          </div>
        )}
        {view && <Link to={url || routes.Home.CarDemo1}>{ViewAll}</Link>}
      </div>
      <p className={contentClass ? contentClass : ""}>{content}</p>
    </div>
  );
};

export default CommonHeader;
