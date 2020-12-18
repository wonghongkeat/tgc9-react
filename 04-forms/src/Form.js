import React from 'react'

export default class Form extends React.Component {
    state ={
        'name':'',
        'email':'',
        'color':'',
        'day':''
    }

    render(){
        return (
            <React.Fragment>
                <div>
                    <label>name</label>
                    <input type='text' value={this.state.name} onChange={this.updateName}/>
                     <br></br>
                      <br></br>
                    <label>Email</label>
                    <input type='text' value={this.state.email} onChange={this.updateEmail}/>
                   <br></br>
                    <br></br>
                   <label>favourite color</label>
                    <input type='radio' name='color' value='red' onChange={this.updateColor}/>red
                    <input type='radio' name='color' value='green' onChange={this.updateColor}/>green
                    <input type='radio' name='color' value='blue' onChange={this.updateColor}/>blue
                     <br></br>
                    <br></br>
                    <label>favourite time of the day</label>
                    <input type='radio' name='time' value='morning' onChange={this.updateDay}/>morning
                    <input type='radio' name='time' value='afternoon' onChange={this.updateDay}/>afternoon
                    <input type='radio' name='time' value='evening'  onChange={this.updateDay}/>evening
                </div>
            </React.Fragment>

        )
    }


    updateName = (event) => {
        this.setState({
            name: event.target.value
         
        })
    }
    updateEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    updateColor = (event) => {
        this.setState({
            color: event.target.value
        })
    }
    updateDay = (event) => {
        this.setState({
            day: event.target.value
        })
    }
}
