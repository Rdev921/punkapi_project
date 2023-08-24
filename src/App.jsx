import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import DataCard from './components/DataCard';
const App = () => {
  const [apidata, setApiData] = useState([]);
  const [search, setSearch] = useState("")

  // fetch dat form api
  const getApiData = async () => {
    try {
      const response = await fetch('https://api.punkapi.com/v2/beers');
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getApiData();
  }, [])
  return (
    <>
      <h1>Product page</h1>
      <input type="text" 
      style={{border:'1px solid lightgrey',padding:'10px',borderRadius:'10px',marginBottom:'12px'}}
        placeholder='Enter product name'
        onChange={(e) => setSearch(e.target.value)} />

      {apidata.filter((value)=>{
        if(search == " "){
          return value;
        }else if(value.name.toLowerCase().includes(search.toLowerCase())){
          return value;
        }
      }).
      map((item) => (
        <DataCard {...item} key={item.id} />
      ))}

    </>
  )
}

export default App