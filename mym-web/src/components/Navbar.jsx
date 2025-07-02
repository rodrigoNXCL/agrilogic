// src/components/Navbar.jsx
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const menuItems = [
    { to: "/",          label: "Inicio" },
    { to: "/servicios", label: "Servicios" },
    { to: "/contacto",  label: "Contacto" },
    { to: "/clientes",  label: "Clientes" },
  ];

  return (
    <nav className={`${isHome ? "bg-transparent" : "bg-grayDark"} fixed w-full top-0 left-0 z-50 transition-colors`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo solo en secciones internas */}
        {!isHome && (
          <Link to="/">
            <img
              src="/logobase_mym_sf.png"
              alt="Logo M y M Asesorías"
              className="h-20 w-auto"
            />
          </Link>
        )}

        {/* Menú siempre visible, estilo Clay: mayúsculas, tracking, separación */}
        <div className="flex space-x-10">
          {menuItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `uppercase tracking-wide text-white py-2 transition ${
                  isActive 
                    ? "border-b-2 border-accent font-semibold" 
                    : "hover:border-b-2 hover:border-accent"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
