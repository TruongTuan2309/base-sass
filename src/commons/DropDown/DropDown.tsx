import { ArrowDownIcon, ArrowUpIcon } from '@/assets'
import { useState } from 'react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

interface DropDownProps {
  item: { title: string; description: string }
}

const DropDown = ({ item }: DropDownProps) => {
  const [isDropDown, setIsDropDown] = useState(false)
  const slideDownProps = {
    closed: !isDropDown,
    className: 'description',
    transitionOnAppear: true
  }
  return (
    <div className='dropdown'>
      <div className='title'>
        <p onClick={() => setIsDropDown(!isDropDown)}>{item.title}</p>
        {isDropDown ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </div>
      <SlideDown {...slideDownProps}>{item.description}</SlideDown>
    </div>
  )
}

export default DropDown
