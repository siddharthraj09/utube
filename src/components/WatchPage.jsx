import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/redux/appSlice";
import { useParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
const WatchPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  //useSearchParams for query params and use .get  and ket name

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex sm:flex-row flex-col w-screen">
      <div className=" m-2 sm:w-3/4 w-screen">
        <iframe
          className="video w-full aspect-video rounded-lg "
          src={
            "https://www.youtube.com/embed/" +
            params?.id +
            "?si=_la1A67mhAuPLbQP&amp"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <CommentsContainer />
      </div>
      <div className="sm:w-1/4"></div>
    </div>
  );
};

export default WatchPage;
