import React , { useState , useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import { YOUTUBE_COMMENT_API } from '../utils/config'
import Comment from './Comment'

const CommentList = () => {

const [getComments , setGetComments] = useState([])

const [videoId] = useSearchParams()

useEffect(() => {
    fetchComments();
} , [])


const fetchComments = async () => {

    const data = await fetch(YOUTUBE_COMMENT_API + videoId.get("v"));
    const json = await data.json()
    setGetComments(json.items);
}

  return (
        <div className='whitespace-normal'>
            <h1 className='mx-14 my-5 font-semibold'> Comments :</h1>
            {getComments && getComments.map( (comment) => (
                <Comment  key = {comment.id} comment = {comment} />
            ))}
        </div>
  )
}

export default CommentList