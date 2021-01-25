import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ProfilePicture from '../ProfilePicture.svg';
import Navigation from '../Navigation/Navigation';
import Name from '../Name/Name';
import Stats from '../Stats/Stats';
import Card from '../Card/Card';
import Popover from '../Popover/Popover';
import {OverlayTrigger} from 'react-bootstrap';

class Home extends Component
{
    render()
    {
        return(
            <div className="Home">

                <OverlayTrigger trigger="click" placement="right" overlay={Popover}>
                    <img className="ProfilePicture" src={ProfilePicture} />
                </OverlayTrigger>
                {/*<img className="ProfilePicture" src={ProfilePicture} />*/}

                <Name>Jane Doe</Name>

                <Stats/>

                <Card title="13 minutes ago" text="Jane helped Anonymous by purchasing 2 coffees and 1 sandwich from McDonalds!"></Card>

                <Card title="12 hours ago" text="Jane helped Sarah by purchasing two hats, 1 pair of gloves, and 1 mouthwash from Walmart! Sarah would like to say 'thank you so much I have been struggling in the cold for days.'"></Card>

                <Card title="13 hours ago" text="Jane helped Thomas by purchasing 2 fries from McDonalds! Thomas would like to say 'thank you, I need something to eat.'"></Card>
            </div>
        )
    }
}

export default Home;
