import { hero } from 'src/assets'
import { logos } from 'src/static'
import { motion } from 'framer-motion'

const container = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}
const Home = () => {
  return (
    <section className='section' id='home'>
      <div className='md:flex items-center justify-center'>
        <div>
          <h1 className='font-bold text-xs text-Teal mb-4'>
            {' '}
            Your e-learning partner
          </h1>
          <div className='sm:text-[2.5rem] text-[1.825rem] font-bold text-Teal'>
            This is <br /> the new way <br /> to learn online.
          </div>
          <p className='text-sm leading-7 text-gray max-w-sm'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam
            deleniti harum optio quae qui.
          </p>
          <div className='mt-6'>
            <button className='px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm'>
              Get Started
            </button>
            <button className='px-6 py-3 font-bold border border-gray border-solid rounded-lg text-sm'>
              Discover
            </button>
          </div>
        </div>
        <div className='md:w-[50%]'>
          <img src={hero} alt='' />
        </div>
      </div>
      <div>
        <p className='text-center text-xl'>We collaborate with{' '}
          <span className='text-Teal hover:text-opacity-60'>100+ top universities and companies</span>
        </p>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='visible'
          className='flex items-center justify-center flex-wrap gap-8 p-2'>
          {logos.map((logo, index) => (
            <motion.div variants={item} key={index} className='w-28'>
              <img src={logo} alt='' className='w-full object-contain' />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
export default Home
