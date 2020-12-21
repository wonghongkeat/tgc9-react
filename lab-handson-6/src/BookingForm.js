import React from 'react'
import axios from 'axios'

export default class BookingForm extends React.Component {
    state = {
        firstname: '',
        lastname: '',
        seats: 'outdoor',
        app: ''
    }
    seating = [
        {
            id: 1,
            value: 'outdoor',
            title: 'outdoor'
        },
        {
            id: 2,
            value: 'indoor',
            title: 'indoor'
        },
        {
            id: 3,
            value: 'vip',
            title: 'vip'
        }
    ]

    appetizer = [
        {
            id: 1,
            value: 'raw-fishes',
            title: 'raw-fishes'
        },
        {
            id: 2,
            value: 'salad',
            title: 'salad'
        },
        {
            id: 3,
            value: 'fried-cuttlefish',
            title: 'fried-cuttlefish'
        },
        {
            id: 4,
            value: 'peanuts',
            title: 'peanuts'
        }
    ]



    renderAppetizer() {
        let result = []
        for (let food of this.appetizer) {
            result.push(
                <React.Fragment>
                    <input type='checkbox'
                        name="app"
                        value={food.value}
                        onChange={this.updateCheckBoxes}>
                    </input>{food.title}
                </React.Fragment>
            )
        }
        return result
    }

    renderSeating() {
        let result = []
        for (let seat of this.seating) {
            result.push(
                <React.Fragment>
                    <input
                        type='radio'
                        name='seats'
                        value={seat.value}
                        onChange={this.updateFormField}
                    >
                    </input>
                    {seat.title}
                </React.Fragment>
            )
        }
        return result;
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <div>
                        <label>first name</label>
                        <input
                            type='text'
                            value={this.state.firstname}
                            onChange={this.updateFormField}
                            name='firstname'></input>
                    </div>
                    <div>
                        <label>last name</label>
                        <input type='text'
                            value={this.state.lastname}
                            onChange={this.updateFormField}
                            name='lastname'></input>
                    </div>
                    <div>
                        <label>seating:</label>
                        {this.renderSeating()}
                    </div>
                    <div>
                        <label>appetizer:</label>
                        {this.renderAppetizer()}
                    </div>
                </div>
            </React.Fragment>
        )
    }

    updateFormField = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
}
