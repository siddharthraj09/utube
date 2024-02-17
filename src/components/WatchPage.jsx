import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/redux/appSlice";
import { useParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
const WatchPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  //useSearchParams for query params and use .get  and ket name

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex  flex-col w-screen">
      <div className=" my-2 flex lg:flex-row flex-col  w-screen">
        <div className="lg:w-3/4 p-3 ">
          <iframe
            className=" w-full  aspect-video rounded-lg "
            src={
              "https://www.youtube.com/embed/" +
              params?.id +
              "?si=_la1A67mhAuPLbQP&amp"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="lg:w-1/4 py-3  p-3    ">
          <LiveChat />
        </div>
      </div>
      <div className="">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
