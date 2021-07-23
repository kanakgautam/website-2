import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'

function Button(props) {
    return (
        <div>
           <Link to='/'>
               <button className='btn'><img src={props.src} /></button>
           </Link> 
        </div>
    )
}

export default Button
