import React, { useState } from 'react'

const ModalForm = ({showModal,setShowModal,modal}) => {

    const emptyUser = {
        username:'',
        email:'',
        password:''
    }

    const [user,setUser] = useState(emptyUser)


    const handleChange = (e)=>{
        const {target:{value,name}}=e

        console.log(value);
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        window.alert('aqui enviarias los datos')
    }


  return (
    <div className= {showModal ? "modal d-block" : "modal"}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header bg-dark text-light ">
                    <h4 className='modal-title mx-auto'>{modal.title}</h4>
                </div>
                <div className="modal-body">
                    <form className="d-flex flex-column">
                        <div className="form-group">
                            <label className="form-label" htmlFor='username'>Username</label>
                            <input  id="username" onChange={handleChange} type="text" className="form-control" name="username" value={user.username}/>                            
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor='email'> E-mail </label>
                            <input  id="email" onChange={handleChange} type="text" className="form-control" name="email" value={user.email} />                            
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor='password'>Password</label>
                            <input  id="password" onChange={handleChange} type="password" className="form-control" name="password" value={user.password} />                            
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button  onClick={handleSubmit} className='btn btn-success'>Save</button>
                    <button onClick={()=>setShowModal(false)} className='btn btn-danger'>Cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalForm