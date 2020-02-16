import React from 'react';
import './ContainerLinks.css';

export default class ContainerLinks extends React.Component {
    constructor(props) {
        super(props);
        this.handleLinks = this.handleLinks.bind(this);
    }

    handleLinks(e) {
        this.props.handleToggle(e.target.innerHTML);
    }

    render() {
        let isToggle = this.props.isToggle;
        let links = ['CLOCK', 'STOPWATCH', 'TIMER'].map((a, index) => (
            <a key={index}
               href='#'
               className={isToggle === a ? 'action' : 'default'}
               onClick={this.handleLinks}
            >{a}</a>));
        return (
            <div className='ContainerLinks'>
                {links}
            </div>
        )
    }
}
