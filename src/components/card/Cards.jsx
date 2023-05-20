import React, {Component} from 'react';
import Card from './CardUI';
import CardA from './CardA';
import CardSa from './CardSa';

class Cards extends Component {
render () {
    return (
        <div className='container-fluid d-flex justify-content-center'>
            <div className='row'>
                <div className='col-md-4'>
                    <Card/>
                </div>
                <div className='col-md-4'>
                    <CardA/>
                </div>
                <div className='col-md-4'>
                    <CardSa/>
                </div>
            </div>
        </div>
    );
}
}
export default Cards;