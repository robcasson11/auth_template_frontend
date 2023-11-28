import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section className="page_content">
      <p>You are not authorized to see this page</p>
      <button onClick={goBack}>Home</button>
    </section>
  );
};

export default Unauthorized;
