import { CarRental, Rental } from "../../../constants";
import { dynamicGrf, Image } from "../../../utils";
import CarImageSlider from "../common/CarImageSlider";
import SearchTabList from "../common/SearchTabList";

const CarHomeSection = () => {
  return (
    <div className="car-home-section" id="CarHome">
      <div className="home-section-box">
        <div className="home-content">
          <h3>{CarRental}</h3>
          <h1>{Rental}</h1>
        </div>
        <CarImageSlider />
      </div>
      <div className="property-home-tab car-home-tab">
        <div className="car-tab-flex">
          <SearchTabList showTab={[1, 2, 5, 6]} endPoint={2} pills icon />
          <a href="#CarHome" className="scroll-down">
            <Image src={dynamicGrf("mouse-animation.gif")} alt="mouse-animation" className="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarHomeSection;
