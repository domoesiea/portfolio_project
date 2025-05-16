import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Download } from "lucide-react";
import React from "react";

export default function ProjectGallery() {
  return (
    <div className="max-w-5xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-900 bg-blue-50 rounded-2xl shadow-lg">
      {/* Projet 1 */}
      <div>
        <h1 className="text-2xl font-bold mb-2">Prédiction des ventes (2024)</h1>
        <p className="text-muted-foreground mb-4">
          Projet académique réalisé dans le cadre du cours <strong>Machine Learning Appliqué</strong>. L'objectif était de prédire les ventes à partir de données historiques.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className="bg-blue-100 text-blue-800">Python</Badge>
          <Badge className="bg-blue-100 text-blue-800">scikit-learn</Badge>
          <Badge className="bg-blue-100 text-blue-800">Pandas</Badge>
          <Badge className="bg-blue-100 text-blue-800">Jupyter</Badge>
        </div>

        <Card className="mb-4">
          <CardContent className="p-2">
            <img
              src="/sales-graph.png"
              alt="Graphique des prédictions"
              className="rounded-2xl shadow-md"
            />
          </CardContent>
        </Card>

        <div className="flex gap-4 mb-6">
          <Button asChild>
            <a href="#" target="_blank">📊 Voir le Notebook</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="#" target="_blank">🗘️ Lire le Rapport</a>
          </Button>
        </div>

        <p>
          <strong>Résultat :</strong> Précision de 90 % grâce à la validation croisée. Utilisation de la régression linéaire et de la sélection de features.
        </p>
      </div>

      {/* Projet 2 */}
      <div>
        <h1 className="text-2xl font-bold mb-2">Analyse des données COVID-19 (2023)</h1>
        <p className="text-muted-foreground mb-4">
          Projet réalisé pour le cours <strong>Data Visualisation</strong>, avec création de dashboards interactifs sur l'évolution de la pandémie.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className="bg-blue-100 text-blue-800">Python</Badge>
          <Badge className="bg-blue-100 text-blue-800">Plotly</Badge>
          <Badge className="bg-blue-100 text-blue-800">Pandas</Badge>
          <Badge className="bg-blue-100 text-blue-800">Jupyter</Badge>
        </div>

        <Card className="mb-4">
          <CardContent className="p-2">
            <img
              src="/covid-dashboard.png"
              alt="Dashboard COVID"
              className="rounded-2xl shadow-md"
            />
          </CardContent>
        </Card>

        <div className="flex gap-4 mb-6">
          <Button asChild>
            <a href="#" target="_blank">📊 Voir le Notebook</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="#" target="_blank">🗘️ Lire le Rapport</a>
          </Button>
        </div>

        <p>
          <strong>Résultat :</strong> Création de visualisations interactives avec filtrage par pays et période. Présenté lors d'une soutenance finale.
        </p>
      </div>

      {/* À propos de moi */}
      <div className="col-span-1 md:col-span-2 mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
          Étudiant passionné par la data science, l'analyse de données et le machine learning. J'aime résoudre des problèmes concrets avec les données et créer des visualisations qui rendent les résultats accessibles à tous. Actuellement à la recherche d'un stage pour approfondir mes compétences en entreprise.
        </p>

        <div className="flex justify-center gap-4 mb-4">
          <Button asChild>
            <a href="mailto:mon.email@example.com">📧 Me Contacter</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="/mon-cv.pdf" target="_blank">📄 Voir mon CV</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/mon-portfolio.pdf" target="_blank">
              <Download className="mr-2" /> Télécharger le Portfolio (PDF)
            </a>
          </Button>
        </div>

        {/* Liens réseaux */}
        <div className="flex justify-center gap-8 mt-4">
          <a
            href="https://github.com/mon-github"
            target="_blank"
            className="flex flex-col items-center text-muted-foreground hover:text-black"
          >
            <Github size={40} />
            <span className="mt-1">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mon-linkedin"
            target="_blank"
            className="flex flex-col items-center text-muted-foreground hover:text-blue-700"
          >
            <Linkedin size={40} />
            <span className="mt-1">LinkedIn</span>
          </a>
        </div>

        {/* Compétences */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Compétences</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Badge className="bg-green-100 text-green-800">Python</Badge>
          <Badge className="bg-green-100 text-green-800">Pandas</Badge>
          <Badge className="bg-green-100 text-green-800">scikit-learn</Badge>
          <Badge className="bg-green-100 text-green-800">SQL</Badge>
          <Badge className="bg-green-100 text-green-800">Data Visualisation</Badge>
          <Badge className="bg-green-100 text-green-800">Machine Learning</Badge>
          <Badge className="bg-green-100 text-green-800">Git</Badge>
          <Badge className="bg-green-100 text-green-800">Jupyter</Badge>
        </div>
      </div>
    </div>
  );
}
