import React, { useContext } from "react";
import Ctx from "../Ctx";
import Card from "./Card";

export default () => {

    const { board } = useContext(Ctx)

    return <div className="board">
        {board.map((el, i) => <Card 
        className="card" 
        key={i} 
        index={i} 
        char={el}/>)}
    </div>
}