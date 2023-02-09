import {FC} from "react";
import {INavLink} from "src/types";


const NavLink: FC<INavLink> = ({href, link}) => {
    return (<li className="list-none cursor-pointer">{link}</li>)
}
export default NavLink