// src/components/ContactForm.js
import React, { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccessMsg("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setErrorMsg("");
      } else {
        const err = await res.text();
        setErrorMsg(err);
        setSuccessMsg("");
      }
    } catch (error) {
      setErrorMsg("Network error");
      setSuccessMsg("");
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {successMsg && <p style={{ color: "green" }}>{successMsg}</p>}
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
