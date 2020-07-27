import React, { createContext } from 'react';

export const GrowingContext = createContext();

export default class GrowingContextProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
        };
    }

    updateContext = (newUpdate) => {
        const key = Object.keys(newUpdate);
        const value = Object.values(newUpdate);

        console.log(newUpdate);

        this.setState({
            [key[0]]: value[0],
        });
    };

    render() {
        return (
            <GrowingContext.Provider
                value={{ ...this.state, updateContext: this.updateContext }}
            >
                {this.props.children}
            </GrowingContext.Provider>
        );
    }
}
