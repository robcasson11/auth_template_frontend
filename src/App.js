import { Routes, Route } from "react-router-dom";
import "./app.css";
import Layout from "./components/Layout";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Visitor from "./components/visitor";
import Admin from "./components/admin";
import Unauthorized from "./components/unauthorized";
import RequireAuth from "./components/requireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route element={<RequireAuth allowedRoles={[1, 2]} />}>
          <Route path="visitor" element={<Visitor />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[2]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
