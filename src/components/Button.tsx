import { ButtonProps } from 'src/types'
import { FC, forwardRef } from 'react'
import clsx from 'clsx'



// eslint-disable-next-line react/display-name
const Button = forwardRef<HTMLButtonElement, ButtonProps>((
    { variant='solid',  ...props },
    ref) => {
  return (
        <button className={clsx(

      'py-3 px-4 rounded-lg font-bold box-content',
      variant === 'outline' && 'border border-solid border-gray text-sm',
      variant === 'solid' && 'border border-solid border-transparent bg-Teal text-white text-sm',
      props.className,

    )} ref={ref}>{props.children}</button>
  )
})
export default Button