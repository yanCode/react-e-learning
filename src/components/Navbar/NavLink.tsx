import {FC} from "react";
import {INavLink} from "src/types";
import {Link} from "react-scroll";


const NavLink: FC<INavLink> = ({href, link}) => {
    return (<li className="list-none cursor-pointer">
        <Link
            to={href}
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            className="font-bold transition-all duration-300">{link}</Link>
    </li>)
}
export default NavLink