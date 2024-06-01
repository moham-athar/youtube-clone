import React from 'react'
import Button from './Button';

const ButtonList = () => {

  const btn = ["All", "Mixes", "Music", "Wick", "Computer", "Recently Uploaded", "React"];

  return (
    <div className='flex px-9 gap-4'>
    {
      btn.map((item, index) => <Button key = {index} item = {item} />)
    }
    </div>
  )
}

export default ButtonList