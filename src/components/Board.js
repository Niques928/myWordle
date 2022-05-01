import '../styles/Board.css'
import {useState} from 'react'
import Tile from './Tile'

function Board(props) {



    return (
        <div className="board">
            <div className="wordrow">
                <Tile tilePos={0} attempt={0}/> 
                <Tile tilePos={1} attempt={0}/> 
                <Tile tilePos={2} attempt={0}/> 
                <Tile tilePos={3} attempt={0}/> 
                <Tile tilePos={4} attempt={0}/> 
                </div>
            <div className="wordrow"> 
                <Tile tilePos={0} attempt={1}/> 
                <Tile tilePos={1} attempt={1}/> 
                <Tile tilePos={2} attempt={1}/> 
                <Tile tilePos={3} attempt={1}/> 
                <Tile tilePos={4} attempt={1}/> 
                </div>
            <div className="wordrow">
                <Tile tilePos={0} attempt={2}/> 
                <Tile tilePos={1} attempt={2}/> 
                <Tile tilePos={2} attempt={2}/> 
                <Tile tilePos={3} attempt={2}/> 
                <Tile tilePos={4} attempt={2}/> 
                 </div>
            <div className="wordrow">
                <Tile tilePos={0} attempt={3}/> 
                <Tile tilePos={1} attempt={3}/> 
                <Tile tilePos={2} attempt={3}/> 
                <Tile tilePos={3} attempt={3}/> 
                <Tile tilePos={4} attempt={3}/> 
                 </div>
            <div className="wordrow">
                <Tile tilePos={0} attempt={4}/> 
                <Tile tilePos={1} attempt={4}/> 
                <Tile tilePos={2} attempt={4}/> 
                <Tile tilePos={3} attempt={4}/> 
                <Tile tilePos={4} attempt={4}/> 
                 </div>
            <div className="wordrow">
                <Tile tilePos={0} attempt={5}/> 
                <Tile tilePos={1} attempt={5}/> 
                <Tile tilePos={2} attempt={5}/> 
                <Tile tilePos={3} attempt={5}/> 
                <Tile tilePos={4} attempt={5}/>  
                </div>
        </div>

       /* <div>
            <h1> {props.pressedKey} </h1>
        </div> */
    )
}

export default Board