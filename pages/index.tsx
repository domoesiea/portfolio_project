"use client";





import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { motion } from "framer-motion";
import React from "react";
import type { ComponentPropsWithoutRef } from "react";
const MotionLink = motion<ComponentPropsWithoutRef<"a">>("a");

const MotionDiv = motion.div as React.ComponentType<React.HTMLAttributes<HTMLDivElement> & any>;
import { Github, Linkedin, Download } from "lucide-react";

export default function ProjectGallery() {
  return (
    <div className="max-w-5xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-900 bg-blue-50 rounded-2xl shadow-lg">
      {/* Projet 1 */}
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-2">Contributed to the development of Medica, an AI-based virtual assistant at Capgemini Engineering. (2024)</h1>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className="bg-blue-100 text-blue-800">Python</Badge>
          <Badge className="bg-blue-100 text-blue-800">scikit-learn</Badge>
          <Badge className="bg-blue-100 text-blue-800">project management</Badge>
          <Badge className="bg-blue-100 text-blue-800">Docker</Badge>
          <Badge className="bg-blue-100 text-blue-800">State of the art</Badge>
        </div>
      </MotionDiv>

      {/* Projet 2 */}
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-2">Deep Learning Regression for Facial Occlusion Prediction</h1>
        <p className="text-muted-foreground mb-4">
        I developed a deep learning model for a regression task aimed at predicting the percentage of facial occlusion in images. This project utilized a dataset of 112x112 color images and implemented advanced techniques to address challenges like dataset imbalance, fairness, and overfitting.
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
          <Button asChild  className=" ">
            <a href="#" target="_blank">
              📊 Voir le Notebook
            </a>
          </Button>
          <Button variant="secondary" asChild  className="">
            <a href="#" target="_blank">
              📝 Lire le Rapport
            </a>
          </Button>
        </div>

        <p>
          <strong>Résultat :</strong> Création de visualisations interactives avec filtrage par pays et période. Présenté lors d'une soutenance finale.
        </p>
      </MotionDiv>

      {/* Projet 3 */}
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-2">Toxicity Detection System Using Natural Language Processing (NLP)</h1>
        <p className="text-muted-foreground mb-4">
        I developed a comprehensive machine learning system for toxicity detection in text. This project integrates advanced technical components, such as data preprocessing and model fine-tuning, with ethical and operational considerations like bias, fairness, and scalability.
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
          <Button asChild className="px-4 py-2">
            <a href="#" target="_blank">
              📊 Voir le Notebook
            </a>
          </Button>
          <Button variant="secondary" asChild className="">
            <a href="#" target="_blank">
              📝 Lire le Rapport
            </a>
          </Button>
        </div>

        <p>
          <strong>Résultat :</strong> Précision de 90 % grâce à la validation croisée. Utilisation de la régression linéaire et de la sélection de features.
        </p>
      </MotionDiv>

      {/* Projet 4 */}
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-2">Setting up a complete CI/CD pipeline with Kubernetes, GitLab, and Argo Workflows</h1>
        <p className="text-muted-foreground mb-4">
        I conducted a state-of-the-art review of LLMs (Pegasus, LLaMA 3.1 8B). <strong>Machine Learning Appliqué</strong>. L'objectif était de prédire les ventes à partir de données historiques.
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
          <Button asChild className="px-4 py-2">
            <a href="#" target="_blank">
              📊 Voir le Notebook
            </a>
          </Button>
          <Button variant="secondary" asChild className="">
            <a href="#" target="_blank">
              📝 Lire le Rapport
            </a>
          </Button>
        </div>

        <p>
          <strong>Résultat :</strong> Précision de 90 % grâce à la validation croisée. Utilisation de la régression linéaire et de la sélection de features.
        </p>
      </MotionDiv>

      {/* Projet 5 */}
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-2">Minimalist MAS: Two Intelligent Agents in Mirror Image</h1>
        <p className="text-muted-foreground mb-4">
        I conducted a state-of-the-art review of LLMs (Pegasus, LLaMA 3.1 8B). <strong>Machine Learning Appliqué</strong>. L'objectif était de prédire les ventes à partir de données historiques.
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
          <Button asChild className="px-4 py-2">
            <a href="#" target="_blank">
              📊 Voir le Notebook
            </a>
          </Button>
          <Button variant="secondary" asChild className="">
            <a href="#" target="_blank">
              📝 Lire le Rapport
            </a>
          </Button>
        </div>

        <p>
          <strong>Résultat :</strong> Précision de 90 % grâce à la validation croisée. Utilisation de la régression linéaire et de la sélection de features.
        </p>
      </MotionDiv>

      {/* Projet 6 */}
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-2">OpenDom'X IoT Analysis Platform</h1>
        <p className="text-muted-foreground mb-4">
        Focused on Electronics, Programming, Embedded Systems, Forensics, System and Network, Reverse Engineering, IoT, and Git.

        Connected devices using different communication protocols, studied the security of these devices, and developed a mobile application to control them.
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
          <Button asChild className="px-4 py-2">
            <a href="#" target="_blank">
              📊 Voir le Notebook
            </a>
          </Button>
          <Button variant="secondary" asChild className="">
            <a href="#" target="_blank">
              📝 Lire le Rapport
            </a>
          </Button>
        </div>

        <p>
          <strong>Résultat :</strong> Précision de 90 % grâce à la validation croisée. Utilisation de la régression linéaire et de la sélection de features.
        </p>
      </MotionDiv>

      {/* Projet 7 */}
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-2">Ecological Watering Mobile App in Flutter</h1>
        <p className="text-muted-foreground mb-4">
        Created a mobile application for ecological watering using Flutter, showcasing cross-platform development skills.
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
          <Button asChild className="px-4 py-2">
            <a href="#" target="_blank">
              📊 Voir le Notebook
            </a>
          </Button>
          <Button variant="secondary" asChild className="">
            <a href="#" target="_blank">
              📝 Lire le Rapport
            </a>
          </Button>
        </div>

        <p>
          <strong>Résultat :</strong> Précision de 90 % grâce à la validation croisée. Utilisation de la régression linéaire et de la sélection de features.
        </p>
      </MotionDiv>

      {/* Projet 8 */}
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-2">Embedded System Development</h1>
        <p className="text-muted-foreground mb-4">
        Worked with STM32, relays, ultrasonic sensors, LEDs, temperature and humidity sensors, ESP32, and solenoid valves to create a comprehensive embedded system.
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
          <Button asChild className="px-4 py-2">
            <a href="#" target="_blank">
              📊 Voir le Notebook
            </a>
          </Button>
          <Button variant="secondary" asChild className="">
            <a href="#" target="_blank">
              📝 Lire le Rapport
            </a>
          </Button>
        </div>

        <p>
          <strong>Résultat :</strong> Précision de 90 % grâce à la validation croisée. Utilisation de la régression linéaire et de la sélection de features.
        </p>
      </MotionDiv>

      {/* Projet 6 */}
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-2">Bullet Hell Game Development in Python</h1>
        <p className="text-muted-foreground mb-4">
        Developed a bullet hell game using Python, demonstrating advanced programming skills and game design principles. (2022)
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
          <Button asChild className="px-4 py-2">
            <a href="#" target="_blank">
              📊 Voir le Notebook
            </a>
          </Button>
          <Button variant="secondary" asChild className="">
            <a href="#" target="_blank">
              📝 Lire le Rapport
            </a>
          </Button>
        </div>

        <p>
          <strong>Résultat :</strong> Précision de 90 % grâce à la validation croisée. Utilisation de la régression linéaire et de la sélection de features.
        </p>
      </MotionDiv>

      {/* À propos de moi */}
      <MotionDiv
        className="col-span-1 md:col-span-2 mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
          Étudiant passionné par la data science, l'analyse de données et le machine learning. J'aime résoudre des problèmes concrets avec les données et créer des visualisations qui rendent les résultats accessibles à tous. Actuellement à la recherche d'un stage pour approfondir mes compétences en entreprise.
        </p>

        <div className="flex justify-center gap-4 mb-4">
          <Button asChild  className="">
            <a href="mailto:mon.email@example.com">📧 Me Contacter</a>
          </Button>
          <Button variant="secondary" asChild  className="">
            <a href="/mon-cv.pdf" target="_blank">📄 Voir mon CV</a>
          </Button>
          <Button variant="outline" asChild  className="">
            <a href="/mon-portfolio.pdf" target="_blank">
              <Download className="mr-2" /> Télécharger le Portfolio (PDF)
            </a>
          </Button>
        </div>

        {/* Liens réseaux */}
        <div className="flex justify-center gap-8 mt-4">
        
          <MotionLink
          href="https://github.com/mon-github"
          target="_blank"
          className="flex flex-col items-center text-muted-foreground hover:text-black"
          whileHover={{ scale: 1.2 }}
          >
          <Github size={40} />
          <span className="mt-1">GitHub</span>
          </MotionLink>
          <MotionLink
            href="https://www.linkedin.com/in/mon-linkedin"
            target="_blank"
            className="flex flex-col items-center text-muted-foreground hover:text-blue-700"
            whileHover={{ scale: 1.2 }}
            >
            <Linkedin size={40} />
                    <span className="mt-1">LinkedIn</span>
          </MotionLink>
        </div>

        {/* Compétences */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Compétences</h2>
        

        <MotionDiv
        className="flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Badge className="bg-green-100 text-green-800">Python</Badge>
          <Badge className="bg-green-100 text-green-800">Pandas</Badge>
          <Badge className="bg-green-100 text-green-800">scikit-learn</Badge>
          <Badge className="bg-green-100 text-green-800">SQL</Badge>
          <Badge className="bg-green-100 text-green-800">Data Visualisation</Badge>
          <Badge className="bg-green-100 text-green-800">Machine Learning</Badge>
          <Badge className="bg-green-100 text-green-800">Git</Badge>
          <Badge className="bg-green-100 text-green-800">Jupyter</Badge>
        </MotionDiv>
      </MotionDiv>
    </div>
  );
}
