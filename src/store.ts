import {observable} from 'mobx';

export interface ITimerStore {
    timer:number;
    resetTimer():void;
}

export class TimerStore implements ITimerStore {
    @observable timer = 0;

    constructor() {
        setInterval(() => {
            this.timer++;
        }, 1000);
    }

    resetTimer() {
        this.timer = 0;
    }
}
