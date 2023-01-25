import React, { useState, useEffect } from "react";
import SuCard from "../components/SuCard"


export default () => {
    const n = 3
    const data = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"
    const [board, setBoard] = useState([]);
    useEffect(() => {
        let cnt = n ** 2;
        let brd = []
        for (let i = 0; i < cnt; i++) {
            brd.push([]);
            for (let j = 0; j < cnt; j++) {
                brd[i].push(data[i * cnt + j] !== "-" ? data[i * cnt + j] : null);
                /*
                    i=1, j=0-8, cnt=9
                    0 2 4 6 8 10 12 14 16
                    9 10 11 12 13 14 15 16 17
                */
            }
        }
        setBoard(brd)
    }, [])

    return <div className="board"
        style={{ gridTemplateColumns: `repeat(${n ** 2}, auto)` }}>

        {board.length > 0 && board.reduce((arr, el, i) => {
            el.forEach((cell, j) => {
                arr.push(<SuCard 
                    key={i * (n ** 2) + j} 
                    n={i * (n ** 2) + j} 
                    content={cell} 
                    cnt={n}
                    setBoard={setBoard}
                    board={board}
                    />)

            })
            return arr
        }, [])}
    </div>
}