import React from 'react'

export default function Alert(props){
    return (<div className='alert' style={{
        'background':props.bg,
        'width':'100vw'
    }}>
        <h1 className='message'>{props.message}</h1>
        </div>
    )

}