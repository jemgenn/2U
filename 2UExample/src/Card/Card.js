import React from 'react';
import heart from './heart.svg';
import {Card} from 'react-bootstrap';
import './Card.css';

const card = (props) => 
{
    return(
        <Card className="Card">
            <Card.Body>{props.children}
                <Card.Title className="proftitle"><img className="heart" src={heart}/>{props.title}</Card.Title>
                <Card.Text className="proftext">{props.text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default card;

{/*This code was taken from Professor Mauro's lecture slides in making Cards */}