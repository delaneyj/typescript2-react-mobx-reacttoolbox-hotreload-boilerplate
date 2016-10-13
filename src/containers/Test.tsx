import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Button } from 'react-toolbox';

import { ITimerStore } from '../store'

@inject(({rootStore}) => {
    return {
        timerStore: rootStore.timerStore as ITimerStore
    };
})
@observer
export default class TimerView extends Component<{ timerStore?: ITimerStore }, {}> {
    render() {
        return (
            <Button label={`Seconds passed: ${this.props.timerStore.timer}`} raised primary onClick={this.onReset} />
        );
    }

    onReset = () => {
        this.props.timerStore.resetTimer();
    }
}