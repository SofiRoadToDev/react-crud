import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [error,setError]=useState(null)
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        setIsLoading(true)
      fetch(url)
            .then(res=>res.json())
            .then(jsonResp=>{
                setIsLoading(false);
                setData(jsonResp);
               
            })
            .catch(err=>setError(err))
            
    },[]);


  return [data,error,isLoading]
}

export default useFetch