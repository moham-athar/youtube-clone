import React, {useState, useEffect} from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { CiSearch }  from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'
import { useDispatch ,useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import logo from '../asset/logo.png';
import { YOUTUBE_SEARCH_API } from '../utils/config'
import { cacheResults } from '../utils/searchSlice'




const Header = () => {

const [searchQuery, setSearchQuery] = useState('');
const [suggetion, setSuggestion] = useState([]);
const [showSearch, setShowSearch] = useState(false);

const searchCache = useSelector(store => store.search)

const dispatch = useDispatch()

console.log(process.env);


useEffect(() => {
    
 const timer = setTimeout(()=> {
    if(searchCache[searchQuery]){
        setSuggestion(searchCache[searchQuery]);
    }else {
        getSearchQuery();
    }
 }, 200);

  return () => {
    clearTimeout(timer);
  }
    
}, [searchQuery])


const getSearchQuery = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    dispatch(cacheResults({
        [searchQuery] : json[1],
    }))
} 

const toggleMenuHandler = () => {
    dispatch(toggleMenu())
}

  return (
    <>
    <nav className='flex justify-between px-5 py-3'>
        <div className='flex '>
            <RxHamburgerMenu 
            onClick={() => toggleMenuHandler()}
            className='h-8 mr-6 text-2xl'/>
            <img 
            className='h-8 bg-white'
            alt = "youtube logo" src = {logo} />
        </div>
        <div className='flex'>
            <input 
            className='border border-gray-500 rounded-l-full w-96 p-2'
            type = "text"
            placeholder='Search'
            value={searchQuery}
            onChange = {(e)=> setSearchQuery(e.target.value)}
            onFocus = {() => setShowSearch(true)}
            onBlur = {() => setShowSearch(false)}
            />
            <div className='border border-gray-500  rounded-r-full p-1 w-16 flex justify-center'>
                <CiSearch className='h-8 text-2xl'/>
            </div>
            { showSearch &&  <div className='absolute mt-11 bg-white w-96 p-3 rounded-lg' >
                <ul className=''> 
                {suggetion.map((suggest) => {
                    return  <li className='flex'>
                    <CiSearch className='h-8 text-xl mr-2 mb-2'/>
                        {suggest}</li>
                } )}
                </ul>
            </div>}
        </div>
        <div className='flex justify-end  p-1'>
            <CgProfile className='text-2xl'/>
        </div>
    </nav>
    </>
  )
}

export default Header