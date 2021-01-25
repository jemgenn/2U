import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Newsfeed.css';
import '../App.js';
import Title from '../Headings/Title';
import Location from '../Location/Location';
import Notification from '../Notification/Notification';
import Fact from '../Fact/Fact';

class Newsfeed extends Component
{
    render()
    {
        return(
            <div className="Newsfeed">
                <Title>What's new?</Title>

                <Location>St. Catharines, ON</Location>

                <Notification title="13 minutes ago" text="There has been a total of 103 helpers in St. Catharines! Keep up the great work and make a change!"></Notification>

                <Notification title="3 hours ago" text="Today, there has been purchases made from McDonalds, Tim Hortons, Walmart, and Dollarama!"></Notification>

                <Fact title="Did you know.." text="An estimated 235 000 Canadians experience homelessness each year."></Fact>

                <Notification title="7 hours ago" text="Today, there has been a total of 13 people helped by amazing purchases so far."></Notification>

                <Fact title="Did you know.." text="Indigenous Peoples are over-represented in the homeless population - despite makng up 5% of Canada’s population. Indigenous Peoples are 8 times more likely to experiene homelessness."></Fact>

            </div>
        )
    }
}

export default Newsfeed;