import React from 'react';
import {handleValues} from './Reducer';
import './Stopwatch.css';

export default class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        this.tick = this.tick.bind(this);
        this.state = {
            pressedButton: 'stopStopwatch'
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    start() {
        return (this.state.pressedButton !== 'startStopwatch') ?
            this.setState({pressedButton: 'startStopwatch'}) :
            null
    }

    stop() {
        this.setState({pressedButton: 'stopStopwatch'})
    }

    reset() {
        this.setState({pressedButton: 'resetStopwatch'})
    }

    tick() {
        let pressed = this.state.pressedButton;
        let value = this.props.store.stopwatch;
        let render = this.props.render;
        handleValues(pressed, value, render);
    }

    render() {
        return (
            <div>
                <h1>{this.props.store.stopwatch}</h1>
                <div className='containerButtons'>
                    <button onClick={this.start}>START</button>
                    <button onClick={this.stop}>STOP</button>
                    <button onClick={this.reset}>RESET</button>
                </div>
            </div>
        )
    }
}