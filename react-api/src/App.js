import Axios from "axios";
import React , {useEffect} from "react";
import Characters from "./characters"
import "./App.css"
import Bg from "./Bg";

export default function App() {
  

const [List , setList]= React.useState([])
const[searchWord , setSearch] = React.useState("")


  useEffect(() => {
      
      
    Axios.get("https://www.breakingbadapi.com/api/characters").then((response) => {
      
      setList(response.data)
      
    })
  


  }, [])
  
  const filteredWords = List.filter((datas) => {
      
       return datas.name.toLowerCase().includes(searchWord.toLowerCase())

    })


 
  return (
  
    <div>
     
     
      <div className="header">
        
        <input
        
          type={"text"}
          placeholder={"search"}
          onChange={(event)=> setSearch(event.target.value)  }
        
        />     

     </div>
     
     
     
     
     
     
     
      {filteredWords.map((death) => {
         
        return <Characters name={death.name} occupation={death.occupation} image={death.img} nickname={death.nickname} status={death.status}/>
       })}
      
    </div>
        )
      


}






  
