// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const menuItems = [
    { to: "/",          label: "Inicio" },
    { to: "/servicios", label: "Servicios" },
    { to: "/contacto",  label: "Contacto" },
    { to: "/clientes",  label: "Clientes" },
  ];

  // Siempre fondo gris oscuro para visibilidad
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-grayDark shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo solo en interior */}
        {pathname !== "/" && (
          <Link to="/">
            <img
              src="/logobase_mym_sf.png"
              alt="Logo M y M Asesorías"
              className="h-16 w-auto"
            />
          </Link>
        )}

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `uppercase tracking-wide text-white transition ${
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

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-grayDark">
          {menuItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-3 text-white transition ${
                  isActive
                    ? "bg-grayDark/80 font-semibold"
                    : "hover:bg-grayDark/60"
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
