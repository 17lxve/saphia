// import React from 'react'
import "./custom.css";
import ChatBar from "../../components/chatbar";
import MiddleBar from "../../components/middlebar";
import Sidebar from "../../components/sidebar";
import {useState} from 'react'
import SVGs from "../../assets/svg.d.tsx";
function DashboardPage() {
  const [tabs] = useState([
    {
      name: "Nouveau Chat",
      icon: SVGs.Plus,
      id: 1,
    },
    {
      name: "Historique Chat",
      icon: SVGs.Timer,
      id: 2,
    },
    {
      name: "Historique Conversations",
      icon: SVGs.Union,
      id: 3,
    },
    {
      name: "Se déconnecter",
      icon: SVGs.Logout,
      id: 4,
    },
  ]);
  return (
    <>
    <Sidebar tabs={tabs}/>
      <main className="Dashboard">
        <div className="main-box">
          <MiddleBar />
          <ChatBar />
        </div>
      </main>
    </>
  );
}

export default DashboardPage;
