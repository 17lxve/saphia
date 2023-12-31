// import React from 'react'
import "./custom.css";
import ChatBar from "../../components/chatbar";
import MiddleBar from "../../components/middlebar";
import Sidebar from "../../components/sidebar";
import { useRedirect } from "../../hooks";
type Props = {
  tabs: { name: string; icon: JSX.Element; id: number; route: string }[];
};
function DashboardPage({ tabs }: Props) {
  useRedirect()
  return (
    <>
      <Sidebar tabs={tabs} />
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
