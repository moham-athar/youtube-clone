import React from 'react'
import { CgProfile } from  'react-icons/cg'
const ChatMessage = ({ name , quote }) => {
  return (
        <div className='flex gap-2 m-2 p-2  rounded-lg h-fit mr-2'>
          <img className='h-6 w-6' src = "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" />
            <h2 className='font-medium text-xs'>{name}</h2>
            <p className='font-light text-xs'>{quote}</p>
        </div>
  )
}

export default ChatMessage;