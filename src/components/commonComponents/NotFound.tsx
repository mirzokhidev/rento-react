import { FC } from "react";
import { dynamicSvg, Image } from "../../utils";
import { NotFoundContent } from "../../data/pages/Other";

const NotFound: FC<{ word: string }> = ({ word }) => {
  return (
    <div className="no-found-item text-center">
      <Image src={dynamicSvg("other/not-found.svg")} alt="not-found" className="img-fluid" />
      <div className="no-found-content">
        <h3>{word}</h3>
        <p>{NotFoundContent}</p>
      </div>
    </div>
  );
};

export default NotFound;
