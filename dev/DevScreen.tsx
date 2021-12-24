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

export function DevScreen({ timer }:any) {
  return (
    <div>
      <Nested>
        <Nested>
          <TimerView timer={timer} />
        </Nested>
      </Nested>
      <TimerView timer={timer} />
      <TimerView timer={timer} />
    </div>
  );
}
