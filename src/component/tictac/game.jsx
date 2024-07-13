import { useState } from "react";
import Board from "./board";

export default function Game(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    //current move instead of last moves.
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 == 0;
    let description;
// console.log(history)
    function handlePlay(nextSquares){
        // add only upto currentMove.
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        //current move of squares.
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove){
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) =>{
        if(move > 0){
            description = "Go to move "+ move;
        }else{
            description = "Start Game!"
        }
        return(
            <li key={move}>
                <button onClick={()=> jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return(
        <div className="game">
            <div className="game-board">
                <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay}/>
            </div>
            <div className="move">
                {moves}
            </div>
        </div>
    )
}