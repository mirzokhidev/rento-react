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
import { dynamicVideo } from "../../../utils";
import SvgIcon from "../../../utils/SvgIcon";
import PropertyBoxSlider from "./common/PropertyBoxSlider";

const PropertyProductBox1: FC<ProductBoxType> = ({ data, view, wishlist }) => {
  const { productItem } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleWishlist = () => toast.success("Added to Wishlist successfully");

  const handleRemove = (id: number) => {
    const updatedProductItem = productItem.filter((item) => item.id !== id);
    dispatch(setPropertyItem(updatedProductItem));
    toast.success("Remove to Wishlist successfully");
  };

  const showDescription = location.pathname.includes("listing");

  return (
    <div className="featured-box">
      {view === "video" ? (
        <div className="featured-video">
          <video ref={(video) => {
            if (video) {
              video.pause();
            }
            }}
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => e.currentTarget.pause()}
            muted
            loop
            autoPlay>
            <source src={dynamicVideo(data.video ? data.video : "1.mp4")} type="video/mp4" />
            <source src={dynamicVideo(data.video ? data.video : "1.mp4")} type="video/ogg" />
          </video>
        </div>
      ) : (
        <div className="featured-main-img">
          <Link to={view === "multiple" ? Href : routes.Property.Detail.PropertySidebarLayout} className="featured-img">
            <PropertyBoxSlider view={view} data={data} />
          </Link>
          {data.label && <Label className="save-btn-label">{data.label.text}</Label>}
          {wishlist ? (
            <Link to={Href} className="remove-button" onClick={() => handleRemove(data.id)}>
              <Trash className="iconsax" />
            </Link>
          ) : (
            <Link to={Href} className="save-btn" onClick={() => handleWishlist()}>
              <i className="ri-bookmark-line" />
            </Link>
          )}
        </div>
      )}
      <div className="featured-content">
        <Link to={routes.Property.Detail.PropertySidebarLayout}>{data.title}</Link>
        {showDescription && <p>{data.description}</p>}
        <p>{data.location}</p>
        <ul className="featured-list">
          {data.features.slice(0, 3).map((item, index) => (
            <li key={index}>
              <SvgIcon iconId={`property/sprite/${item.icon}`} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="featured-price">
          <h5>${data.price}</h5>
          <Link to={routes.Property.Detail.PropertySidebarLayout} className="btn-solid">
            {ShowMore}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyProductBox1;
