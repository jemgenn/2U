import React from 'react';
import './Sub.css';

const Sub = (props) => 
{
    return(
        <body className="sub">{props.children}</body>
    )
}

export default Sub;