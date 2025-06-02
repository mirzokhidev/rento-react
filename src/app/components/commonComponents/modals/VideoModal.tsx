import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../../reduxToolkit/hooks";
import { setVideoModal } from "../../../../reduxToolkit/reducers/layoutSlice";
import CloseBtn from "../CloseBtn";

const VideoModal = () => {
  const { videoModal } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const toggle = () => dispatch(setVideoModal());

  return (
    <Modal isOpen={videoModal} fade toggle={toggle} size="lg" centered modalClassName="theme-modal">
      <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
      <ModalBody>
        <iframe src="https://www.youtube.com/embed/y9j-BL5ocW8" allowFullScreen title="youtube" />
      </ModalBody>
    </Modal>
  );
};

export default VideoModal;
