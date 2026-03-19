import React, { useState } from "react";

type Review = {
  name: string;
  message: string;
  rating: number;
};

const ReviewSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !message || rating === 0) return;

    const newReview: Review = { name, message, rating };
    setReviews([newReview, ...reviews]);

    setName("");
    setMessage("");
    setRating(0);
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>What Our Users Say 💬</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        {/* ⭐ Rating */}
        <div style={styles.stars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{
                ...styles.star,
                color: rating >= star ? "#FFD700" : "#ccc",
              }}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          placeholder="Write your experience..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Submit Review
        </button>
      </form>

      {/* Reviews */}
      <div style={styles.grid}>
        {reviews.map((r, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.cardHeader}>
              <h4>{r.name}</h4>
              <div>
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </div>
            </div>
            <p style={styles.message}>{r.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: "60px 20px",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
    marginTop: "60px",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "30px",
  },
  form: {
    maxWidth: "500px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    background: "rgba(255,255,255,0.05)",
    padding: "20px",
    borderRadius: "12px",
    backdropFilter: "blur(10px)",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    minHeight: "100px",
  },
  stars: {
    display: "flex",
    justifyContent: "center",
    fontSize: "24px",
    cursor: "pointer",
  },
  star: {
    margin: "0 5px",
  },
  button: {
    padding: "12px",
    background: "#6366f1",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  grid: {
    marginTop: "40px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "rgba(255,255,255,0.08)",
    padding: "20px",
    borderRadius: "12px",
    backdropFilter: "blur(10px)",
    transition: "0.3s",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  message: {
    opacity: 0.9,
  },
};

export default ReviewSection;