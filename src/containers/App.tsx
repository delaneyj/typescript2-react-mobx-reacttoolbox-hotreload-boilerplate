import * as React from 'react'
import { observable } from 'mobx';
import { observer, Provider, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import 'react-toolbox/lib/commons.scss';

import Test from './Test';


class AppState {
    @observable timer = 0;

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    resetTimer() {
        this.timer = 0;
    }
}

const appState = new AppState();

class App extends React.Component<{}, {}> {
    render() {
        return (
            <Provider store={appState}>
                <div>
                    <Test/>,
                    <DevTools />
                </div>
            </Provider >
        );
    }

   
};


export default () => <App/>
//export default () => <div>Hello Delaney!</div>