import React from 'react'

export default class Lab extends React.Component {
    state = {
        'first': '',
        'last': '',
        'enquiries': '',
        'country': '',
        'contactBy':''
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>First name</label>
                    <input type='text' value={this.state.first} onChange={this.updateFirst} />
                    <br></br>
                    <label>Last name</label>
                    <input type='text' value={this.state.last} onChange={this.updateLast} />
                    <br></br>
                    <label>Enquiries</label>
                    <input type='radio' value='support' name='enquiries' onChange={this.updateEnquiries} checked={this.state.enquiries === 'support'}/>Support
                     <input type='radio' value='sales' name='enquiries' onChange={this.updateEnquiries} checked={this.state.enquiries === 'sales'}/>Sales
                     <input type='radio' value='marketing' name='enquiries' onChange={this.updateEnquiries} checked={this.state.enquiries === 'marketing'}/>Marketing
                    <br></br>
                    <label>Country</label>
                    <select name='country' onChange={this.updateCountry} value={this.state.country}>
                        <option value='sg'>Singapore</option>
                        <option value='mg'>Malaysia</option>
                        <option value='th'>Thailand</option>
                    </select>
                    <br></br>
                    <label>Contact By:</label>
                    <input type='checkbox' name='contactBy' value='email'onChange={this.updateContact}/>Email
                    <input type='checkbox' name='contactBy' value='handphone'onChange={this.updateContact}/>handphone
                    <input type='checkbox' name='contactBy' value='letter'onChange={this.updateContact}/>letter
                    <br>
                    </br>


                    <button onClick={this.buttonClick}>submit</button>




                </div>


            </React.Fragment>
        )
    }

    buttonClick = () => {
        if (!this.state.first || !this.state.last || !this.state.enquiries || !this.state.country) {
            alert('please complete the field')
        } else {
            alert('submitted')
            this.setState({
                'first': '',
                'last': '',
                'enquiries': '',
                'country': ''
            })
        }



    }

    updateContact = (event) => {
        let originalArray = this.state[event.target.name]
        // check if the value the user has just clicked on is in the array or not.
        if (!originalArray.includes(event.target.value)){
            // the checkbox value is not in the array, so we add it to the array
            let modified = [...originalArray, event.target.value];
            this.setState({
                [event.target.name]:modified
            })
        }else{
            // the checckbox value is alread in the array so this means we should remove it.
            let modified = originalArray.filter((eachItem)=>{
                // only keep items that does not match the checkbox's value(cos we are going to delete it from the array)
                return eachItem !== event.target.value;
            })
            this.setState({
                [event.target.name]: modified
            })
        }
    }

    updateCountry = (event) => {
        this.setState({
            'country': event.target.value
        })
    }

    updateEnquiries = (event) => {
        this.setState({
            'enquiries': event.target.value
        })
    }

    updateFirst = (event) => {
        this.setState({
            'first': event.target.value
        })
    }
    updateLast = (event) => {
        this.setState({
            'last': event.target.value
        })
    }





}