import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { LogoutProvider } from "./context/LogoutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LogoutProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </LogoutProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
