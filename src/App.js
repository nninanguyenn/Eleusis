import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Journal from './Journal';
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider style={{ overflowY: 'auto' }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
