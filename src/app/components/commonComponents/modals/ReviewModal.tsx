import { Rating } from "react-simple-star-rating";
import { Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { AddReviewTitle, LeaveCommentTitle, SubmitReview, WriteReview } from "../../../../constants";
import { AddReviewListData } from "../../../../data/Car";
import { useAppDispatch, useAppSelector } from "../../../../reduxToolkit/hooks";
import { setReviewModal } from "../../../../reduxToolkit/reducers/layoutSlice";
import UsePathName from "../../../../utils/UsePathName";
import CloseBtn from "../CloseBtn";
import RenderInput from "../RenderInput";

const ReviewModal = () => {
  const { reviewModal } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const Path = UsePathName();

  const toggle = () => dispatch(setReviewModal());
  return (
    <Modal fade size="lg" centered modalClassName="theme-modal review-modal" isOpen={reviewModal} toggle={toggle}>
      <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
      <ModalBody>
        <h4 className="detail-page-title">{Path.includes("car") ? AddReviewTitle : Path.includes("blog-left-classic") ? LeaveCommentTitle : WriteReview}</h4>
        <Row className="gy-lg-4 gy-2">
          {Path.includes("car") && (
            <>
              <Col lg="6">
                <ul className="add-review-list">
                  {AddReviewListData.slice(0, 3).map((item, index) => (
                    <li className="add-review-item" key={index}>
                      <span>{item}</span>
                      <Rating size={20} initialValue={1} />
                    </li>
                  ))}
                </ul>
              </Col>
              <Col lg="6">
                <ul className="add-review-list">
                  {AddReviewListData.slice(3).map((item, index) => (
                    <li className="add-review-item" key={index}>
                      <span>{item}</span>
                      <Rating size={20} initialValue={1} />
                    </li>
                  ))}
                </ul>
              </Col>
            </>
          )}
          <RenderInput placeholder="Enter Your Name" ColClass="col-sm-6" review />
          <RenderInput placeholder="Enter Your E-mail" ColClass="col-sm-6" review />
          <RenderInput placeholder="Message" ColClass="col-xs-12" inputType="textarea" review />
          <RenderInput button={SubmitReview} ColClass="col-xs-12" review />
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default ReviewModal;
