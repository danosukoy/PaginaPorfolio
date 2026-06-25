import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Mail, ExternalLink } from "lucide-react";
import { useState } from "react";

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const visibleSections = useScrollAnimation();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  const links = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:tu@email.com",
      value: "tu@email.com",
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      href: "https://github.com/tuusuario",
      value: "@tuusuario",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      href: "https://linkedin.com/in/tuusuario",
      value: "/in/tuusuario",
    },
    {
      icon: ExternalLink,
      label: "itch.io",
      href: "https://tuusuario.itch.io",
      value: "tuusuario.itch.io",
    },
  ];

  return (
    <section id="contact" className="portfolio-section bg-shared-portfolio min-h-screen3">
      <div className="section-container">
        
        {/* Unified Section Header */}
        <div
          id="contact-header"
          data-animate
          className={`section-header ${
            visibleSections.has("contact-header")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-tag">Contacto</span>
          <h2 className="section-title">¿Hablamos?</h2>
          <p className="section-subtitle">
            Estoy siempre abierto a nuevas oportunidades, colaboraciones en proyectos indie o simplemente charlar sobre software.
          </p>
        </div>

        {/* 2-Column Info Groups: Form vs Links */}
        <div className="contact-section-container">
          
          {/* Group 1: Send a Message Form */}
          <div
            id="contact-form"
            data-animate
            className={`transition-all duration-700 delay-100 ${
              visibleSections.has("contact-form")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="contact-group-title">
              Envía un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="contact-form-card">
              <div>
                <label htmlFor="name" className="contact-field-label">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="contact-field-input"
                />
              </div>
              <div>
                <label htmlFor="email" className="contact-field-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="tu@email.com"
                  className="contact-field-input"
                />
              </div>
              <div>
                <label htmlFor="message" className="contact-field-label">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hola, me gustaría hablar sobre..."
                  className="contact-field-input resize-none"
                />
              </div>
              <button
                type="submit"
                className={`btn-contact-submit ${
                  submitted
                    ? "bg-emerald-500 text-white shadow-[0_4px_20px_rgba(16,185,129,0.3)]"
                    : "bg-gold hover:bg-gold-light text-dark shadow-[0_4px_20px_rgba(229,176,92,0.2)] hover:scale-[1.01] active:scale-[0.99]"
                }`}
              >
                {submitted ? "✓ ¡Enviado con Éxito!" : "Enviar Mensaje"}
              </button>
            </form>
          </div>

          {/* Group 2: Social Media and Channels */}
          <div
            id="contact-links"
            data-animate
            className={`flex flex-col transition-all duration-700 delay-200 ${
              visibleSections.has("contact-links")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="contact-group-title">
              Redes y Canales
            </h3>
            <div className="flex flex-col gap-5">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card"
                  >
                    <div className="social-card-icon-wrapper">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="social-card-label">
                        {link.label}
                      </p>
                      <p className="social-card-value">
                        {link.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
