import React from 'react'

const Button = ({item}) => {
  return (
       <button  className='bg-gray-200 w-auto pr-3 pl-3 pb-1 rounded-md'>{item}</button>
  )
}

export default Button;