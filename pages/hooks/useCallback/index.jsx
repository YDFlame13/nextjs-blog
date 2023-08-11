import { useState, useEffect, useCallback } from 'react';

import Layout from "../../../components/Layout";

function createConnection({serverUrl, roomId}) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    }
  };
}

function ChatRoom({ roomId }) { // roomId is reactive
  const [serverUrl, setServerUrl] = useState('https://localhost:1234'); // serverUrl is reactive
  const [count, setCount] = useState(1);
  
  const createOptions = useCallback(() => ({
    serverUrl,
    roomId
  }),[serverUrl,roomId])
  // const createOptions = () => ({
  //   serverUrl,
  //   roomId
  // })
  
  useEffect(() => {
    const options = createOptions()
    const connection = createConnection(options);
    // const connection = createConnection({serverUrl,roomId});
    connection.connect();
    return () => connection.disconnect();
  }, [createOptions]); // <-- Something's wrong here!

  return (
    <>
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} {serverUrl} room!</h1>
      <button onClickCapture={()=>setCount(count+1)}>count:{count}</button>
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}