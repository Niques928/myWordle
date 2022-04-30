import Board from './Board'
import Keyboard from './Keyboard'

function WordleGame() {

   let handleKeyPress = (text) => {
        //passinig this function to child to notify
        console.log(text)
        alert(text)
    }
    return (
        <div>
            <h1> Game Container </h1>
            <Board />
            <Keyboard onKeyPressed={handleKeyPress}/>
        </div>
    )
}

export default WordleGame