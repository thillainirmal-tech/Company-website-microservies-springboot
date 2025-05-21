import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      logout();
      navigate("/login");
      return;
    }

    fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/user`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          setUserData(data);
        } else {
          logout();
          navigate("/login");
        }
      })
      .catch(() => {
        logout();
        navigate("/login");
      });
  }, [logout, navigate]);

  if (!userData) return <p>Loading dashboard...</p>;

  return (
    <div className="dashboard-container">
      <h2>Welcome, {userData.email}!</h2>
      <p>Your role: {userData.role}</p>
    </div>
  );
}

export default Dashboard;
