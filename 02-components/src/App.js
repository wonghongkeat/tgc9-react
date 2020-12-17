import React from 'react'
import BorderedImageFrame from './BorderedImageFrame'
import Alert from './Alert'
import SumOfTwo from './SumOfTwo'

function sayHello() {
    return 'hello';
}

function sayGoodbye() {
    return <h2>time to say goodbye</h2>
}

// for a function to be a component
// it must be a function
// first alphabet is uppercase
// return JSX
function ImageFrame() {
    return <img src={require('./duck.png').default} />
}

// funtion are able to be created into a new .js file, jsut need to be imported.
// labsheet 2.1 handson
// function BorderedImageFrame(props){
//     return <img style={{
//         'borderColor':'red',
//         'borderWidth': '10px',
//         'borderStyle':'dotted',

//     }} src={props.imageURL}/>
// }

// function Alert(props){
//     return (<div className='alert' style={{
//         'background':props.bg,
//         'width':'100vw'
//     }}>
//         <h1 className='message'>{props.message}</h1>
//         </div>
//     )

// }

// function SumOfTwo(props){
//     return (
//     //     <div>
//     //  {props.num1 + props.num2}
//     //  </div>
//     // )

//         props.num1 + props.num2
//     )

// }

function App() {
    return (
        <React.Fragment>
            <Alert message='whats up' bg='orange' />
            <h1>{sayHello()}</h1>
            {sayGoodbye()}
            <ImageFrame />
            <BorderedImageFrame imageURL={require('./duck.png').default} />

            <SumOfTwo num1={3} num2={5} />

        </React.Fragment>
    )
}

export default App;
