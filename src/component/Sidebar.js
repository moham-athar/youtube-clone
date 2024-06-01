import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {GrHomeRounded} from 'react-icons/gr'
import { BsFillPlayFill } from 'react-icons/bs'
import { MdSubscriptions } from 'react-icons/md'
import { MdOutlineVideoLibrary , MdOndemandVideo, MdOutlineMusicNote } from 'react-icons/md'
import { TbHistory } from 'react-icons/tb'
import { AiOutlineClockCircle, AiOutlineLike  } from 'react-icons/ai'
import { SiYoutubegaming } from 'react-icons/si'
import { BiMoviePlay } from 'react-icons/bi'
import { HiOutlineShoppingBag } from 'react-icons/hi'




const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if(!isMenuOpen) return null;
    

  return (
    <div className='min-w-fit pr-2 h-full'>
        <section className='pt-2 pl-4'>
            
            <ul className=''>
                <Link to ="/" >
                    <div className='flex'>
                    <GrHomeRounded className='mr-2 text-xl' />
                    <li className='pb-4'>Home</li>
                    </div>
                </Link>
               <div className='flex '>
                <BsFillPlayFill className='mr-2 text-2xl font-thin'/>
               <li className='pb-4' >Shorts </li>
               </div>
                <div className='flex '>
                    < MdSubscriptions className='mr-2 text-2xl' />
                <li className='pb-4'>Subscription</li>
                </div>
                
            </ul>
        </section>
        <section className='pt-2 pl-4 border-t-2 '>
            <h2 className= "font-bold"> Subscription</h2>
            <ul className='p-2'>
                <li className='pb-4 flex'>
                <MdOutlineVideoLibrary className='mr-2 text-2xl'/>
                    Library
                    </li>
                <li className='pb-4 flex'>
                <TbHistory className='mr-2 text-2xl'/>
                    History</li>
                <li className='pb-4 flex'>
                    <MdOndemandVideo className='mr-2 text-2xl'/>
                    Your Videos</li>
                <li className=' flex pb-4'>
                <AiOutlineClockCircle className='mr-2 text-2xl'/>
                    Watch Later</li>
                <li className='pb-4 flex'>
                 <AiOutlineLike className='mr-2 text-2xl'/> 
                    Liked Videos</li>
            </ul>
        </section>
        <section className='pt-2 pl-4  border-t-2' >
        <h2 className= "font-bold">Watch Later</h2>
            <ul className='p-2'>
                <li className='pb-4 flex'>
                    <MdOutlineMusicNote className='mr-2 text-2xl'/>
                    Music</li>
                <li className='pb-4 flex'>
                <HiOutlineShoppingBag className='mr-2 text-2xl' />
                    Store</li>
                <li className='pb-4 flex'>
                    <SiYoutubegaming className='mr-2 text-2xl' />
                    Gaming</li>
                <li className='pb-4 flex'>
                    <BiMoviePlay className='mr-2 text-2xl'/>
                    Movies</li>
            </ul>
        </section>
    </div>
  )
}

export default Sidebar