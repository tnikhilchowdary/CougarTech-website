import React from "react";

export const Contact = () => {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh", 
      padding: "2rem",
      textAlign: "center"
    }}>
      <h2>Contact Us</h2>

      <div style={{ marginBottom: "1.5rem" }}>
        <p><strong>Email:</strong> support@cougarshop.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
      </div>

      <form 
        style={{ 
          display: "flex", 
          flexDirection: "column", 
          width: "100%", 
          maxWidth: "400px" 
        }}
      >
        <label>Name:</label>
        <input 
          type="text" 
          placeholder="Your Name" 
          style={{ marginBottom: "1rem", padding: "0.5rem", textAlign: "center" }} 
        />

        <label>Email:</label>
        <input 
          type="email" 
          placeholder="Your Email" 
          style={{ marginBottom: "1rem", padding: "0.5rem", textAlign: "center" }} 
        />

        <label>Message:</label>
        <textarea 
          placeholder="Your Message" 
          rows="4" 
          style={{ marginBottom: "1rem", padding: "0.5rem", textAlign: "center" }} 
        />

        <button 
          type="submit" 
          style={{ 
            padding: "0.5rem", 
            backgroundColor: "#333", 
            color: "white", 
            border: "none", 
            cursor: "pointer" 
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
