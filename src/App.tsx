import "./App.css";
import DashboardPage from "./pages/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import { useState } from "react";
import SVGs from "./assets/svg.d";
import ChatPage from "./pages/chat";
function App() {
  const [tabs] = useState([
    {
      name: "Nouveau Chat",
      icon: SVGs.Plus,
      id: 1,
      route: '/'
    },
    {
      name: "Historique Chat",
      icon: SVGs.Timer,
      id: 2,
      route: '/chat'
    },
    {
      name: "Historique Conversations",
      icon: SVGs.Union,
      id: 3,
      route: '/chat'
    },
    {
      name: "Se déconnecter",
      icon: SVGs.Logout,
      id: 4,
      route: '/login'
    },
  ]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage tabs={tabs} />} />
          <Route path="/login" element={<LoginPage title="WIP" />} />
          <Route path="/chat" element={<ChatPage tabs={tabs} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
