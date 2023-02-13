import { categories, courses } from 'src/static'
import Category from './Category'
import Course from 'src/components/container/Courses/Course'


const Courses = () => {
  return (
    <section className='section' id='courses'>
      <div className='text-center'>
        <h1 className='sm:text-3xl text-2xl font-bold mb-5'>Our Top
          {' '}<span className='text-Teal'>Categories</span>
        </h1>
        <p className='text-sm text-gray leading-7 max-w-[700px] mx-auto'>Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Animi esse quidem totam! Architecto assumenda
          cupiditate dignissimos distinctio dolores ea eos eum, exercitationem explicabo maxime natus, quae repellendus,
          sed suscipit tempora.
        </p>
      </div>
      <div className='grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8'>
        {categories.map((category) => (<Category key={category.id} {...category}></Category>))}

      </div>
      <div className='text-xl font-bold mt-32'>Most Popular Courses</div>
      <div className='mt-12 overflow-x-hidden w-full  relative'>
        <div className='flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide'>
          {courses.map((course) => {
            return <Course key={course.id} {...course} />
          })}
        </div>
      </div>
    </section>
  )
}
export default Courses
