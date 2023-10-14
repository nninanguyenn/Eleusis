import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
