import React from 'react';
import {handleValues} from "./Reducer";
import './Timer.css';
import ModeHoverTime from "./ModeHoverTimer";

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.start = this.start.bind(this);
        this.state = {
            pressedButton: 'stopTimer'
        };
        this.inputElement = React.createRef();
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

    set = () => {
        this.setState({pressedButton: 'set'});
        if(this.inputElement.current) this.inputElement.current.focus()
    };

    handleInputChange = (e) => {
        this.tick({
            enter: e.target.value,
            id: e.target.id,
            name: 'handleInputChange'})
    };

    tick = (setValue) => {
        let pressed =setValue ? setValue.name :  this.state.pressedButton;
        let value = setValue ? setValue : this.props.store.timer;
        let render = this.props.render;
        handleValues(pressed, value, render);
    };

    render() {
        let valueForset = this.props.store.forSetTimer;
        let valueForVue = this.props.store.timer;
        let pressed = this.state.pressedButton;

        let view = pressed === 'set' ?
            <ModeHoverTime
            value={valueForset}
            handleInputChange={this.handleInputChange}
            start={this.start}
            inputElement={this.inputElement}/> :
                valueForVue === '0:00:00' &&  pressed === 'startTimer' ?
                    <span className='alarm'>{valueForVue}</span> :
                        valueForVue;

        return (
            <div>
                <h1>{view}</h1>
                <div className='containerButtons'>
                    <button onClick={this.start}>START</button>
                    <button onClick={this.stop}>STOP</button>
                    <button onClick={this.reset}>RESET</button>
                    <p>
                        <button
                            className='setButton'
                            onClick={this.set}>SET</button>
                    </p>
                </div>
            </div>
        )
    }
}