import React from 'react';
import warning from './warning.svg';
import {Card} from 'react-bootstrap';
import './Fact.css';

const fact = (props) => 
{
    return(
        <Card className="Fact">
            <Card.Body>{props.children}
                <Card.Title className="facttitle"><img className="warning" src={warning}/>{props.title}</Card.Title>
                <Card.Text className="facttext">{props.text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default fact;

{/*This code was taken from Professor Mauro's lecture slides in making Cards */}