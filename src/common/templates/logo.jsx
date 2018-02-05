import React from 'react'


export default props => (
    <a className="navbar-brand" style={{padding:"10px"}}>
        <img src={props.img} alt="Logo" width="40" height="40"/>
        <span style={{color:"white"}}>
            {props.label}
        </span>
    </a>
)