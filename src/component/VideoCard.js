import React from 'react'

const VideoCard = ({ info }) => {
 const { snippet } = info;
 const { thumbnails, title , channelTitle} = snippet;

 return (
    <div className='w-80 p-5 m-2'>
        <img
        className='rounded-lg' 
        src = {thumbnails.medium.url} alt = "thumbnail" />
        <div>
            <h2 className='font-semibold pb-2'>{title}</h2>
            <p >{channelTitle}</p>
        </div>
    </div>
  )
}

export default VideoCard