import React from 'react';
import {handleValues} from "./Reducer";

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.start = this.start.bind(this);

        this.state = {
            pressedButton: 'stopTimer'
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    start = () => {
        return (this.state.pressedButton !== 'startTimer') ?
            this.setState({pressedButton: 'startTimer'}) :
            null
    };

    stop = () => {
        this.setState({pressedButton: 'stopTimer'})
    };

    reset = () => {
        this.setState({pressedButton: 'resetTimer'})
    };

    tick = () => {
        let pressed = this.state.pressedButton;
        let value = this.props.store.timer;
        let render = this.props.render;
        handleValues(pressed, value, render);
    };

    render() {
        return (
            <div>
                <h1>{this.props.store.timer}</h1>
                <div className='containerButtons'>
                    <button onClick={this.start}>START</button>
                    <button onClick={this.stop}>STOP</button>
                    <button onClick={this.reset}>RESET</button>
                </div>
            </div>
        )
    }
}