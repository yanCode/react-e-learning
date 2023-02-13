import { navLinks } from 'src/static'
import { HiMenuAlt1, HiX } from 'react-icons/all'
import { useEffect, useState } from 'react'
import NavLink from 'src/components/Navbar/NavLink'
import { INavLink } from 'src/types'
import MobileNavLink from 'src/components/Navbar/MobileNavLink'
import { motion } from 'framer-motion'
import Button from 'src/components/Button'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20)
    }
    window.addEventListener('scroll', scrollActive)
    return () => window.removeEventListener('scroll', scrollActive)
  }, [])

  return (
    <div
      className={`${
        active ? 'shadow-lg bg-Solitude' : ''
      } fixed w-full top-0 left-0 z-20`}
    >
      {/*{navLinks}*/}
      <div>
        <div className= {`py-2 transition-all duration-700
         container mx-auto  px-2 flex items-center justify-between`}>
          <div className='flex items-center  gap-4'>
            <HiMenuAlt1
              className='text-3xl sm:hidden cursor-pointer'
              onClick={() => setToggle(!toggle)}
            />
            <h1 className='text-xl text-Teal uppercase tracking-wide font-bold'>
              Skillex
            </h1>
          </div>
          <div className=' sm:flex items-center  hidden gap-4'>
            {navLinks.map((navLink: INavLink) => {
              return <NavLink key={navLink.id} {...navLink} />
            })}
          </div>

          <Button variant={'outline'} className="px-6" >Sign UP</Button>
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='
                fixed h-full bg-Teal w-96 top-0 left-0 z-20 items-center shadow-lg gap-8 py-8
                text-white flex flex-col justify-start'
            >
              {navLinks.map((navLink: INavLink) => {
                return (
                  <MobileNavLink
                    key={navLink.id}
                    navLink={navLink}
                    setToggle={setToggle}
                  />
                )
              })}
              <div className="group absolute right-12 rounded-lg w-8 h-8 top-12 shadow-lg border border-solid border-white
              p-1 hover:border-gray">
                <HiX
                className=' text-3xl cursor-pointer w-[100%] h-[100%] group-hover:text-gray'
                onClick={() => setToggle((prev) => !prev)}
              />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Navbar
