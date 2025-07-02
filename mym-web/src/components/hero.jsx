// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section className="bg-nxGrayLight dark:bg-gray-800">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-nxGrayDark dark:text-white mb-4">
          Bienvenido a <span className="text-pastelPink">M y M Asesorías</span>
        </h1>
        <p className="text-lg text-nxGray dark:text-gray-400 mb-8">
          Soluciones Contables para tu empresa.
        </p>
        <a
          href="#contact"
          className="inline-block bg-pastelBlue hover:bg-opacity-90 text-nxBlack font-semibold py-3 px-8 rounded-2xl shadow transition"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
}
