import Image from "next/image";

import {
    IoBrowsersOutline,
    IoCalculator,
    IoFootball,
    IoHeartOutline,
    IoLogoReact,
} from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItem = [
    {
        path: "/dashboard/main",
        icon: <IoBrowsersOutline size={23} />,
        title: "Dashboard",
        subTitle: "Visualization",
    },
    {
        path: "/dashboard/counter",
        icon: <IoCalculator size={23} />,
        title: "Counter",
        subTitle: "Contador Client Side",
    },
    {
        path: "/dashboard/pokemons",
        icon: <IoFootball size={23} />,
        title: "Pokemons",
        subTitle: "Generacion estatica",
    },
    {
        path: "/dashboard/favorites",
        icon: <IoHeartOutline size={23} />,
        title: "Favoritos",
        subTitle: "Global State",
    },
];

export const Sidebar = () => {
    return (
        <div
            id="menu"
            style={{
                width: "400px",
            }}
            className="bg-gray-950 min-h-screen z-10 text-slate-300 w-80 left-0  "
        >
            <div id="logo" className="my-4 px-6">
                <h1 className=" flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className="mr-2" />
                    <span>Dev</span>
                    <span className="text-blue-500">th</span>.
                </h1>
                <p className="text-slate-500 text-sm mt-2">
                    Manage your actions and activities
                </p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500 text-base text-left mb-4">
                    Pokemon Store
                </p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            className="rounded-full object-cover object-center ring-2 ring-white w-10 h-10"
                            src="https://images.unsplash.com/photo-1647226744477-6892ca60a176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                            alt="User avatar"
                            width={50}
                            height={50}
                            priority
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Epsaind dev
                    </span>
                </a>
            </div>

            <div id="nav" className="w-full px-6">
                {menuItem.map((item, index) => (
                    <SidebarMenuItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
};
