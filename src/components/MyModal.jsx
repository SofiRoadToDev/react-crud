import React from 'react'

const MyModal = ({modal,showModal,setShowModal}) => {

  return (
    <div className={showModal ? 'modal d-block': 'modal' } >
      <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
              <h3 className='modal-title'>{modal.title}</h3>
            </div>
            <div className="modal-body">
              {modal.body}
            </div>
            <div className="modal-footer  d-flex ">
              <button className=' btn btn-success'> Yes</button>
              <button  onClick={()=>setShowModal(false)}className='btn btn-danger'> No</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MyModal