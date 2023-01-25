import React, { useContext } from "react";
import Ctx from "../Ctx";

export default ({index, char}) => {
    const { setBoard, player, setPlayer, setCnt } = useContext(Ctx)
    

    const setStep = () => {
        if (!char) {
            let ch = player ? "x" : "o"
            setPlayer(!player);
            setCnt();
            setBoard(prev => prev.map((el, i) => i === index ? ch : el))
        }
    }

    return <div className="card" onClick={setStep}>{char}</div>
}