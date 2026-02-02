import { Routes, Route, Navigate } from "react-router-dom";
import PhoneFrame from "./components/PhoneFrame";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";

export default function App() {
  return (
    <PhoneFrame>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PhoneFrame>
  );
}
