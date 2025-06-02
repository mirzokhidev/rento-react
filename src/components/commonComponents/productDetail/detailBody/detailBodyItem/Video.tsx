import { Play } from "iconsax-react";
import { FC, } from "react";
import { Href, VideoTitle } from "../../../../../constants";
import { useAppDispatch } from "../../../../../reduxToolkit/hooks";
import { DetailBodyItemType } from "../../../../../types/Product";
import { dynamicImage, Image } from "../../../../../utils";
import VideoModal from "../../../modals/VideoModal";
import { setVideoModal } from "../../../../../reduxToolkit/reducers/layoutSlice";

const Video: FC<DetailBodyItemType> = ({ label }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="detail-body ratio_60" id="video">
        {label && <h4 className="detail-page-title">{VideoTitle}</h4>}
        <div className="video-img">
          <Image src={dynamicImage("property/detail/4.jpg")} alt="v-1" className="img-fluid bg-img" />
          <a href={Href} className="play-btn" onClick={() => dispatch(setVideoModal())}>
            <Play className="iconsax" />
          </a>
        </div>
      </div>
      <VideoModal />
    </>
  );
};

export default Video;
