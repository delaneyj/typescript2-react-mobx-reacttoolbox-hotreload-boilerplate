import * as React from 'react'
import { observable } from 'mobx';
import { observer, Provider, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import 'react-toolbox/lib/commons.scss';

import Test from './Test';
import { TimerStore } from '../store';

class RootStore {
    @observable timerStore;

    constructor() {
        this.timerStore = new TimerStore();
    }
}
const rootStore = new RootStore();

export default () => {
    return (
        <Provider rootStore={rootStore}>
            <div>
                <Test />
                <DevTools />
            </div>
        </Provider>
    )
};