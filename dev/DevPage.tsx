import { useEffect, useState } from 'react';
import Client from 'socket.io-client';

function getClient() {
  const socket = Client('ws://localhost:3001');
  socket.on('receive_message', (value) => {
    console.log(value);
  });
  return socket;
}

export function DevPage() {
  const [socket] = useState(() => getClient());
  const [ping, setPing] = useState('ainda não');

  function handleClick() {
    socket.emit('ping');
  }

  useEffect(() => () => {
    socket.disconnect();
    socket.close();
  }, []);

  return (
    <div>
      <div>coisa</div>
      <div>{ping}</div>
      <button className="main-button" onClick={handleClick}>
        enviar
      </button>
    </div>
  );
}
