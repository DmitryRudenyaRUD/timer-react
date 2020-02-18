import React from 'react';
import './ModeHoverTime.css';

export default function ModeHoverTime(props) {

    const input_2 = React.createRef();
    const input_3 = React.createRef();

    const keyDown = (e) => {
        if(e.target.id === '1' && e.key === 'Enter') {
            input_2.current.focus();
        } else if(e.target.id === '2' && e.key === 'Enter') {
            input_3.current.focus();
        } else if(e.target.id === '3' && e.key === 'Enter') {
            input_3.current.blur();
            props.start()
        }
    };

    const onFocus = (e) => {
        e.target.classList.add('blink')
    };

    const onBlur = (e) => {
        e.target.classList.remove('blink')
    };

    return (
        <div className='setContainer'>
            <input
                type='text'
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={(e) => props.handleInputChange(e)}
                onKeyDown={keyDown}
                ref={props.inputElement}
                value={props.value[0]}
                id='1'
                autoFocus={true}/><span>{':'}</span>
            <input
                type='text'
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={(e) => props.handleInputChange(e)}
                onKeyDown={keyDown}
                ref={input_2}
                value={props.value[1]}
                id='2'/><span>{':'}</span>
            <input
                type='text'
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={(e) => props.handleInputChange(e)}
                onKeyDown={keyDown}
                ref={input_3}
                value={props.value[2]}
                id='3'/>
        </div>
    )
}