import React from 'react'

function ColorBlock(props){
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.colorBlockColor}}>
            <p>{props.colorBlockColor}</p>

        </div>
    )
}

export default ColorBlock