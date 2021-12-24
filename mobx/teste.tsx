import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import { persist, create } from 'mobx-persist';
import { RerenderTest } from '../utils/RerenderTest';
import { isBrowser } from '../utils/isBrowser';

// Model the application state.
class Timer {
    @persist secondsPassed = 0

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

export const myTimer = new Timer();

export function Re() {

}

// Build a "user interface" that uses the observable state.
export const TimerView = observer(({ timer }:{timer:Timer}) => (
  <button onClick={() => timer.increase()}>
    Seconds passed:
    {' '}
    {timer.secondsPassed}
    <RerenderTest />
  </button>
));

if (isBrowser) {
  const hydrate = create();
  hydrate('some', myTimer);
}
