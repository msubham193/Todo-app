import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDashboard, MdFolder } from "react-icons/md";
const Navbar = () => {
  const [show, setShow] = useState(true);

  return (
    <header className="justify-between flex px-8 w-full h-16 shadow-xl bg-black text-gray-400">
      <div className="flex flex-row space-x-5">
        {/* <div
          className="text-white flex items-center justify-center "
          onClick={setShow(!show)}
        >
          <GiHamburgerMenu className="w-4 h-4" />
        </div> */}
        <div className="flex items-center justify-center space-x-2">
          <div>
            <MdOutlineDashboard className="w-4 h-4" />
          </div>
          <div>Dashboard</div>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div>
            <MdFolder />
          </div>
          <div>Collection</div>
        </div>
      </div>
      <div className=" flex items-center justify-center ">
        <div className="w-6 bg-white  h-6 rounded-full"></div>
      </div>
    </header>
  );
};

export default Navbar;
