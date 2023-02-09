import {navLinks} from 'src/static'
import {HiMenuAlt1, HiX} from "react-icons/all";
import React, {useState} from "react";
import NavLink from 'src/components/Navbar/NavLink';
import { INavLink} from "src/types";
import MobileNavLink from "src/components/Navbar/MobileNavLink";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (<div className="fixed w-full top-0 left-0 z-20 ">
        {/*{navLinks}*/}
        <div>
            <div className="container mx-auto  py-4 px-2 flex items-center justify-between">
                <div className="flex items-center  gap-4">
                    <HiMenuAlt1 className="text-3xl sm:hidden cursor-pointer" onClick={() => setToggle(!toggle)}/>
                    <h1 className="text-xl text-Teal uppercase tracking-wide font-bold">Skillex</h1>
                </div>
                <div className=" sm:flex items-center justify-items-center hidden gap-3">
                    {
                        navLinks.map((navLink: INavLink) => {
                            return <NavLink key={navLink.id} {...navLink}/>
                        })
                    }
                </div>
                <button className='border border-solid text-sm py-3 px-6 rounded-lg border-gray'>Sign Up</button>
                {toggle && (<div className="
                fixed h-full bg-Teal w-96 top-0 left-0 z-20 items-center shadow-lg gap-8 py-8
                text-white flex flex-col justify-center">{
                    navLinks.map((navLink: INavLink) => {
                        return <MobileNavLink key={navLink.id} navLink={navLink} setToggle={setToggle}/>
                    })
                }
                    <HiX className="absolute right-12 top-12 text-3xl cursor-pointer"
                         onClick={() => setToggle(prev => !prev)}/>
                </div>)}
            </div>
        </div>
    </div>)
}
export default Navbar