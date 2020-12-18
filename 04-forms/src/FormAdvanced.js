import React from 'react'


// this new js file is to show how we can simplify the code from form.js
export default class FormAdvanced extends React.Component {
    state = {
        'name': '',
        'email': '',
        'color': '',
        'day': '',
        'fruits': ''
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>name</label>
                    {/* the name attribute must match the state attribute */}
                    <input type='text' name='name' value={this.state.name} onChange={this.udateFormField} />

                    <br></br>
                    <br></br>

                    <label>Email</label>
                    <input type='text' name='email' value={this.state.email} onChange={this.udateFormField} />

                    <br></br>
                    <br></br>

                    <label>favourite color</label>
                    <br></br>
                    <input type='radio' name='color' value='red' onChange={this.udateFormField} checked={this.state.color === 'red'} />red
                    <input type='radio' name='color' value='green' onChange={this.udateFormField} checked={this.state.color === 'green'} />green
                    <input type='radio' name='color' value='blue' onChange={this.udateFormField} checked={this.state.color === 'blue'} />blue

                     <br></br>
                    <br></br>

                    <label>favourite time of the day</label>
                    <br></br>
                    <input type='radio' name='day' value='morning' onChange={this.udateFormField} checked={this.state.day === 'morning'} />morning
                    <input type='radio' name='day' value='afternoon' onChange={this.udateFormField} checked={this.state.day === 'afternoon'} />afternoon
                    <input type='radio' name='day' value='evening' onChange={this.udateFormField} checked={this.state.day === 'evening'} />evening

                  <br></br>
                    <br></br>
                    <label>fruits</label>
                    <br></br>
                    <input type='checkbox' name='fruits' value='orange' onChange={this.updateFruits} checked={this.state.fruits.includes('orange')}/>orange
                    <input type='checkbox' name='fruits' value='apple' onChange={this.updateFruits} checked={this.state.fruits.includes('apple')}/>apple
                    <input type='checkbox' name='fruits' value='mango' onChange={this.updateFruits} checked={this.state.fruits.includes('mango')}/>mango



                </div>
            </React.Fragment>

        )
    }

    updateFruits = event => {
        // make a copy of the old array
        if (!this.state.fruits.includes(event.target.value)) {
            let copy = [...this.state.fruits, event.target.value]
            // or
            // let  copy=this.state.fruits.slice();
            // copy.push(event.target.value);
            this.setState({
                'fruits': copy
            })
        } else {
            // if the user clicks a checkbox when its value is alraedy in the array then it means we have to remove from the array
            let copy = this.state.fruits.filter((eachFruit) => {
                //only keep the fruits that does not match what i want to delete
                return eachFruit != event.target.value
            })
            this.setState({
                'fruits': copy
            })
        }
    }

    udateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    // updateName = (event) => {
    //     this.setState({
    //         name: event.target.value

    //     })
    // }
    // updateEmail = (event) => {
    //     this.setState({
    //         email: event.target.value
    //     })
    // }
    // updateColor = (event) => {
    //     this.setState({
    //         color: event.target.value
    //     })
    // }
    // updateDay = (event) => {
    //     this.setState({
    //         day: event.target.value
    //     })
    // }
}
