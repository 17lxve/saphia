import "./App.css";
import DashboardPage from "./pages/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import { useState } from "react";
import SVGs from "./assets/svg.d";
import ChatPage from "./pages/chat";
import UserPage from "./pages/user";
import NotFound from "./pages/notfound";
function App() {
  const [tabs] = useState([
    {
      name: "Nouveau Chat",
      icon: SVGs.Plus,
      id: 1,
      route: "/",
    },
    {
      name: "Historique Chat",
      icon: SVGs.Timer,
      id: 2,
      route: "/chat",
    },
    {
      name: "Profil",
      icon: SVGs.Union,
      id: 3,
      route: "/profile",
    },
    {
      name: "Se déconnecter",
      icon: SVGs.Logout,
      id: 4,
      route: "/login",
    },
  ]);
  return (
    <>
      <Router basename="/bot">
        <Routes>
          <Route path="/" element={<DashboardPage tabs={tabs} />} />
          <Route path="/login" element={<LoginPage title="WIP" />} />
          <Route path="/chat" element={<ChatPage tabs={tabs} />} />
          <Route path="/profile" element={<UserPage tabs={tabs} />} />
          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
