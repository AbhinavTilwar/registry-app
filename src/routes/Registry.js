import React,{useState} from "react"
import {Link} from "react-router-dom"

function Registry(){
    const [registryData,setRegistryData] = useState([])
    const [textInput,setTextInput]=useState("")
    const addItem =(e)=>{
        e.preventDefault();

        const tempData=[...registryData];
        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")
    }
    return(
     <div>
        <h1>Registry</h1>
        <Link to="/">Click here to go to home</Link>
        <form onSubmit={addItem}>
            <label>text input:
        <input type="text" value={textInput} onChange={(e)=> setTextInput(e.target.value)}/>
        </label>
        <input type="submit" value="Submit"/>
        </form>
        
     </div>
    )
}
export default Registry;