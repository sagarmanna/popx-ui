import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    fullName: "Marry Doe",
    phone: "Marry Doe",
    email: "Marry Doe",
    password: "Marry Doe",
    company: "Marry Doe",
    agency: "yes",
  });

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="screen">
      <div className="h1" style={{ fontSize: 22 }}>Create your PopX account</div>

      <div className="field">
        <label className="label">Full Name*</label>
        <input className="input" value={form.fullName} onChange={(e) => set("fullName", e.target.value)} />
      </div>

      <div className="field">
        <label className="label">Phone number*</label>
        <input className="input" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
      </div>

      <div className="field">
        <label className="label">Email address*</label>
        <input className="input" value={form.email} onChange={(e) => set("email", e.target.value)} />
      </div>

      <div className="field">
        <label className="label">Password*</label>
        <input className="input" value={form.password} onChange={(e) => set("password", e.target.value)} />
      </div>

      <div className="field">
        <label className="label" style={{ color: "#666" }}>Company name</label>
        <input className="input" value={form.company} onChange={(e) => set("company", e.target.value)} />
      </div>

      <div className="row">
        <div style={{ fontWeight: 700 }}>Are you an Agency?*</div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="agency"
              checked={form.agency === "yes"}
              onChange={() => set("agency", "yes")}
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="agency"
              checked={form.agency === "no"}
              onChange={() => set("agency", "no")}
            />{" "}
            No
          </label>
        </div>
      </div>

      <div className="bottomStack">
        <button className="btn btnPrimary" onClick={() => nav("/account")}>
          Create Account
        </button>
      </div>
    </div>
  );
}
