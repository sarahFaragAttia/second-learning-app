import { useState, useEffect } from "react"
import { ListContext } from "./ListContext";
import { useContext } from "react";
const InputItem = () => {

    const [Value, setValue] = useState();
    const { list, setNoteList } = useContext(ListContext);


    useEffect(() => localStorage.setItem('NoteLists', JSON.stringify(list)), [list])

    const updateList = () => {
        Value ? setNoteList(prevNoteList => [...prevNoteList, { noteValue: Value, isChecked: false }]) : setNoteList(prevNoteList => [...prevNoteList]);
        setValue("");
    }

    const handleClick = (e) => {
        setValue(e.target.value);
        console.log(Value);

    }

    return (


        <div style={{ height: "40px" }} className=" w-75  m-auto mb-4   input-group mb-3">
            <input type="text" onChange={handleClick} value={Value} className="form-control bg-transparent border-dark-subtle" placeholder="Write Your Note" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button onClick={updateList} className=" btn bg-secondary bg-gradient text-success bg-transparent border-dark-subtle " type="button" id="button-addon2">Add</button>
        </div>


    )
}
export default InputItem;