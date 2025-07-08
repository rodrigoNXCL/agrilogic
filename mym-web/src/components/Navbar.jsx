// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const menu = [
    { to: "/",          label: "Inicio" },
    { to: "/servicios", label: "Servicios" },
    { to: "/contacto",  label: "Contacto" },
    { to: "/clientes",  label: "Clientes" },
  ];

  return (
    <nav className="fixed w-full top-0 bg-navBg shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo solo en páginas internas */}
        {pathname !== "/" && (
          <Link to="/" className="hidden lg:block">
            <img
              src="/logo-transparent.png"
              alt="Logo M y M Asesorías"
              className="h-20 w-auto"
            />
          </Link>
        )}

        {/* Menú desktop */}
        <div className="hidden md:flex space-x-10 uppercase tracking-wide text-white">
          {menu.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `py-2 transition ${
                  isActive
                    ? "border-b-2 border-accent font-semibold"
                    : "hover:text-accent"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Toggle móvil */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden bg-navBg">
          {menu.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-2 text-white transition ${
                  isActive ? "bg-navBg/80 font-semibold" : "hover:bg-navBg/60"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
