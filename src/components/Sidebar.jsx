import React from "react";
import { BsFillBookFill, BsFillPenFill, BsPersonFill } from "react-icons/bs";
import Link from "next/link";

const menuItems = [
  {
    name: "School",
    icon: BsFillBookFill,
    IconBgColor: "bg-pink-500",
    url: "/collections/school",
  },
  {
    name: "Personal",
    icon: BsPersonFill,
    IconBgColor: "bg-teal-500",
    url: "/collections/personal",
  },
  {
    name: "Work",
    icon: BsFillPenFill,
    IconBgColor: "bg-indigo-500",
    url: "/collections/work",
  },
];

const Sidebar = () => {
  return (
    <div className="hidden md:block md:w-1/4 lg:w-1/6 bg-[#21212B] text-white h-screen">
      <h2 className="px-4 pt-6 text-gray-400">Collections</h2>
      <div className="flex flex-col w-full my-4 space-y-4">
        {menuItems.map((item) => (
          <Link href={item.url} key={item.name}>
            <a className="flex items-center py-4 pl-8 space-x-4 cursor-pointer hover:bg-black/20">
              <div className={`rounded-xl ${item.IconBgColor} p-2 z-10`}>
                <item.icon className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-medium">{item.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
