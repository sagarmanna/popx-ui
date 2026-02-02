import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const nav = useNavigate();

  return (
    <div className="screen">
      <div className="dots">
        <div className="dot d6">6</div>
        <div className="dot d1">1</div>
        <div className="dot d2">2</div>
        <div className="dot d3">3</div>
        <div className="dot d4">4</div>
        <div className="dot d5">5</div>
      </div>

      <div style={{ position: "absolute", left: 22, right: 22, bottom: 120 }}>
        <div className="h1" style={{ fontSize: 22 }}>Welcome to PopX</div>
        <p className="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        </p>
      </div>

      <div className="bottomStack">
        <button className="btn btnPrimary" onClick={() => nav("/register")}>
          Create Account
        </button>
        <button className="btn btnSoft" onClick={() => nav("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
