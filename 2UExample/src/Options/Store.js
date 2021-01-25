import React from 'react';
import small from './small.svg';
import {Card} from 'react-bootstrap';
import './Store.css';

const Store = (props) => 
{
    return(
        <Card className="store">
            <Card.Body>{props.children}
                <Card.Text className="storetitle"><img className="foodtray" src={small}/>{props.text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Store;

{/*This code was taken from Professor Mauro's lecture slides in making Cards */}