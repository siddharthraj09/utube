import Head from "./Head";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="">
      <Head />
      <div className=" flex  ">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
