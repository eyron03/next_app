import React from 'react'
import {cn} from '@/lib/utils'

interface MaxWidthProps{
    className:string
    Children: React.ReactNode
}
const MaxWidthWrapper = ({className,Children}:MaxWidthProps) => {
  return (
    <div className={cn('mx-auto max-w-screen-xl w-full my-12', className)}>
    {Children}
    </div>
  )
}

export default MaxWidthWrapper