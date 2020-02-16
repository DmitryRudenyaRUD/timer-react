import React from 'react';
import Reducer from './Reducer';
import './Stopwatch.css';

export default class Stopwatch extends React.PureComponent {
    constructor(props) {
        super(props);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        this.tick = this.tick.bind(this);
        this.state = {
            pressedButton: null
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    start() {
        this.setState({pressedButton: 'start'})
    }

    stop() {
        clearInterval(this.timerID);
        this.setState({pressedButton: 'stop'})
    }

    reset() {
        this.setState({pressedButton: 'reset'})
    }

    tick() {
        let value = this.props.store.stopwatch;
        let pressed = this.state.pressedButton;
        Reducer(pressed, value);
    }

    render() {
        return (
            <div>
                <h1>{this.props.store.stopwatch}</h1>
                <div>
                    <button onClick={this.start}>START</button>
                    <button onClick={this.stop}>STOP</button>
                    <button onClick={this.reset}>RESET</button>
                </div>
            </div>
        )
    }
}