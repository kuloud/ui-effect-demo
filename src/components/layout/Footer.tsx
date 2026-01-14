export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-primary/20">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Brumes.ai. Tous droits réservés.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-accent">
            Confidentialité
          </a>
          <a href="#" className="hover:text-accent">
            Conditions
          </a>
          <a href="#" className="hover:text-accent">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
