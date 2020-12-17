import React from 'react'


export default function BorderedImageFrame(props){
    return <img style={{
        'borderColor':'red',
        'borderWidth': '10px',
        'borderStyle':'dotted',
        
    }} src={props.imageURL}/>
}