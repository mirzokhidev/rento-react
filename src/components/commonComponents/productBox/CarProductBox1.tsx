import { Trash } from "iconsax-react";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Label } from "reactstrap";
import { Href, ShowMore } from "../../../constants";
import { useAppDispatch, useAppSelector } from "../../../reduxToolkit/hooks";
import { setPropertyItem } from "../../../reduxToolkit/reducers/productSlice";
import { routes } from "../../../routers/routes";
import { ProductBoxType } from "../../../types/Product";
import { dynamicSvg, Image } from "../../../utils";
import PropertyBoxSlider from "./common/PropertyBoxSlider";

const CarProductBox1: FC<ProductBoxType> = ({ data, wishlist, view }) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { productItem } = useAppSelector((state) => state.product);

  const handleWishlist = () => toast.success("Added to Wishlist successfully");

  const handleRemove = (id: number) => {
    const updatedProductItem = productItem.filter((item) => item.id !== id);
    dispatch(setPropertyItem(updatedProductItem));
    toast.success("Remove to Wishlist successfully");
  };

  const showDescription = location.pathname.includes("listing");

  return (
    <div className="featured-box">
      <div className="featured-main-img">
        <Link to={routes.Car.Detail.CarClassic} className="featured-img">
          <PropertyBoxSlider view={view} data={data} />
        </Link>
        {wishlist ? (
          <Link to={Href} className="remove-button" onClick={() => handleRemove(data.id)}>
            <Trash className="iconsax" />
          </Link>
        ) : (
          <Link to={Href} className="save-btn" onClick={() => handleWishlist()}>
            <i className="ri-bookmark-line" />
          </Link>
        )}
        {data.label && (
          <Label className={data.label.class}>
            <i className={data.label.icon} />
            {data.label.text}
          </Label>
        )}
      </div>
      <div className="featured-content">
        <Link to={routes.Car.Detail.CarClassic}>{data.title}</Link>
        {showDescription && <p className="featured-detail">{data.description}</p>}
        <p>{data.emi}</p>
        <ul className="featured-list">
          {data.features.slice(0, 3).map((item, index) => (
            <li key={index}>
              <Image src={dynamicSvg(item.icon)} alt="profile-2user" className="img-fluid" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="featured-price">
          <h5>${data.price}</h5>
          <Link to={routes.Car.Detail.CarClassic} className="arrow-btn">
            {ShowMore} <i className="ri-arrow-right-up-line" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarProductBox1;
