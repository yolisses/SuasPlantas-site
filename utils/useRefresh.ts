import { useState } from 'react';

export function useRefresh() {
  const [_, setRefreshValue] = useState(0);

  return function refresh() {
    setRefreshValue(Math.random());
  };
}
