export default function Footer() {
  return (
    <footer className="bg-primary text-white py-5 font-sans">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm">
          © 2025 Atlascore. Todos los derechos reservados.
        </p>
        <nav className="mt-3 flex justify-center space-x-4">
          <a href="/about" className="text-white hover:underline text-sm">
            Sobre Nosotros
          </a>
          <a href="/contact" className="text-white hover:underline text-sm">
            Contacto
          </a>
        </nav>
      </div>
    </footer>
  );
};