import "./App.css";
import DashboardPage from "./pages/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";

function App() {
  //Sidebar Elements
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage/>}/>
        <Route path="/login" element={<LoginPage title="WIP"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
