import '../styles/Keyboard.css'
import Key from './Key'

function Keyboard(props) {

    let Keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    let Keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    let Keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

    return (
        <div className="keyboard" 
>
          <div className ="row">
           {Keys1.map((key)=>{
                   //instead of returning <div> {key} </div>
                   // returning Keys component to take in the value of the key through props
                return <Key onKeyPressed={props.onKeyPressed} KeyVal={key}/> 
            })} </div> 
            
            <div className ="row">
            {Keys2.map((key)=>{
            return <Key onKeyPressed={props.onKeyPressed} KeyVal={key}/>
        })} </div>
        
        <div className ="row">
            {Keys3.map((key)=>{
            return <Key onKeyPressed={props.onKeyPressed} KeyVal={key}/>
        })} </div>
        </div>
    )
}

export default Keyboard