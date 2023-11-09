import './App.css'
import Sidebar from './components/sidebar'
import { useState } from 'react'
import LoginPage from './pages/login'
import DashboardPage from './pages/dashboard'
import SVGs from './assets/svg'

<svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 0.754395C2.57436 0.754395 0 3.32876 0 6.50439V16.5044C0 19.68 2.57436 22.2544 5.75 22.2544H15.75C18.9256 22.2544 21.5 19.68 21.5 16.5044V6.50439C21.5 3.32876 18.9256 0.754395 15.75 0.754395H5.75ZM14.5 11.5044C14.5 11.9186 14.1642 12.2544 13.75 12.2544H11.5V14.5044C11.5 14.9186 11.1642 15.2544 10.75 15.2544C10.3358 15.2544 10 14.9186 10 14.5044V12.2544H7.75C7.33579 12.2544 7 11.9186 7 11.5044C7 11.0902 7.33579 10.7544 7.75 10.7544H10V8.50439C10 8.09018 10.3358 7.75439 10.75 7.75439C11.1642 7.75439 11.5 8.09018 11.5 8.50439V10.7544H13.75C14.1642 10.7544 14.5 11.0902 14.5 11.5044Z" fill="#E8770F"/>
</svg>


function App() {
  const [tabs, setTabs] = useState([
    {
      name : "Nouveau Chat",
      icon : SVGs.Plus,
      id : 1
    },
    {
      name : "Historique Chat",
      icon : SVGs.Timer,
      id : 2
    },
    {
      name: "Historique Conversations",
      icon : SVGs.Union,
      id : 3
    },
    {
        name: "Se déconnecter",
      icon : SVGs.Logout,
      id : 4
    }
])


  return (
    <>
          <Sidebar tabs={tabs}/>
      {/* <LoginPage title="page de connexion"/> */}
      <DashboardPage />
    </>
  )
}

export default App
