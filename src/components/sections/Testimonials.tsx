export default function Testimonials() {
  const testimonials = [
    {
      name: "Jerôme Brisseau",
      role: "CEO Goodflair",
      quote:
        "Brume est un excellent outil pour générer des contenus de grande qualité...",
    },
    {
      name: "Victor Lerat",
      role: "Co-fondateur KHUMBU",
      quote:
        "Plateforme très intuitive, contenus uniques et ultra personnalisés.",
    },
    {
      name: "Thibaud Lapacherie",
      role: "Responsable SEO Abondance",
      quote: "La qualité des articles est impressionnante pour de l'IA.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Ils profitent d'une IA 100% autonome
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 border border-primary/20 rounded-lg bg-background/50"
            >
              <p className="italic mb-4">"{t.quote}"</p>
              <div className="font-bold">{t.name}</div>
              <div className="text-sm text-gray-400">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
