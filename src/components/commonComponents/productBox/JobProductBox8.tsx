import { Clock, Location } from "iconsax-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Label } from "reactstrap";
import { ApplyNow, Href, PeopleView } from "../../../constants";
import { routes } from "../../../routers/routes";
import { ProductBoxType } from "../../../types/Product";
import { dynamicSvg, Image } from "../../../utils";

const JobProductBox8: FC<ProductBoxType> = ({ data }) => {
  const handleWishlist = () => toast.success("Added to Wishlist successfully");

  return (
    <div className="job-box list-box-2">
      <div className="job-title-flex">
        <div className="job-title">
          <div className="job-icon">
            {data.image.map((imgSrc, idx) => (
              <Image src={dynamicSvg(imgSrc)} alt={`job-${idx}`} className="img-fluid" key={idx} />
            ))}
          </div>
          <Link to={routes.Job.Detail.JobDetail1} className="job-detail">
            <span>
              {data.company}
              <span>
                <i className="ri-star-fill" />
                {data.rating}
              </span>
              85 Review
            </span>
            <h5>{data.title}</h5>
          </Link>
        </div>
        <a href={Href} className="save-btn" onClick={() => handleWishlist()}>
          <i className="ri-bookmark-line" />
        </a>
      </div>
      <ul className="skill-list">
        {data.skills?.map((skill, idx) => (
          <li key={idx}>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
      <div className="job-tag-flex">
        <div className="job-tag">
          <div className="job-tag">
            <Label>
              <Image src={dynamicSvg("job/job-box/dollar-circle.svg")} alt="dollar-circle" className="img-fluid" />
              {data.salary}K USD
            </Label>
            <Label>
              <Image src={dynamicSvg("job/job-box/briefcase.svg")} alt="briefcase" className="img-fluid" />
              {data.jobType?.slice(0, 1).map((job) => job.replace("_", " "))}
            </Label>
            <Label>
              <Image src={dynamicSvg("job/job-box/eye-line.svg")} alt="eye-line" className="img-fluid" />
              {PeopleView}
            </Label>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <div className="post-time">
          <div className="post-flex">
            <div className="post-item">
              <Location className="iconsax" />
              <span>{data.location}</span>
            </div>
            <div className="post-item">
              <Clock className="iconsax" />
              <span>{data.time}</span>
            </div>
          </div>
        </div>
        <Link to={routes.Pages.Other.ContactUs1} className="arrow-btn">
          {ApplyNow} <i className="ri-arrow-right-up-line" />
        </Link>
      </div>
    </div>
  );
};

export default JobProductBox8;
