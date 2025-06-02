import { Clock, Location, Trash } from "iconsax-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Label } from "reactstrap";
import { ApplyNow, Href } from "../../../constants";
import { routes } from "../../../routers/routes";
import { ProductBoxType } from "../../../types/Product";
import { dynamicImage, dynamicNumber, dynamicSvg, Image } from "../../../utils";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../../reduxToolkit/hooks";
import { setPropertyItem } from "../../../reduxToolkit/reducers/productSlice";

const JobProductBox1: FC<ProductBoxType> = ({ data, wishlist }) => {
  const { productItem } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const handleWishlist = () => toast.success("Added to Wishlist successfully");

  const handleRemove = (id: number) => {
    const updatedProductItem = productItem.filter((item) => item.id !== id);
    dispatch(setPropertyItem(updatedProductItem));
    toast.success("Remove to Wishlist successfully");
  };

  return (
    <div className="job-box">
      <div className="job-title-flex">
        <div className="job-title">
          <div className="job-icon">
            {data.image.map((imgSrc, idx) => (
              <Image src={dynamicSvg(imgSrc)} alt={`job-${idx}`} className="img-fluid" key={idx} />
            ))}
          </div>
          <Link to={routes.Job.Detail.JobDetail1} className="job-detail">
            <span>{data.company}</span>
            <h5>{data.title}</h5>
          </Link>
        </div>
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
      <div className="job-tag">
        <Label>
          <Image src={dynamicSvg("job/job-box/dollar-circle.svg")} alt="dollar-circle" className="img-fluid" />
          {data.salary}K USD
        </Label>
        <Label>
          <Image src={dynamicSvg("job/job-box/briefcase.svg")} alt="briefcase" className="img-fluid" />
          {data.jobType?.slice(0, 1).map((job) => job.replace("_", " "))}
        </Label>
      </div>
      <p>{data.description}</p>
      <ul className="post-time">
        <li>
          <Location className="iconsax" />
          <span>{data.location}</span>
        </li>
        <li>
          <Clock className="iconsax" />
          <span>{data.time}</span>
        </li>
      </ul>
      <div className="btn-flex">
        <ul className="round-photo">
          {dynamicNumber(4).map((photo, idx) => (
            <li key={idx}>
              <Image src={dynamicImage(`job/job-box/${photo}.jpg`)} alt={`job-${data.id}-${idx}`} className="img-fluid" />
            </li>
          ))}
        </ul>
        <Link to={routes.Pages.Other.ContactUs1} className="arrow-btn">
          {ApplyNow} <i className="ri-arrow-right-up-line" />
        </Link>
      </div>
    </div>
  );
};

export default JobProductBox1;
