import React, { useState } from 'react'
import "../components/Board.css"

function Board() {
    const [board, setBoard] = useState(Array(9).fill(""))
    const [player, setPlayer] = useState("X")
    const [win,setWin]=useState()
    
    const checkForwinner = (squ)=>{
        let combos = {
            across:[
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            diagnol:[
                [0,4,8],
                [2,4,6]
            ]
        };

        for(let combo in combos){
            combos[combo].forEach((pattan)=>{
               if(
                squ[pattan[0]]===''||
                squ[pattan[1]]===''||
                squ[pattan[2]]===''
               ) {

               }else if(
                squ[pattan[0]]=== squ[pattan[1]] &&
                squ[pattan[1]]=== squ[pattan[2]]
               ) {
                   setWin(squ[pattan[0]])
               }
            });
        }
    };
    const handleReset = ()=>{
        setWin(null);
        setBoard(Array(9).fill(""));
    }
    
    let currentPlayer = (idx) => {
        if(board[idx]!==""){
            alert("already clicked")
        return;}
        
         let res = board.map((ele, i) => {
            if (i === idx) return player;
            return ele;
            
        });
        let squ = [...res]
        setBoard(res);
        setPlayer(player === "X" ? "O" : "X")
        checkForwinner(squ)
    

    }
    
    
    return (
        <>
            <h4 className='player'>current player {player}</h4>
            {win && (
                <>
               <div className='player' >
               <h5>{win} is winner</h5>
               </div>
               <div className='player'>
               <button className='player' onClick={()=>{handleReset()}}>reset</button>
               </div>
                </>
            )}
            <div className='board'>
                {
                    board.map((val, i) => {
                        return (
                            <div key={i} className='board_tiles' onClick={() =>{ currentPlayer(i) }}>
                                {val}
                            </div>
                        )
                    })
                }


            </div>
            
            
        </>
    )
}

export default Board