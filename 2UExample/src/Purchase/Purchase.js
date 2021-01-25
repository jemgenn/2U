import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Purchase.css';
import Title from '../Headings/Title';
import Sub from '../Headings/Sub';
import Restaurant from '../Options/Restaurant';
import Store from '../Options/Store';
//import '../App.js';

class Purchase extends Component
{
    render()
    {
        return(
            <div className="Purchase">

                <Title>Let's help others today!</Title>

                <Sub>Recently visited</Sub>

                <Restaurant text="McDonalds"></Restaurant>

                <Store text="Walmart"></Store>

                <Sub>Most popular</Sub>

                <Restaurant text="McDonalds"></Restaurant>
                <Restaurant text="Tim Hortons"></Restaurant>
                <Restaurant text="A&W"></Restaurant>
                <Store text="Shoppers Drug Mart"></Store>
                <Store text="Walmart"></Store>

                <Sub>High demand</Sub>

                <Restaurant text="Wendys"></Restaurant>

            </div>
        )
    }
}

export default Purchase;