import React from 'react';
import './Location.css';
import placeholder from './placeholder.svg';

const Location = (props) => 
{
    return(

        <body className="location"><img className="placeholder" src={placeholder}/>{props.children}</body>
    )
}

export default Location;