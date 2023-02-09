import {IconType} from "react-icons";
import {Dispatch, SetStateAction} from "react";

export interface INavLink {
    id: number,
    href: string,
    link: string

}

export interface IMobileNavLink extends INavLink {
    setToggle: Dispatch<SetStateAction<boolean>>
}

export interface ICategory {
    id: number,
    icon: IconType,
    category: string

}