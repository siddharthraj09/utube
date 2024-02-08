import { useSelector } from "react-redux";

const Sidebar = () => {
  const toggleMenu = useSelector((store) => {
    return store.app?.isMenuOpen;
  });

  if (!toggleMenu) return null;
  return (
    <div className="pt-3 px-6 shadow-lg h-screen w-2/6 sm:w-48 ">
      <div className="py-5">
        <ul>
          <li>Home </li>
          <li>Shorts </li>
          <li>Video </li>
          <li>Live</li>
        </ul>
      </div>
      <div className="py-5">
        <h1 className="font-bold">Subscription</h1>
        <ul>
          <li>Movies </li>
          <li>Sports </li>
          <li>Gaming </li>
          <li>Music</li>
        </ul>
      </div>
      <div className="py-5">
        <h1 className="font-bold">Subscription</h1>
        <ul>
          <li>Movies </li>
          <li>Sports </li>
          <li>Gaming </li>
          <li>Music</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
