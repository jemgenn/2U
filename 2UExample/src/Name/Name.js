import React from 'react';
import './Name.css';

const Name = (props) => 
{
    return(
        <body className="name">{props.children}</body>
    )
}

export default Name;