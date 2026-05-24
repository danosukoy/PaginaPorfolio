import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Sobre mí", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 md:top-6 md:left-8 md:right-8 z-50 transition-all duration-500 max-w-7xl mx-auto rounded-2xl ${
        scrolled
          ? "bg-dark/70 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="w-full px-6 lg:px-10 flex items-center justify-between">
        <a href="#" className="text-gold font-bold text-xl tracking-wider">
          DEV<span className="text-white">.PORTFOLIO</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-text-muted hover:text-gold transition-colors text-sm uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-text hover:text-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-dark-lighter border-b border-dark-border">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-muted hover:text-gold transition-colors text-sm uppercase tracking-widest"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
