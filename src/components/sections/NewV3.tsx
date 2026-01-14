export default function NewV3() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Nouveau : Brume v3</h2>
        <p className="text-xl mb-8 max-w-4xl mx-auto">
          GPT-4.1 + Claude 3.7 Sonnet : le meilleur des deux mondes pour des
          contenus plus humains et percutants.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="p-6 border border-accent rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">GPT-4.1</h3>
            <p>Rédaction du fond, recherche Google, fact-checking</p>
          </div>
          <div className="p-6 border border-accent rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Claude 3.7 Sonnet</h3>
            <p>Humanisation, titres percutants, style expressif</p>
          </div>
        </div>
      </div>
    </section>
  );
}
