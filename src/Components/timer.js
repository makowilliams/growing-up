import React from 'react';
//import AppContext from '../growing-up-context';

const ms = require('pretty-ms');

export default class Timer extends React.Component {
    //static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            start: 0,
            time: 0,
            date: '',
        };

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    startTimer() {
        let new_date = new Date();
        this.setState({
            time: this.state.time,
            start: Date.now() - this.state.time,
            active: true,
            date: new_date.toISOString(),
        });
        this.timer = setInterval(
            () =>
                this.setState({
                    time: Date.now() - this.state.start,
                }),
            1
        );
    }

    format_Duration(time) {
        let formatDuration = ms(time, { colonNotation: true, secondsDecimalDigits: 0 });
        if (formatDuration.length < 8) {
            if (formatDuration.length === 7) {
                formatDuration = '0'.concat('', formatDuration);
            } else if (formatDuration.length === 5) {
                formatDuration = '00:'.concat('', formatDuration);
            } else if (formatDuration.length === 4) {
                formatDuration = '00:0'.concat('', formatDuration);
            }
        }
        return formatDuration;
    }

    stopTimer() {
        //on stop - update context
        //on submit on stop-btn page - send post req to api
        let formatDate = this.state.date;
        formatDate = formatDate.substring(0, formatDate.length - 5).replace('T', ' ');
        let formatedDuration = this.format_Duration(this.state.time);
        console.log({
            duration: formatedDuration,
            date: formatDate,
        });
        this.setState({ active: false });
        clearInterval(this.timer);
    }

    resetTimer() {
        this.setState({ time: 0 });
    }

    render() {
        let start = this.state.time === 0 ? <button onClick={this.startTimer}>Start</button> : null;
        let stop = this.state.active ? <button onClick={this.stopTimer}>Stop</button> : null;
        let reset =
            this.state.time !== 0 && !this.state.active ? (
                <button onClick={this.resetTimer}>Reset</button>
            ) : null;
        let resume =
            this.state.time !== 0 && !this.state.active ? (
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
