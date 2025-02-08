import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "../components/UserTable";  
import "../styles/home.css";  

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")  
      .then((response) => {
        console.log("✅ API Response:", response.data); 
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      <h1 className="page-title">User Credit Reports</h1>
      
      {loading ? (
        <div className="loader">Loading Users...</div>  
      ) : (
        <UserTable users={users} />  
      )}
    </div>
  );
};

export default Home;
