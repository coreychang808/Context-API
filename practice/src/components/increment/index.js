import React from 'react';

import { CounterContext } from '../../context/counter-context.js';

class Increment extends React.Component {

    static contextType = CounterContext;

    render(){
        
        const incrementStyle = {
            height: '3em'
        }

        return (
            <div style = {incrementStyle}>
            <button onClick={this.context.increment}>+</button>
            </div>
        )
    }
}

export default Increment;