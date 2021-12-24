import { isDev } from './isDev';

export function RerenderTest() {
  if (!isDev) return null;

  return (
    <div className="text-purple-800">
      {Math.round(Math.random() * 100000)}
    </div>
  );
}
