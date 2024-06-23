import React from 'react'
import "./card.css"

const card = ({image}) => {
  return (
    <div className='card' style={{background:`url(${image})`,backgroundSize:"cover"}}>
      
    </div>
  )
}

export default card
