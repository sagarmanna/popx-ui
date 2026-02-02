import { useNavigate } from "react-router-dom";

export default function Account() {
  const nav = useNavigate();

  return (
    <div className="screen" style={{ padding: 0 }}>
      <div style={{ padding: "16px 18px", borderBottom: "1px solid #EAEAEA", fontWeight: 800 }}>
        Account Settings
      </div>

      <div style={{ padding: 18 }}>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <img
              src="https://i.pravatar.cc/120?img=47"
              alt="avatar"
              style={{ width: 58, height: 58, borderRadius: "50%" }}
            />
            <div
              style={{
                position: "absolute",
                right: -2,
                bottom: -2,
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "var(--purple)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 12,
                border: "2px solid #fff",
              }}
              title="badge"
            >
              ⌁
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 800 }}>Marry Doe</div>
            <div style={{ color: "#777", fontSize: 12 }}>Marry@Gmail.Com</div>
          </div>
        </div>

        <div className="hr" />

        <p style={{ color: "#6D6D6D", fontSize: 12, lineHeight: 1.5 }}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt
          Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>

        <div style={{ marginTop: 14 }}>
          <button className="btn btnSoft" onClick={() => nav("/")}>
            Back to Welcome
          </button>
        </div>
      </div>
    </div>
  );
}
