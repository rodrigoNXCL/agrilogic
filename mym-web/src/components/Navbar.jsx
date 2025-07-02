// src/components/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="py-4 px-6 bg-bg shadow-md flex items-center justify-between">
      <Link to="/">
        <img
          src="/logobase_mym_sf.png"
          alt="Logo M y M Asesorías"
          className="h-20 w-auto"
        />
      </Link>
      <div className="space-x-6">
        {[
          { to: "/",    label: "Inicio" },
          { to: "/servicios", label: "Servicios" },
          { to: "/contacto",  label: "Contacto" },
          { to: "/clientes",  label: "Clientes" },
        ].map(({to, label}) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive ? "font-semibold text-text-primary" : "text-grayDark"
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
