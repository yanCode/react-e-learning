import {navLinks} from 'src/static'
import {HiMenuAlt1} from "react-icons/all";
import React from "react";
import NavLink from 'src/components/Navbar/NavLink';
import {INavLink} from "src/types";

const Navbar = () => {
    return (<div className="fixed w-full top-0 left-0 z-20 ">
        {/*{navLinks}*/}
        <div>
            <div className="container mx-auto  py-4 px-2 flex items-center justify-between">
                <div className="flex items-center  gap-4 bg-amber-500">
                    <HiMenuAlt1 className="text-3xl sm:hidden cursor-pointer"/>
                    <h1 className="text-xl text-Teal uppercase tracking-wide font-bold">Skillex</h1>
                </div>
                <div>
                    {navLinks.map((navLink: INavLink) => {
                        return <NavLink key={navLink.id} {...navLink}/>
                    })}
                </div>
            </div>
        </div>
    </div>)
}
export default Navbar