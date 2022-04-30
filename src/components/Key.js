
function Key(props) {

    return <div className="key" onClick={()=>{
        //some function that is going to change the board
        //going to notify the parent component
        props.onKeyPressed(props.KeyVal)
        
    }}>
        {props.KeyVal}

    </div>
}

export default Key