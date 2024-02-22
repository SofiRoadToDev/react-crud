import { useEffect, useState } from 'react'
import './App.css'
import Lista from './components/Lista'
import useFetch from './hooks/useFetch'
import ModalForm from './components/ModalForm'
import logo from './assets/escudo.png'
function App() {



  const [filteredList, setFilteredList] = useState([])
  const [showModal,setShowModal]=useState(false)
  const [searchItem, setSearchItem] = useState('')

  const URL = 'https://jsonplaceholder.typicode.com/users'
  const [data, error, isLoading] = useFetch(URL)

  if (isLoading) {
    return <div className="spinner-border"></div>
  }

  if (error) {
    return <MyAlert msg = {error.message} type = {'danger'}/>   
  }

  const handleShowModal=()=>{setShowModal(true)}

  const handleChange = (e) => {
    setSearchItem(e.target.value.toLowerCase())
    const newList = data.filter(el => el.username.toLowerCase().includes(searchItem))
    setFilteredList(newList)
  }

  const modalExample={
    title:'My Modal',
    body:'Modal body'
  }

  return (

    <>
      <header className = 'bg-dark container-fluid text-white text-center py-3'>
        <div className="navrbar-brand">
          <img  style={{ width:"110px",height:"130px"}} src={logo} alt="escudo" />
          <h4>EET 3107</h4>
          <p>Juana Azurduy de Padilla</p>
        </div>
        <div className = 'w-100 d-flex justify-content-end'>
          <input className = "form-control-sm" id="search" type="search" placeholder='filter by username' onChange={handleChange} />
        </div>
      </header>
      <main className="container mt-3">
        <button onClick = {handleShowModal} className='btn-black'>Add</button>
        <Lista lista = {searchItem == '' ? data : filteredList} />
      </main>
      <ModalForm modal={modalExample} showModal={showModal} setShowModal={setShowModal}/>
    </>
  )
}

export default App
