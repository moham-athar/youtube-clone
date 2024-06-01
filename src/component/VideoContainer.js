import React , {useEffect ,useState } from 'react'
import {YOUTUBE_API_URL} from '../utils/config'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

const [videos , setVideos] = useState([]);

const fetchVideo = async () => {
  const data = await fetch(YOUTUBE_API_URL);
  const json = await data.json();
  setVideos(json.items);
}

useEffect (() => {
  fetchVideo();
}, []);

  
  return (
    <div className='flex flex-wrap'>
     {videos.map((video) => (
      <Link key = {video.id}  to = {"/watch?v=" + video.id}>
      <VideoCard  info = {video}/>
      </Link>
     ))}
      </div>
  )
}

export default VideoContainer