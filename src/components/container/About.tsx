import { About as AboutIcon } from 'src/assets'

const About = () => {
  return (
    <div className='section' id='about'>
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={AboutIcon} alt='about us' className='p-4' />
        </div>
        <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5'>
          We provide the <br /> best {' '}
          <span className='text-Teal'>online courses.</span>
        </div>
        <p className='text-sm text-gray leading-7 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          At autem consequatur culpa dolorum enim eveniet expedita fuga,
          laudantium nemo nobis, officia omnis quam qui repellat, reprehenderit
          saepe sapiente ut voluptate.
        </p>
        <button className='py-3 px-6 border border-solid border-gray rounded-lg font-bold'>Know More</button>
      </div>
    </div>
  )
}
export default About
