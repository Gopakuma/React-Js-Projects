import React from 'react'

function Characters (props) { 
  return (
      <div className='main'>
        
          <img className='image' src= {props.image}></img>
          
      <section className='info'>

        <h1 className='name'>{props.name}</h1>
        <p>
         Nick Name: {props.nickname} <br></br>
      
          Status : {props.status}<br></br>
          
          Occupation : {props.occupation}

         </p>

         </section>

      </div>


    
  )
}

export default Characters