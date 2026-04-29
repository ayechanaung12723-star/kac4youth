"use client";

import { useParams } from "next/navigation";

export default function VerifyPage() {
  const params = useParams();
  const id = params.id;

  if (!id) return <p>Loading...</p>;

  const pdfUrl = `/certificates/${id}.pdf`;

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "My Certificate",
        text: "I completed a course at KAC For Youth 🎓",
        url: window.location.href,
      });
    } else {
      alert("Copy link and share!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>🎓 Verified Certificate</h2>

      <iframe
        src={pdfUrl}
        width="100%"
        height="600px"
        style={{ border: "none" }}
      />

      <br /><br />

      <a href={pdfUrl} download>
        <button style={{ padding: "10px 20px", marginRight: "10px" }}>
          📥 Download Certificate
        </button>
      </a>

      <button onClick={handleShare} style={{ padding: "10px 20px" }}>
        📢 Share
      </button>
    </div>
  );
}