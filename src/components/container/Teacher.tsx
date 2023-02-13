import { teacher1, teacher2 } from 'src/assets'
import { accordions } from 'src/static'
import Accordion from 'src/components/container/Accordion'
import Button from 'src/components/Button'

const Teacher = () => {
  return (
    <div className='section' id='teacher'>
      <div className='grid sm:grid-cols-2 place-items-center gap-8'>
        <div className='pl-5'>
          <h2 className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5'>
            Become <span className='text-Teal'>An Instructor</span> <br /> of
            Our Platform
          </h2>
          <p className='text-sm leading-7 text-gray mb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          {/*<button className='py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold '>*/}
          {/*  Start Teaching*/}
          {/*</button>*/}
          <Button variant='solid' className='text-Teal'>Start Teaching</Button>
        </div>
        <div className='p-4 md:w-3/4 sm:row-start-1'>
          <img src={teacher1} alt='' />
        </div>
        <div className='pl-5'>
          <h2 className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5'>
            Become <span className='text-Teal'>An Instructor</span> <br /> of
            Our Platform
          </h2>
          <p className='text-sm leading-7 text-gray mb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          {/*<button className='py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold '>*/}
          {/*  Get Started*/}
          {/*</button>*/}
          <Button>Get Started</Button>
        </div>
        <div className='p-4 md:w-3/4'>
          <img src={teacher2} alt='' />
        </div>
      </div>
      <div className='text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]'>
        Frequently <span className='text-Teal'>Asked Questions</span>
      </div>
      <div className='mt-12 max-w-[700px] mx-auto'>
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />
        })}
      </div>
    </div>
  )
}
export default Teacher
