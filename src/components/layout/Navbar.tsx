import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Brumes.ai
        </div>
        <div className="flex gap-4">
          <Button variant="ghost">Fonctionnalités</Button>
          <Button variant="ghost">Tarifs</Button>
          <Button>Commencer gratuitement</Button>
        </div>
      </div>
    </nav>
  );
}
