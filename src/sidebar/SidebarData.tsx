import { SidebarItem } from "../pages/shared/models/SidebarItem";
import { GoGlobe } from "react-icons/go";
import { RiHome6Fill } from "react-icons/ri";

export const SidebarData: SidebarItem[] = [
  {
    title: "Germany",
    path: "/germany",
    icon: <GoGlobe />,
  },
  {
    title: "States",
    path: "/state",
    icon: <RiHome6Fill />,
  },
];
