// src/components/ContactForm.jsx
import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // TODO: invocar tu API
    alert("¡Mensaje enviado!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 px-6">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nombre"
        required
        className="w-full p-3 border rounded"
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full p-3 border rounded"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Mensaje"
        required
        className="w-full p-3 border rounded"
      />
      <button
        type="submit"
        className="bg-nxOrange hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded"
      >
        Enviar
      </button>
    </form>
  );
}
