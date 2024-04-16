import React from 'react'

const DashboardTemp = ({imag,head,text,altimg}) => {
  return (
    <div style={{width:"450px",backgroundColor:"white",borderRadius:"20px"}}>
      <img src={imag} alt={altimg} style={{height:"150px"}}></img>
      <h4>{head}</h4>
      <p>{text}</p>
    </div>
  )
}

export default DashboardTemp
