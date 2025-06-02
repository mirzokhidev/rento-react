import { useState } from "react";
import { Button } from "reactstrap";
import UsePathName from "../../../utils/UsePathName";
import { ModeButtonHidden } from "../../../data/pages/Other";
import configDB from "../../../config/themeConfig";

const Customizer = () => {
  const [isLayoutMode, setLayoutMode] = useState(false);
  const [isLayoutType, setLayoutType] = useState(false);
  const Path = UsePathName();

  const toggleLayoutMode = () => {
    const mode = isLayoutMode ? "light" : "dark";
    document.body.classList.toggle("light", isLayoutMode);
    document.body.classList.toggle("dark", !isLayoutMode);
    configDB.mix_background_layout = mode;
    setLayoutMode(!isLayoutMode);
  };

  const toggleLayoutType = () => {
    const layoutType = isLayoutType ? "ltr" : "rtl";
    document.documentElement.dir = layoutType;
    configDB.layout_type = layoutType;
    setLayoutType(!isLayoutType);
  };

  const shouldRender = !ModeButtonHidden.includes(Path[2]) && !ModeButtonHidden.includes(Path[0]) && !ModeButtonHidden.includes(Path[3]);

  return (
    <>
      {Path[2] !== "portfolio-vertical-slider" && (
        <div className={`theme-btn-flex ${Path[0] === "job" ? "job-color-change" : Path[0] === "car-2" ? "car2-color-change" : ""}`}>
          {shouldRender && (
            <Button className="mode-button mode-change-button" onClick={toggleLayoutMode}>
              <i className={`ri-${isLayoutMode ? "sun" : "moon"}-line`} />
              <span>{isLayoutMode ? "Light" : "Dark"}</span>
            </Button>
          )}
          <Button className="mode-button rtlBtnEl" onClick={toggleLayoutType}>
            <i className="ri-repeat-line" />
            <span>{isLayoutType ? "LTR" : "RTL"}</span>
          </Button>
        </div>
      )}
    </>
  );
};

export default Customizer;
