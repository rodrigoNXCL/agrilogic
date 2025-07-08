import React from "react";

export default function About() {
  return (
    <section className="pt-28 pb-20 bg-background">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl font-bold text-textPrimary mb-6">
          Quiénes Somos
        </h2>
        <p className="text-textSecondary mb-4">
          En <strong>M y M Asesorías</strong> somos un equipo de profesionales contables con más de 10 años de experiencia
          apoyando a pequeñas y medianas empresas en Chile. Nuestra misión es brindar soluciones adaptadas a cada
          cliente, combinando conocimientos técnicos, tecnología de punta y un servicio cercano y personalizado.
        </p>
        <p className="text-textSecondary">
          Trabajamos con pasión y compromiso para que tú puedas centrarte en hacer crecer tu negocio, mientras nosotros
          nos encargamos de que tus números estén siempre al día y en regla. Conoce a nuestro equipo y descubre por qué
          somos el aliado estratégico que tu empresa necesita.
        </p>
      </div>
    </section>
);
}
