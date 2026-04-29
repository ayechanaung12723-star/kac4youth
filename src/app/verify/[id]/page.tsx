"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function VerifyPage() {
  const params = useParams();
  const id = params?.id as string;

  const [loading, setLoading] = useState(true);

  const pdfUrl = id ? `/certificates/${id}.pdf` : "";

  useEffect(() => {
    setLoading(false);
  }, [id]);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "KAC Certificate 🎓",
          text: "I completed a course at KAC For Youth 🚀",
          url: window.location.href,
        });
      } else {
        alert("Copy this link and share: " + window.location.href);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <p>Loading certificate...</p>
      </div>
    );
  }

  if (!id) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>❌ Invalid Certificate Link</h2>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>🎓 Verified Certificate</h2>

      {/* PDF CHECK LINK (DEBUG SAFE) */}
      <p style={{ fontSize: "12px", color: "gray" }}>
        {pdfUrl}
      </p>

      {/* PDF PREVIEW */}
      <iframe
        src={pdfUrl}
        width="100%"
        height="650px"
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
        }}
      />

      <br /><br />

      {/* DOWNLOAD */}
      <a href={pdfUrl} download>
        <button
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            background: "#1e90ff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          📥 Download Certificate
        </button>
      </a>

      {/* SHARE */}
      <button
        onClick={handleShare}
        style={{
          padding: "10px 20px",
          background: "#22c55e",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        📢 Share
      </button>
    </div>
  );
}