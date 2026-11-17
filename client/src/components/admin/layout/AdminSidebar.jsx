import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
import { GrWorkshop } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CiMoneyBill } from "react-icons/ci";
import { AiOutlineSetting } from "react-icons/ai";

const AdminSideBar = () => {
  const menu = [
    { id: 1, name: "Dashboard", icon: RxDashboard, link: "/admin/dashboard" },
    { id: 2, name: "All Orders", icon: FiShoppingBag, link: "/admin-orders" },
    { id: 3, name: "All Sellers", icon: GrWorkshop, link: "/admin-sellers" },
    { id: 4, name: "All Users", icon: HiOutlineUserGroup, link: "/admin-users" },
    { id: 5, name: "All Products", icon: BsHandbag, link: "/admin-products" },
    { id: 6, name: "All Events", icon: MdOutlineLocalOffer, link: "/admin-events" },
    { id: 7, name: "Withdraw Request", icon: CiMoneyBill, link: "/admin-withdraw-request" },
    { id: 8, name: "Settings", icon: AiOutlineSetting, link: "/profile" },
  ];

  return (
    <div className="w-[260px] h-screen bg-[#1f2a38] text-gray-300 shadow-lg flex flex-col">

      {/* Title */}
      <div className="px-6 py-5 border-b border-gray-700">
        <h2 className="text-lg font-semibold tracking-wide text-white">
          NAVIGATION
        </h2>
      </div>

      {/* Menu */}
      <div className="flex flex-col mt-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              to={item.link}
              className={`flex items-center gap-4 px-6 py-4 text-[15px] transition-all duration-200
                hover:bg-[#2d3a4b] hover:text-white
                ${
                  item.id === 1
                    ? "bg-[#2d3a4b] text-white border-l-4 border-blue-500"
                    : ""
                }`}
            >
              <Icon size={22} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSideBar;