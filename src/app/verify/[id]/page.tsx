"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function VerifyPage() {
  const params = useParams();
  const rawId = params?.id as string;
  const id = rawId?.replace(".pdf", "");

  const pdfUrl = `/certificates/${id}.pdf`;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "KAC Certificate 🎓",
          text: "I completed a course at KAC For Youth 🚀",
          url: window.location.href,
        });
      } else {
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
          "_blank"
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={styles.container}>
      {/* TITLE */}
      <h2 style={styles.title}>🎓 Verified Certificate</h2>

      {/* PDF VIEW */}
      <div style={styles.viewer}>
        <iframe src={pdfUrl} style={styles.iframe} />
      </div>

      {/* ACTION BAR (FIXED BOTTOM) */}
      <div style={styles.actionBar}>
        <a href={pdfUrl} download style={{ flex: 1 }}>
          <button style={{ ...styles.button, background: "#1e90ff" }}>
            📥 Download
          </button>
        </a>

        <button
          onClick={handleShare}
          style={{ ...styles.button, background: "#22c55e", flex: 1 }}
        >
          📢 Share
        </button>

        <Link href="/" style={{ flex: 1 }}>
          <button style={{ ...styles.button, background: "#111" }}>
            🏠 Home
          </button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "10px",
    paddingBottom: "80px", // space for bottom bar
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center" as const,
  },

  title: {
    fontSize: "18px",
    marginBottom: "10px",
  },

  viewer: {
    width: "100%",
    height: "75vh",
    borderRadius: "10px",
    overflow: "hidden" as const,
    border: "1px solid #ddd",
  },

  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
  },

  actionBar: {
    position: "fixed" as const,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    gap: "6px",
    padding: "10px",
    background: "#fff",
    borderTop: "1px solid #ddd",
    zIndex: 1000,
  },

  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    color: "#fff",
    fontWeight: 600,
    fontSize: "14px",
    cursor: "pointer",
  },
};