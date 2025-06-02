import { FC } from "react";
import { Col, Input, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { ScheduleTourTitle, SelectYourTime, SubmitReview } from "../../../../../../constants";
import { Days, ScheduleSlider, Time } from "../../../../../../data/Property";
import { DetailBodyItemType } from "../../../../../../types/Product";
import RenderInput from "../../../RenderInput";

const ScheduleTour: FC<DetailBodyItemType> = ({ label }) => {
  return (
    <div className="detail-body" id="schedule">
      {label && <h4 className="detail-page-title">{ScheduleTourTitle}</h4>}
      <Swiper {...ScheduleSlider} className="schedule-slider">
        {Days.map(({ day, date, month }) => (
          <SwiperSlide key={date}>
            <div className="schedule-box">
              <span>{day}</span>
              <span>{String(date).padStart(2, "0")}</span>
              <span>{month}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="schedule-form">
        <Row className="gy-sm-4 gy-3">
          <RenderInput placeholder="Enter Your Name" ColClass="col-lg-6" review />
          <RenderInput placeholder="Enter Your Email" ColClass="col-lg-6" review />
          <Col lg="6">
            <div className="review-input">
              <Input type="select" className="form-control" required>
                <option defaultValue={SelectYourTime} disabled>
                  {SelectYourTime}
                </option>
                {Time.map(({ hour, minute }, index) => (
                  <option key={index} defaultValue={index}>
                    {hour}:{minute}
                  </option>
                ))}
              </Input>
            </div>
          </Col>
          <RenderInput placeholder="Enter Your Number" ColClass="col-lg-6" review />
          <RenderInput placeholder="Message" ColClass="col-xs-12" inputType="textarea" review />
          <RenderInput button={SubmitReview} ColClass="col-xs-12" review />
        </Row>
      </div>
    </div>
  );
};

export default ScheduleTour;
