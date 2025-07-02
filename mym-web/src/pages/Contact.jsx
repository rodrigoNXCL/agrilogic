import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section id="contacto" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-text-primary mb-6">
        Contáctanos
      </h2>
      <ContactForm />
    </section>
  );
}
