// import React from 'react'
import './custom.css'
import Sidebar from '../../components/sidebar'
import { useState } from 'react'
import ChatBar from '../../components/chatbar'

function DashboardPage() {
  //@ts-ignore
  const [tabs, setTabs] = useState([
    {
      name : "Home",
      id : 1
    },
    {
      name : "Utilisateur",
      id : 2
    },
    {
      name:"Chat",
      id : 3
    }])
    
  return (
    <>
        <main className="Dashboard">
          <Sidebar tabs={tabs}/>
          <div className="main-box">
            <ChatBar />
          </div>
        </main>
    </>
  )
}

export default DashboardPage