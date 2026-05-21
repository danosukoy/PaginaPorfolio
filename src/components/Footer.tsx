import { Gamepad2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-dark-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-text-muted">
          <Gamepad2 size={16} className="text-gold" />
          <span className="text-sm">
            © {new Date().getFullYear()} Daniel Dongo. Todos los derechos
            reservados.
          </span>
        </div>
        <p className="text-text-muted text-sm">
          Hecho con <span className="text-gold">♥</span> y mucho café
        </p>
      </div>
    </footer>
  );
}
