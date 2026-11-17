import React from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiMoneyBill } from "react-icons/ci";
import { GrWorkshop } from "react-icons/gr";

const AdminHeader = () => {
  return (
    <div className="w-full h-[80px] bg-slate-900 shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      {/* Logo */}
      <div>
        <Link to="/">
          <img
            src="/images/nexaperfume.png"
            alt="Logo"
            className="w-[200px] h-[80px] object-cover"
          />
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center">
        <div className="flex items-center mr-4">

          <Link to="/admin-withdraw-request" className="hidden 800px:block">
            <CiMoneyBill
              size={30}
              className="mx-5 cursor-pointer text-gray-400 hover:text-white transition"
            />
          </Link>

          <Link to="/admin-events" className="hidden 800px:block">
            <MdOutlineLocalOffer
              size={30}
              className="mx-5 cursor-pointer text-gray-400 hover:text-white transition"
            />
          </Link>

          <Link to="/admin-sellers" className="hidden 800px:block">
            <GrWorkshop
              size={30}
              className="mx-5 cursor-pointer text-gray-400 hover:text-white transition"
            />
          </Link>

          {/* Static Admin Avatar */}
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Admin"
            className="w-[50px] h-[50px] rounded-full object-cover border border-gray-600"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;