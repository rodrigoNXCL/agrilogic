import React, { useState } from "react";

export default function Clients() {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const handleChange = e =>
    setCreds({ ...creds, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert("Funcionalidad de acceso a clientes pronto disponible.");
  };

  return (
    <section className="container mx-auto px-6 py-20 max-w-md">
      <h2 className="text-3xl font-bold text-text-primary mb-6">
        Área de Clientes
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          type="email"
          value={creds.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          required
          className="w-full p-3 border rounded border-gray-light"
        />
        <input
          name="password"
          type="password"
          value={creds.password}
          onChange={handleChange}
          placeholder="Contraseña"
          required
          className="w-full p-3 border rounded border-gray-light"
        />
        <button
          type="submit"
          className="w-full bg-accent text-text-primary py-3 rounded font-semibold"
        >
          Iniciar sesión
        </button>
      </form>
    </section>
  );
}
