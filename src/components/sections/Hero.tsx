import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-brumes pt-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Brumes.ai
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
          Production de contenus 100% autonome. Laissez l'IA rédiger pour vous
          des contenus parfaitement humains, originaux, optimisés SEO et
          respectant votre ton de marque.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
            Commencer
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10 text-lg"
          >
            Essayer gratuitement
          </Button>
        </div>
      </div>
    </section>
  );
}
