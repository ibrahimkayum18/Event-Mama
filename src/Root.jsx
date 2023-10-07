import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

const Root = () => {
  return (
    <div className="bg-gray-200">
      <div className="max-w-7xl mx-auto ">
        <NavBar></NavBar>
        <Outlet></Outlet>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
