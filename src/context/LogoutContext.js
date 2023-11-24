import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";

const LOGOUT_URL = "/logout";

const LogoutContext = createContext({});

export const LogoutProvider = ({ children }) => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const response = await axios.post(LOGOUT_URL);
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
    } catch (err) {
      if (!err?.response) {
        console.log("No Server Response");
      }
    }
    setAuth({});
    navigate("/");
  };

  return (
    <LogoutContext.Provider value={{ logout }}>
      {children}
    </LogoutContext.Provider>
  );
};

export default LogoutContext;
