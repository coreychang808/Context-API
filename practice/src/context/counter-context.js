import React from 'react';

//imported by individual child components (react context)
export const CounterContext = React.createContext();


class CounterContextProvider extends React.Component {
    constructor (props){
        super ();
        this.state = {
            count : 0,
            increment: this.increment,
            decrement: this.decrement,
        }
    }

    increment = () => {
        this.handleCounter(this.state.count +1);
    }

    decrement = () => {
        this.handleCounter(this.state.count -1);
    }

    handleCounter = (count) => {
        this.setState({count});
    }

    render() {
        return (
            <CounterContext.Provider value={this.state}>
                {this.props.children}
            </CounterContext.Provider>
        )
    }
}

export default CounterContextProvider;