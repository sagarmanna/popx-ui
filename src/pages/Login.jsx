import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const canLogin = email.trim() && pass.trim();

  return (
    <div className="screen">
      <div className="h1" style={{ fontSize: 22 }}>Signin to your PopX account</div>
      <p className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

      <div className="field">
        <label className="label">Email Address</label>
        <input
          className="input"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="field">
        <label className="label">Password</label>
        <input
          className="input"
          placeholder="Enter password"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>

      <button
        className={`btn ${canLogin ? "btnPrimary" : "btnDisabled"}`}
        disabled={!canLogin}
        onClick={() => nav("/account")}
        style={{ marginTop: 10 }}
      >
        Login
      </button>
    </div>
  );
}
