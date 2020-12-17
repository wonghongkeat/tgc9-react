import React from 'react'

function sayHello(){
    return 'hello';
}

function sayGoodbye(){
    return <h2>time to say goodbye</h2>
}

// for a function to be a component
// it must be a function
// first alphabet is uppercase
// return JSX
function ImageFrame(){
    return <img src={require('./duck.png').default}/>
}

// labsheet 2.1 handson
function BorderedImageFrame(){
    return <img style={{
        'borderColor':'red',
        'borderWidth': '10px',
        'borderStyle':'dotted',
        'borderRadius':'100px'
    }} src={require('./duck.png').default}/>
}

function App() {
  return (
   <React.Fragment>
<h1>{sayHello()}</h1>
  {sayGoodbye()}
  <ImageFrame/>
  <BorderedImageFrame/>

   </React.Fragment>
  )
}

export default App;
