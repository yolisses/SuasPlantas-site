import { stores } from '../mobx/storesConfig';
import { TimerView } from '../mobx/teste';
import { RerenderTest } from '../utils/RerenderTest';

function Nested({ children }:any) {
  return (
    <div>
      <RerenderTest />
      {children}
    </div>
  );
}

export function DevScreen() {
  return (
    <div>
      <Nested>
        <Nested>
          <TimerView timer={stores.timerStore} />
        </Nested>
      </Nested>
      <TimerView timer={stores.timerStore} />
      <TimerView timer={stores.timerStore} />
    </div>
  );
}
