import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Agents sur-mesure",
    desc: "Incarnent votre marque avec finesse : personnalité, ton, public cible",
  },
  {
    title: "Structures personnalisées",
    desc: "Produisent exactement les contenus dont vous avez besoin",
  },
  {
    title: "Connecteur Google.fr",
    desc: "Recherches en temps réel pour rester à jour et optimisé SEO",
  },
  {
    title: "Connecteur Notion",
    desc: "Niveau de personnalisation inégalé avec vos propres données",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Plus besoin de discuter avec ChatGPT
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <Card
              key={i}
              className="bg-background/50 border-primary/30 hover:border-accent transition-all"
            >
              <CardHeader>
                <CardTitle className="text-xl">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
