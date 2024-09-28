// ChatRoom.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChatRoom = () => {
  const { roomName } = useParams();
  console.log('Room Name:', roomName)

  const [ws, setWs] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isWsOpen, setIsWsOpen] = useState(false); // New state to track WebSocket status

  useEffect(() => {
    const websocket = new WebSocket(`ws://localhost:8000/ws/chat/${roomName}/`);

    websocket.onopen = () => {
      console.log('WebSocket connection opened');
      setIsWsOpen(true); // Set WebSocket as open
    };

    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, data.message]);
    };

    websocket.onclose = () => {
      console.log('WebSocket connection closed');
      setIsWsOpen(false); // Set WebSocket as closed
    };

    setWs(websocket);

    return () => {
      websocket.close();
    };
  }, [roomName]);

  const sendMessage = () => {
    if (ws && isWsOpen) { // Check if WebSocket is open before sending
      ws.send(JSON.stringify({ message }));
      setMessage('');
    } else {
      console.error('WebSocket is not open, unable to send message.');
    }
  };

  return (
    <div>
      <h2>Chat Room: {roomName}</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatRoom;
