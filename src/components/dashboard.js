import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <section className="page_content">
      <button onClick={() => navigate("/visitor")}>Go to Visitor Page</button>
      <button onClick={() => navigate("/admin")}>Go to Admin Page</button>
    </section>
  );
};

export default Dashboard;
