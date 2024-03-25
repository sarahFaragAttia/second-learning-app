import InputItem from "./Input"
import { ListContext } from "./ListContext"
import ListElements from "./ListElements"
import { useState } from "react"




const ListContextWrapper=()=>{
    const [list, setNoteList] = useState((JSON.parse(localStorage.getItem('NoteLists'))) || []);
    return(
    <ListContext.Provider value={{list,setNoteList}}>
    <InputItem/>
    <ListElements/> 

    </ListContext.Provider>)

    
}

export default ListContextWrapper;
