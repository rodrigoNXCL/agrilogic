// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-headerFooterBg text-textSecondary py-12 border-t border-borderLight">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1 */}
        <div className="text-center md:text-left">
          <h3 className="uppercase tracking-wider text-sm font-semibold mb-4">
            M y M Asesorías
          </h3>
          <p>Calle Falsa 123, Ñuble, Chile</p>
          <p>Tel: +56 9 1234 5678</p>
          <p>Email: contacto@mymasistores.cl</p>
        </div>
        {/* Columna 2 */}
        <div className="text-center md:text-left">
          <h3 className="uppercase tracking-wider text-sm font-semibold mb-4">
            Horario
          </h3>
          <p>Lun – Vie: 9:00 – 18:00</p>
          <p>Sáb: 10:00 – 14:00</p>
        </div>
        {/* Columna 3 */}
        <div className="text-center md:text-left">
          <h3 className="uppercase tracking-wider text-sm font-semibold mb-4">
            Síguenos
          </h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-accent">LinkedIn</a>
            <a href="#" className="hover:text-accent">Facebook</a>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-textSecondary">
        © {new Date().getFullYear()} M y M Asesorías. Todos los derechos reservados.
      </p>
    </footer>
  );
}
