import React from "react";
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { useUser } from './UserContext';


const Home = () => {
    const { user } = useUser();

    return (
    <div className="background">
        Welcome home, {user.displayName}!
    </div>
  );
};

export default Home;
