import React from 'react';

import { CounterContext } from '../../context/counter-context.js';

class Decrement extends React.Component {

    static contextType = CounterContext;

    render(){
        
        const decrementStyle = {
            height: '3em'
        }

        return (
            <div style = {decrementStyle}>
            <button onClick={this.context.decrement}>-</button>
            </div>
        )
    }
}

export default Decrement;