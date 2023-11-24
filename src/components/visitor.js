import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LogoutContext from "../context/LogoutContext";

const Visitor = () => {
  const { logout } = useContext(LogoutContext);
  const navigate = useNavigate();

  return (
    <section className="page_content">
      <h3>You have made it to the visitor page!</h3>
      <button onClick={() => navigate("/dashboard")}>Go Back</button>
      <button onClick={() => navigate("/admin")}>View Admin Page</button>
      <button className="logout_button" onClick={logout}>
        Logout
      </button>
    </section>
  );
};

export default Visitor;
