import { BsChevronDown } from 'react-icons/all'
import { FC, useState } from 'react'
import { IAccordion } from 'src/types'
import { AnimatePresence, motion } from 'framer-motion'

const Accordion: FC<IAccordion> = ({ id, title }) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)
  return (
    <div className='pb-8'>
      <div className='flex items-center justify-between'>
        <div className='sm:text-xl text-base font-bold'>{title}</div>
        <BsChevronDown
          className={`${id == activeIndex ? 'rotate-180' : 'rotate-0'} cursor-pointer transition-all duration-300`}
          onClick={() => {
            setActiveIndex(id === activeIndex ? null : id)
          }}
        />
      </div>
      <AnimatePresence>
        {id === activeIndex && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
            className='pt-4'
          >
            <p className='text-sm leading-7 text-gray'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum
              beatae porro voluptatum aspernatur, id nesciunt reiciendis maxime
              unde necessitatibus illum accusamus mollitia incidunt qui nisi
              tempora facere magni magnam?
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Accordion