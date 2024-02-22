import React from 'react'

const MyAlert = ({msg,type}) => {
  return (
    <div className={'alert '+ type}>
        <strong>{msg}</strong>
    </div>
  )
}

export default MyAlert