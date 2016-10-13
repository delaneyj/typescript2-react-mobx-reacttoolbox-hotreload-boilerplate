import React,{ Component } from 'react';
import { observer,inject } from 'mobx-react';
import { Button } from 'react-toolbox';

@inject("store")
@observer
export default class TimerView extends Component<any, {}> {
    render() {
        return (
            <Button label={`Seconds passed: ${this.props.store.timer}`} raised primary onClick={this.onReset} />
        );
    }

    onReset = () => {
        this.props.store.resetTimer();
    }
}