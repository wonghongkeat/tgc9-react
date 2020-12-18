import React from 'react'
import duck from './duck.png'
import './styles.css'

function App() {
    return (
        <React.Fragment>
            <h1>Hello world</h1>
            <button>click me</button>
            <p>random number: {Math.floor(Math.random() * 6) + 1}</p>   /* any code in the {} will be javascript syntax */
            <img src={duck} alt='duck'/>
            <p style={{
                'color':'red',
                'fontSize': '32px',
                // to style inline style with react, we have to add {{}}, and type it in JavaScript syntax

            }}>inline style css</p>


        </React.Fragment>
    )
}

export default App;

