import { ListContext } from "./ListContext";
import { useContext, useState } from "react";

const ListElements = () => {

    const { list, setNoteList } = useContext(ListContext);




    const handleClick = (index) => {
        console.log(index)
        setNoteList(prevList => prevList.map(
            (item, i) => index === i ? { ...item, isChecked: !item.isChecked } : { ...item }));


    };



    const deleteItem = (index) => {
        console.log(index)

        // setNoteList(prevNoteList=>prevNoteList.map((item,i)=>{
        //     return  i===index+1 && {...item,isChecked: !item.isChecked}
        //   }))
  
        setNoteList(prevNoteList => prevNoteList.filter((item,i) =>
         { return item != list[index]

         }));
        
    }


    return (
        <>
            {list.length > 0 ?
                list.map((item, index) => {



                    return (
                        <div key={index} class="input-group mb-3 border-1 border  border-dark-subtle w-75 m-auto">
                            <input style={item.isChecked ? { color: "red", textDecoration: "line-through" } : { color: "", textDecoration: "" }}
                                type="text" class="form-control m-1 bg-transparent border-0" value={item.noteValue}

                                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            <input onClick={() => handleClick(index)}  checked={list[index].isChecked} className="     checkNote m-2  input-group-text h-auto" type="checkbox" />
                            <button onClick={() => deleteItem(index)} class=" btn input-group-text bg-transparent border-start border-1 border-dark-subtle
    " id="inputGroup-sizing-default">Delete</button>

                        </div>)
                })

                : <h4 className="text-warning text-center">No Task Added</h4>}

        </>)
}
export default ListElements;