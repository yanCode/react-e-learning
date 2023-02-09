import {FC} from "react";
import {IMobileNavLink} from "src/types";
import {Link} from "react-scroll";


const MobileNavLink: FC<IMobileNavLink> = ({href, link, setToggle}) => {
    return (
        <li className="list-none cursor-pointer">
            <Link
                to={href}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                className="font-bold transition-all duration-300" onClick={()=>setToggle(prev=>!prev)}>{link}</Link>
        </li>)
}
export default MobileNavLink