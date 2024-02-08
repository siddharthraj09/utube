import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const toggleMenu = useSelector((store) => {
    return store.app?.isMenuOpen;
  });
  return (
    <div className={`mx-4 ${toggleMenu ? "w-4/6" : "w-screen "}`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
