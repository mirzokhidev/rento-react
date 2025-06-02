import { useEffect, useState } from "react";
import { Loaders } from "../data/layout/Loader";
import { dynamicGrf, Image } from "../utils";
import UsePathName from "../utils/UsePathName";

const Loader = () => {
  const [show, setShow] = useState<boolean>(true);
  const [Path] = UsePathName();

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timeout);
  }, [show]);

  const loaderKey = Object.keys(Loaders).find((key) => Path === key);

  const loaderContent = Loaders[loaderKey || ""]?.svg || (
    <>
      <Image src={dynamicGrf(Loaders[loaderKey || ""]?.src || "car1-loader.gif")} alt="loader" className="img-fluid" />
      <h4>Loading. Please wait…</h4>
    </>
  );

  return (
    <>
      {show && (
        <div className="loader-wrapper">
          <div className={` "car-loader"}`}>{loaderContent}</div>
        </div>
      )}
    </>
  );
};

export default Loader;
