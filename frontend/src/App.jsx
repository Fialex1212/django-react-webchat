import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Logout from "./components/Logout/Logout";
import ProtectedRouter from "./components/ProtectRouter/ProtectRouter";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import RoomSelector from "./components/RoomSelector/RoomSelector";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/(home|)" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/logout"
          element={
            <ProtectedRouter>
              <Logout />
            </ProtectedRouter>
          }
        />
        <Route path="/chats" element={<RoomSelector />} />
        <Route path="/chat/:roomName" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
};

export default App;
