import React from 'react'
import './style.css'

function App() {
    return (
        <React.Fragment>
            <div>
                <nav>
                    <ul id='menu' style={{
                        'backgroundColor': 'black',
                        'padding': '0',
                        'margin': '0'
                    }}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Menu</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
                <div className='hero'>
                    <img id='image' src={require('./food/japanese-food-1.jpg').default} />
                    <a href='#' style={{
                        'position': 'absolute',
                        'top': '50%',
                        'left': '50%',
                        'width': '300px',
                        'height': '50px',
                        'background-color': 'rgba(255,255,255,0.5)',
                        'text-align': 'center',
                        'transform': 'translate(-50%, -50%)',
                        'border': '1px black solid',
                        'padding-top': '20px',
                    }}>Make a Booking</a>
                </div>
                <div className='about-us'>
                    <div className='content'>
                        <img id='image2' src={require('./food/japanese-food-2.jpg').default} />
                        <h1>Japanese so fresh, any fresh you have to fly to Japan</h1>
                    </div>
                </div>
            </div>





        </React.Fragment>

    )
}

export default App;
