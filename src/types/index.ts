import { IconType } from 'react-icons'
import { ComponentPropsWithoutRef, ReactElement } from 'react'
import { accordions, courses } from 'src/static'


export interface INavLink {
  id: number;
  href: string;
  link: string;
}

export interface ICategory {
  id: number;
  icon: ReactElement;
  category: string;
}

export type ICourse = typeof courses[0]
export type IAccordion = typeof accordions[0]

export type ButtonProps = {
  variant?: 'solid' | 'outline'
  children: string,
  className?: string
} & ComponentPropsWithoutRef<'button'>
