const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2  md:max-w-[21rem]  w-screen shadow-lg  h-auto min-h-[23rem] ">
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="rounded-lg w-full"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li> {statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
