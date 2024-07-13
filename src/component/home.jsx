import { useState } from "react";
import Button from "./button"

export default function MainComponent(){
    const [count, setCount] = useState(0)

    const handleChange = (e) =>{
        let operator = e.target.value;
        if(operator == "Add"){
            setCount(count + 1)
        }else if(operator == "Sub"){
            if(count < 1) return alert("stop!!")
            setCount(count - 1)
        }
        console.log(count)
    }
    return(
        <div>
            <h1> Hello welcome to React</h1>
            <button onClick={handleChange} value={"Add"} > Add </button>
                <div> current count: {count}</div>
            <button onClick={handleChange} value={"Sub"}> Sub </button>
        </div>
    )
}