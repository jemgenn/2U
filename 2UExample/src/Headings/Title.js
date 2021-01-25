import React from 'react';
import './Title.css';

const Title = (props) => 
{
    return(
        <body className="title">{props.children}</body>
    )
}

export default Title;