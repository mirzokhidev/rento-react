import { BenefitsTitle } from "../../../../../../constants";
import { BenefitsListData } from "../../../../../../data/Job";
import { dynamicSvg, Image } from "../../../../../../utils";

const Benefits = () => {
  return (
    <div className="description-box">
      <h5 className="description-title">{BenefitsTitle}</h5>
      <ul className="features-list">
        {BenefitsListData.map((item, index) => (
          <li key={index}>
            <div className="featured-icon">
              <Image src={dynamicSvg(`job/job-detail/${index + 1}.svg`)} alt="j-1" />
            </div>
            <h5>{item}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Benefits;
