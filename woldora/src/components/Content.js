import React from 'react';


export default function Content(props) {
  return (
      <div style={{fontSize:"35px", color:"blue"}}>
                  <div>{props.name}</div>
                  <div>{props.price}</div>
                  </div>
        
      
  )
}
