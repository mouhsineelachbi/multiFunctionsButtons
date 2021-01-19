import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hours  : new Date().getHours(),
            minutes : new Date().getMinutes(),
            seconds: new Date().getSeconds()
        };
        //this.updateClock = this.updateClock.bind(this);
    }
    componentDidMount(){
        this.intervalID = setInterval(
            () => this.updateClock(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    updateClock(){
        this.setState({
            hours  : new Date().getHours(),
            minutes : new Date().getMinutes(),
            seconds: new  Date().getSeconds()
        });
    }
    render(){
        return (
            <div>
                 <p>
    The time is {this.state.hours}:{this.state.minutes}:{this.state.seconds}
                </p>
            </div>
        );
    }
}

export default Clock;