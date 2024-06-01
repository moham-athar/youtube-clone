import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const Search = () => {

const [search_query] = useSearchParams;

const [result , setResult] = useState([]);

useEffect(() => {
  fetch(SEARCH_API + search_query.get("search_query")).then(
    (response) => {
      response.json().then((data) => {
        //   console.log(data.items[0]);
        setResult(data.items);
      });
    }
  );
}, [search_query]);




  return (
    <></>
  )
}

export default Search