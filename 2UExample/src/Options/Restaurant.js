import React from 'react';
import foodtray from './foodtray.svg';
import {Card} from 'react-bootstrap';
import './Restaurant.css';

const Restaurant = (props) => 
{
    return(
        <Card className="rest">
            <Card.Body>{props.children}
                <Card.Text className="resttitle"><img className="foodtray" src={foodtray}/>{props.text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Restaurant;

{/*This code was taken from Professor Mauro's lecture slides in making Cards */}