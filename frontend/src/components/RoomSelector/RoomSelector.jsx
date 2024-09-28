import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RoomSelector = () => {
  const [roomName, setRoomName] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    if (roomName.trim) {
      navigate(`/chat/${roomName}`);
    }
  };

  return (
    <div>
      <h2>Join a Chat Room</h2>
      <input
        type="text"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        placeholder="Enter room name"
      />
      <button onClick={handleJoinRoom}>Join Room</button>
    </div>
  );
};

export default RoomSelector;
