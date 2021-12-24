import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import { persist } from 'mobx-persist';
import { RerenderTest } from '../utils/RerenderTest';

class TimerStore {
    @persist secondsPassed:number = 0

    constructor() {
      makeAutoObservable(this);
    }

    increase() {
      this.secondsPassed += 1;
    }

    reset() {
      this.secondsPassed = 0;
    }
}

export const timerStore = new TimerStore();

// Build a "user interface" that uses the observable state.
export const TimerView = observer(({ timer }:{timer:TimerStore}) => (
  <button onClick={() => timer.increase()}>
    Seconds passed:
    {' '}
    {timer.secondsPassed}
    <RerenderTest />
  </button>
));
