export default function List({ data }) {
  return (
    <div style={{
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      width: "320px",
      overflow: "hidden",
      boxShadow: "0 6px 24px rgba(0, 0, 0, 0.35)",
    }}>
      {data.map((contact, index) => (
        <div
          key={contact.id}
          style={{
            padding: "16px 20px",
            borderBottom: index < data.length - 1
              ? "1px solid #e5e7eb"
              : "none",
          }}
        >
          <div style={{ fontWeight: "600", color: "#111827", marginBottom: "4px" }}>
            Nama : {contact.name}
          </div>
          <div style={{ color: "#374151" }}>
            No Telp : {contact.telp}
          </div>
        </div>
      ))}
    </div>
  );
}
