import { IconType } from "react-icons";


export interface INavLink {
  id: number;
  href: string;
  link: string;
}

export interface ICategory {
  id: number;
  icon: IconType;
  category: string;
}
