"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function VerifyPage() {
  const params = useParams();
  const id = params?.id as string;

  const pdfUrl = `/certificates/${id}.pdf`;

  const [downloaded, setDownloaded] = useState(false);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "KAC Certificate 🎓",
          text: "I completed a course at KAC For Youth 🚀",
          url: window.location.href,
        });
      } else {
        alert("Copy link: " + window.location.href);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDownload = () => {
    setDownloaded(true);
  };

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <h2 style={styles.title}>🎓 Verified Certificate</h2>

      {/* PDF VIEW */}
      <div style={styles.pdfBox}>
        <iframe
          src={pdfUrl}
          style={styles.iframe}
        />
      </div>

      {/* BUTTONS */}
      <div style={styles.buttonWrapper}>
        <a href={pdfUrl} download onClick={handleDownload}>
          <button style={{ ...styles.button, background: "#1e90ff" }}>
            📥 Download Certificate
          </button>
        </a>

        {downloaded && (
          <button
            onClick={handleShare}
            style={{ ...styles.button, background: "#22c55e" }}
          >
            📢 Share
          </button>
        )}
      </div>

      {/* HOME BUTTON */}
      <div style={{ marginTop: "20px" }}>
        <Link href="/">
          <button style={{ ...styles.button, background: "#111" }}>
            🏠 Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center" as const,
    padding: "16px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  title: {
    marginBottom: "15px",
    fontSize: "22px",
  },

  pdfBox: {
    width: "100%",
    height: "70vh",
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden" as const,
  },

  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
  },

  buttonWrapper: {
    marginTop: "15px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },

  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    width: "100%",
  },
};