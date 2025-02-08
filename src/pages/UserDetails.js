import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import "../styles/userDetails.css";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ User Data Fetched:", data);
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching user details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Loading user details...</p>;
  if (!user) return <p className="error">User not found.</p>;

  const creditSummary = user.credit_summary || {};

  const accountData = {
    labels: ["Total Accounts", "Active Accounts", "Closed Accounts"],
    datasets: [
      {
        label: "Credit Account Overview",
        data: [
          creditSummary.total_accounts || 0,
          creditSummary.active_accounts || 0,
          creditSummary.closed_accounts || 0,
        ],
        backgroundColor: ["#4CAF50", "#FF9800", "#F44336"],
      },
    ],
  };

  const creditData = {
    labels: ["Secured Amount", "Unsecured Amount"],
    datasets: [
      {
        data: [creditSummary.secured_amount || 0, creditSummary.unsecured_amount || 0],
        backgroundColor: ["#2196F3", "#FFC107"],
      },
    ],
  };

  return (
    <div className="user-details-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Users
      </button>
      <h2>{user.name}'s Credit Report</h2>

      <div className="details-grid">
        <div className="detail-card">
          <h3>Basic Info</h3>
          <p><strong>Mobile:</strong> {user.mobile}</p>
          <p><strong>PAN:</strong> {user.pan}</p>
          <p><strong>Email:</strong> {user.email || "N/A"}</p>
        </div>

        <div className="detail-card">
          <h3>Credit Summary</h3>
          <p><strong>Total Accounts:</strong> {creditSummary.total_accounts || "N/A"}</p>
          <p><strong>Active Accounts:</strong> {creditSummary.active_accounts || "N/A"}</p>
          <p><strong>Closed Accounts:</strong> {creditSummary.closed_accounts || "N/A"}</p>
          <p><strong>Current Balance:</strong> ${creditSummary.current_balance || "N/A"}</p>
          <p><strong>Secured Amount:</strong> ${creditSummary.secured_amount || "N/A"}</p>
          <p><strong>Unsecured Amount:</strong> ${creditSummary.unsecured_amount || "N/A"}</p>
        </div>
      </div>

      <div className="charts-container">
        <div className="chart-card">
          <h3>Credit Account Overview</h3>
          <Bar data={accountData} />
        </div>

        <div className="chart-card">
          <h3>Secured vs Unsecured Credit</h3>
          <Pie data={creditData} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
