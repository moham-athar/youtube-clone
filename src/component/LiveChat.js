import React from 'react'
import { useState , useEffect } from 'react'
import {LIVE_CHAT_API} from '../utils/config'
import { useDispatch, useSelector} from 'react-redux'
import ChatMessage from './ChatMessage'
import { addMessage } from '../utils/chatSlice'

const LiveChat = () => {

  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector(store => store.chat.messages);

  const fetchChat = async () => {
        const data = await fetch(LIVE_CHAT_API)
        const json = await data.json();
        dispatch(addMessage(json[0]))
        console.log(json[0])
    }

    useEffect(() => {
      const interval = setInterval(() => {
          fetchChat();
      }, 2000 )
      return () => clearInterval(interval)
  }, [])

  return (
    <>
    <div className='w-full h-[500px] border border-black my-5 mx-2 rounded-lg bg-slate-100 '>
      <div className='p-3 border border-b-black text-base'>Live Chat</div>
      <div className='flex flex-col-reverse  overflow-y-scroll h-[401px]'>
      {chatMessages?.map((chat, id) => (
            <ChatMessage key={id} name = {chat.character.name} quote={chat.sentence} />
          ))}
      </div>
      <form
      onSubmit={(e) => {
        e.preventDefault();
      dispatch(addMessage({name: "Athar", quote : liveMessage}));
        setLiveMessage("");
      }}

      className='border border-t-black h-12 rounded-b-lg flex'>
        <input
        className=' w-full rounded-b-lg p-2'
        type = "text"
        value={liveMessage}
        onChange={(e) => {setLiveMessage(e.target.value)}}
        />
        <button className='p-3 bg-red-200'>Reply</button>
      </form>
    </div>
    </>
  );
};

export default LiveChat