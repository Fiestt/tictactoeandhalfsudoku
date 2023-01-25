import React, { useState } from "react";
import { useEffect } from "react";

export default ({n, content, setBoard, board}) => {
    const i = Math.floor(n / board.length);
    const j = n - i * board.length;
    const [val, setVal] = useState(null)
    const [r, setR] = useState(true)
    const [c, setC] = useState(true)
    const [st, setSt] = useState({})

    const checkRow = () => {
        for (let t = 0; t < board[i].length; t++) {
            if (+board[i][t] === +content) { //совпадение по горизонтали найдено
                setR(false)
                break;
            }
        }
    }

    const checkCol = () => {
        for (let t = 0; t < board.length; t++) {
            if (+board[t][j] === +content) {
                setC(true);
                break;
            }
        }
    }

    useEffect(() => {
        checkCol();
        checkRow();
        setSt({
            color: r && c ? "springgreen" : "crimson"
        })
    }, [])

    const setStep = (e) => {
        setVal(e.target.value)
        setBoard(prev => {
            let arr = [...prev];
            let cnt = arr.length;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length; j++) {
                    if (i * cnt + j === n) {
                        arr[i][j] = e.target.value;
                        break;
                    } 
                }
            }
            return arr
        })
    }


    return <div className="card" >
        {content ? 
            <span style = {st} >{content}</span> :
            <select onChange={setStep} value={content}>
                <option value={null}></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
            </select>
            // <input type="number" value={val} min={1} max={9} onChange={setStep}/>
        }
        <span className="card-index">{n}</span>
    </div>
}