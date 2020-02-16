import React from 'react';
import './App.css';
import ContainerLinks from './ContainerLinks';
import View from './View';
import store from './State';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggle: 'CLOCK'};
    }

    handleToggle = (value) => {
        this.setState({isToggle: value})
    };

    render() {
        return (
            <div className="container">
                <ContainerLinks
                    isToggle={this.state.isToggle}
                    handleToggle={this.handleToggle}/>
                <View
                    store={store}
                    isToggle={this.state.isToggle}
                    render={this.props.render}/>
            </div>
        );
    }
}


