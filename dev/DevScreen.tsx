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

export function DevScreen({ timerStore }:any) {
  return (
    <div>
      <Nested>
        <Nested>
          <TimerView timer={timerStore} />
        </Nested>
      </Nested>
      <TimerView timer={timerStore} />
      <TimerView timer={timerStore} />
    </div>
  );
}
