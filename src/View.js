import React from 'react';
import './View.css';
import Clock from './Clock';
import Stopwatch from './Stopwatch';
import Timer from './Timer';


export default class View extends React.Component {

    render() {
        let isToggle = this.props.isToggle;

        return (
            <div className='indicator'>
                {'CLOCK' === isToggle && <Clock/>}
                <div style={{display: 'STOPWATCH' === isToggle ? 'block' : 'none'}}>
                    <Stopwatch
                        store={this.props.store}
                        render={this.props.render}/>
                </div>
                <div style={{display: 'TIMER' === isToggle ? 'block' : 'none'}}>
                    <Timer
                        store={this.props.store}
                        render={this.props.render}/>
                </div>
             </div>
        )
    }
}