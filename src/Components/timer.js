import React from 'react';
const ms = require('pretty-ms');

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            start: 0,
            time: 0,
        };

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    startTimer() {
        this.setState({
            time: this.state.time,
            start: Date.now() - this.state.time,
            active: true,
        });
        this.timer = setInterval(
            () =>
                this.setState({
                    time: Date.now() - this.state.start,
                }),
            1
        );
    }

    stopTimer() {
        this.setState({ active: false });
        clearInterval(this.timer);
    }

    resetTimer() {
        this.setState({ time: 0 });
    }

    render() {
        let start = this.state.time == 0 ? <button onClick={this.startTimer}>Start</button> : null;
        let stop = this.state.active ? <button onClick={this.stopTimer}>Stop</button> : null;
        let reset =
            this.state.time != 0 && !this.state.active ? (
                <button onClick={this.resetTimer}>Reset</button>
            ) : null;
        let resume =
            this.state.time != 0 && !this.state.active ? (
                <button onClick={this.startTimer}>Resume</button>
            ) : null;
        return (
            <div className="timer-container">
                <p className="timer">
                    {this.state.time < 1000
                        ? '0:00'
                        : ms(this.state.time, { colonNotation: true, secondsDecimalDigits: 0 })}
                </p>
                {start}
                {resume}
                {stop}
                {reset}
                <p className="last-feed">Last feed was at 5:00PM</p>
            </div>
        );
    }
}
