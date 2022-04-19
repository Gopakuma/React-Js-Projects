import React, {useEffect} from 'react'
import axios, { Axios } from 'axios'
import Coin from "./coin"
import "./App.css"
export default function App() {
 
 
    const [coindata, setCoindata] = React.useState([])
      const [searchWord, setsearch ] = React.useState("");

    useEffect(() => {
          
        axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((res) =>
        
            
           setCoindata(res.data.coins)


            
        )
          },[])


    
    
    
  const filteredCoins = coindata.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });
    
    
    
    
    
    

    
    
    return (

        
        
        
        
        
        <div>
            
          <div className='search--bar'>
            <input
            
            type={"text"}
                placeholder={"search"}
                
         onChange={(event)=> {setsearch(event.target.value)}  }
            
            
            />
            </div>
            
            
           
          
          
          
          
            {filteredCoins.map((coins) => {
             
                
                return <Coin name={coins.name} icon={coins.icon} price={coins.price} volume ={coins.volume} priceChange = {coins.priceChange1d} priceChangehour={coins.priceChange1h} symbol={coins.symbol} />
                
         })}

            
         



     </div>
       

    )
       


}