import { MyList } from "./UserContext";
import { useContext, useRef, useState } from "react";

const ListElements = () => {

    // const [fontStyle,setStyle]=useState({color:"",textDecoration:""})
    const { list, setNoteList } = useContext(MyList);
    // const [checkedNoteIndex, setCheckedNoteIndex] = useState({id:null,checked:null});
    // const[Style,SetStyle]=useState({color:"",textDecoration:""})
    const [isChecked, setCheckStatus] = useState()
    const handleClick = (index) => {
        console.log(index)
        setNoteList(prevList => prevList.map(
            (item) => item == list[index] ? { ...item, isChecked: !item.isChecked } : { ...item }));


    };



    const deleteItem = (index) => {
        console.log(index)
        setNoteList(prevNoteList => prevNoteList.filter((item) => { return item != list[index] }));
    }


    {/* return(
                    <div  key ={index} class="input-group mb-3 border-1 border  border-dark-subtle w-75 m-auto">
  <div className="w-75 position-relative">
  <label htmlFor="checkBox1"  style={item.isChecked?{color:"red",textDecoration:"line-through"}:{color:"",textDecoration:""}}   class="form-control bg-transparent p-1 border-0 w-100 shadow-none " >{item.noteValue}</label>

  
  <input class=" bg-transparent form-check-input  ms-2 mt-3 position-absolute translate-middle end-0 bottom-0 " type="checkBox"   id="checkBox1" onClick={()=>handleClick(index)} />
  </div>
<button onClick={() => deleteItem(index)} class="  position-absolute bottom-0 top-0 end-0  btn input-group-text bg-transparent border-start border-1 border-dark-subtle
  " id="inputGroup-sizing-default">Delete</button>
  </div>)})
 */}







    return (
        <>
            {list.length > 0 ?
                list.map((item, index) => {



                    return (
                        <div key={index} class="input-group mb-3 border-1 border  border-dark-subtle w-75 m-auto">
                            <input style={item.isChecked ? { color: "red", textDecoration: "line-through" } : { color: "", textDecoration: "" }}
                                type="text" class="form-control m-1 bg-transparent border-0" value={item.noteValue}

                                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            <input onClick={() => handleClick(index)} className="     checkNote m-2  input-group-text h-auto" type="checkbox" />
                            <button onClick={() => deleteItem(index)} class=" btn input-group-text bg-transparent border-start border-1 border-dark-subtle
    " id="inputGroup-sizing-default">Delete</button>

                        </div>)
                })

                : <h4 className="text-warning text-center">No Task Added</h4>}

        </>)
}
export default ListElements;