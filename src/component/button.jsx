import { useState } from "react"

export default function Button({props, onClick}){
    
    return(
        <div>
            <button onClick={onClick} value={props}>clicked {props} times!</button>
        </div>
    )
}