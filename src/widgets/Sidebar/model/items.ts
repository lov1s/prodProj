import type React from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/home.svg";
import ProfileIcon from "shared/assets/icons/userCircle.svg";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: "Home",
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: "About",
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: "Profile",
        authOnly: true,
    },
];
