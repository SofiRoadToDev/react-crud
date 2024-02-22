import React from 'react'

const Searchbox = ({filterItems}) => {

     
  return (
    <div className='d-flex justify-end'>
        <label className='mr-2' htmlFor="search">Search username</label>
        <input id="search" type="search" placeholder='buscar...' onChange={(e)=>filterItems(e.target.value)}/>
    </div>
  )
}

export default Searchbox