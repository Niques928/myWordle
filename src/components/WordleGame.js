import Board from './Board'
import Keyboard from './Keyboard'
import {useState} from 'react'

function WordleGame() {

    // [stateVariable, function that changes the stateVariable]
const [key, setKey] = useState("")
    


   let handleKeyPress = (text) => {
        //passinig this function to child to notify
        // console.log(text)
        // alert(text)
        //class structure this.setState(key: text)
        setKey(text)
    }
    return (
        <div>
            <Board pressedKey={key}/>
            <Keyboard onKeyPressed={handleKeyPress}/>
        </div>
    )
}

export default WordleGame