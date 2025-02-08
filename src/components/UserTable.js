import React from "react";
import { Link } from "react-router-dom";
import "../styles/table.css";

const UserTable = ({ users }) => {
  console.log("📊 Received Users in UserTable:", users);

  const filteredUsers = users.filter(
    (user) => user.id && user.name !== "N/A" && user.mobile !== "N/A" && user.pan !== "N/A"
  );

  if (!filteredUsers || filteredUsers.length === 0) {
    return <p className="no-data-message">No User Reports Available.</p>;
  }

  return (
    <div className="table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>PAN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr
              key={user.id || index}
              className="fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: 1,
              }}
            >
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.mobile}</td>
              <td>{user.pan}</td>
              <td>
                <Link to={`/user/${user.id}`} className="view-btn">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
