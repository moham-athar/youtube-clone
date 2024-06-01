import React from 'react'

const Comment = ({comment}) => {
  return (
    <div className='mx-10 my-7 rounded-lg flex px-3 py-2 w-[62.5rem]'>
        <img className='rounded-full mx-3' src = {comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt = "" />
        <div>
        <h3 className="font-bold">{comment.snippet.topLevelComment.snippet.authorDisplayName}</h3>
        <p className=" font-light text-sm">{comment.snippet.topLevelComment.snippet.textOriginal}</p>
        </div>
    </div>
  )
}

export default Comment;