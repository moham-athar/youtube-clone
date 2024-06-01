import React, {useEffect} from 'react'
import { closeMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import LiveChat from './LiveChat';
import CommentList from './CommentList';

const WatchPage = () => {
    
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(closeMenu());
    }, [])

  return (
    <>
    <div className = "flex flex-col" >
    <div className='px-10 pt-5'>
        <iframe width="1000" height="500" src={"https://www.youtube.com/embed/" + searchParams.get("v")}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <CommentList />
    </div>
   <LiveChat />
    </>
  )
}

export default WatchPage