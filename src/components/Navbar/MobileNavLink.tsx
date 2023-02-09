import {Dispatch, FC, SetStateAction} from "react";

import {Link} from "react-scroll";
import {NavLink} from "src/static";


const MobileNavLink: FC<{ navLink: NavLink, setToggle: Dispatch<SetStateAction<boolean>> }>
    = ({navLink: {href, link}, setToggle}) => {
    return (
        <li className="list-none cursor-pointer">
            <Link
                to={href}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                className="font-bold transition-all duration-300" onClick={() => setToggle(prev => !prev)}>{link}</Link>
        </li>)
}
export default MobileNavLink