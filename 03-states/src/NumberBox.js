import React from 'react'

// all class-based components extending from React.Component
// must have a render function
export default class NumberBox extends React.Component {

    // the state attribute name must be called state
    // this holds all the state variables
    // to access props in a class based environment, we have to put the this. infront 
    state = {
        number: this.props.startingNum
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>{this.state.number}</h1>
                </div>

                <button onClick={this.increment}>add</button>

            </React.Fragment>
        )
    }


    // must use arrow functon instead of the word function
    increment = ()=>{
        // the only way to change the variable
        // in the state to use the .setState function
        // this is an async function
        this.setState({
            number: this.state.number + 1
        })
    }
}