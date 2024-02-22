import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Lista ({lista}) {

  const dataTable=lista.map(e=>(
    <tr key={e.id}>
      <td>{e.name}</td>
      <td>{e.username}</td>
      <td>{e.email}</td>
      <td><FontAwesomeIcon style = {{cursor: "pointer"}} icon = {faTrash} color = 'red'/></td>
      <td><FontAwesomeIcon style = {{cursor: "pointer"}} icon = {faEdit} color='green'/> </td>
    </tr>
  ));
  
  return (
    <table className='table shadow'>
      <thead className='table-dark'>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Change</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {dataTable}
      </tbody>
    </table>
   
   )
}

export default Lista