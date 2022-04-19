import React from 'react'

function Coin(props) {
  return (
  
    <div>
    
     
      



    <div className='main'>      
      <img className='icons' src={props.icon}></img> 
      <div className='info'>
          <h1>{props.name}</h1> 
      <h2>{props.price}</h2>
      <h2>{props.volume}</h2>
      <h2>Price Change / hour : {props.priceChangehour}</h2>
          <h2>Price Change / day : {props.priceChange}</h2>
          <h2>Symbol : {props.symbol}</h2>
          </div>
</div>
    
    
    
    </div>    
  )
}

export default Coin