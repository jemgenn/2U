import React from 'react';
import './Notification.css';
import {Card} from 'react-bootstrap';
import heart from '../Card/heart.svg';

const notification = (props) => 
{
    return(
        <Card className="notification">
            <Card.Body>{props.children}
                <Card.Title className="notiftitle"><img className="heart" src={heart}/>{props.title}</Card.Title>
                <Card.Text className="text">{props.text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default notification; 
