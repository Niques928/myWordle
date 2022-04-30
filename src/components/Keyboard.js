import '../styles/Keyboard.css'

function Keyboard() {

    let Keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    let Keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    let Keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

    return (
        <div className="keyboard">
            <div className ="row">
               {Keys1.map((key)=>{
                return <div> {key}</div>
            })} </div>
            <br></br>
            <div className ="row">
            {Keys2.map((key)=>{
            return <div> {key}</div>
        })} </div>
        <br></br>
        <div className ="row">
            {Keys3.map((key)=>{
            return <div> {key}</div>
        })} </div>
        </div>
    )
}

export default Keyboard