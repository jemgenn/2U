import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import newspaper from './newspaper.svg';
import user from './user.svg';
import shoppingcart from './shoppingcart.svg';
import './Navigation.css';

const Navigation = () => 
{
    return(
        <Nav className="Nav">
            <Nav.Item>
                <Nav.Link href="/Newsfeed"><img className="newsfeed" src={newspaper}/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/"><img className="home" src={user}/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/Purchase"><img className="purchase" src={shoppingcart}/></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navigation;