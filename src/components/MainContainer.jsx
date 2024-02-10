import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const toggleMenu = useSelector((store) => {
    return store.app?.isMenuOpen;
  });
  return (
    <div className={`mx-2 ${toggleMenu ? "w-5/6" : "w-screen "}`}>
      {/* // <div className={` w-4/6 flex flex-col mx-auto`}> */}
      <ButtonList />

      <VideoContainer />
    </div>
  );
};

export default MainContainer;
