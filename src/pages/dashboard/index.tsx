// import React from 'react'
import "./custom.css";
import ChatBar from "../../components/chatbar";
import MiddleBar from "../../components/middlebar";

function DashboardPage() {
  return (
    <>
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
