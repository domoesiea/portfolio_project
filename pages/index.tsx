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
        <p className="text-muted-foreground mb-4">
        I participated in the state of the art of open source LLMs and helped choose the LLM that will be used to summarize patient consultations.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className="bg-blue-100 text-blue-800">Python</Badge>
          <Badge className="bg-blue-100 text-blue-800">scikit-learn</Badge>
          <Badge className="bg-blue-100 text-blue-800">project management</Badge>
          <Badge className="bg-blue-100 text-blue-800">Docker</Badge>
          <Badge className="bg-blue-100 text-blue-800">State of the art</Badge>
        </div>

        <Card className="mb-4">
          <CardContent className="p-2">
            <img
              src="/image/capgemini.JPG"
              alt="capgemini"
              className="rounded-2xl shadow-md"
            />
          </CardContent>
        </Card>
      </MotionDiv>

      {/* Projet 2 */}
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-2">Deep Learning Regression Project — Facial Occlusion Estimation (2024)</h1>
        <p className="text-muted-foreground mb-4">
        Developed a deep learning model to predict the percentage of facial occlusion from images. This is a supervised regression problem, with a special focus on fairness across gender in predictions.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className="bg-blue-100 text-blue-800"><strong>Deep Learning :</strong> CNN design, transfer learning, custom loss functions</Badge>
          <Badge className="bg-blue-100 text-blue-800"><strong>Computer Vision :</strong> Image preprocessing, augmentation, occlusion detection</Badge>
          <Badge className="bg-blue-100 text-blue-800"><strong>Fair AI :</strong> Gender bias analysis, fairness-aware metrics</Badge>
          <Badge className="bg-blue-100 text-blue-800"><strong>Model Evaluation :</strong> Custom metrics, regression evaluation under constraints</Badge>
          
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
          <strong>Results :</strong> Our final model achieved highly accurate and fair predictions, with a mean weighted error of only 0.002 for both male and female subjects. This symmetry highlights the model's robustness and fairness, especially considering the gender imbalance in the training dataset.
        </p>
      </MotionDiv>

      {/* Projet 3 */}
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-2">Natural Language Processing — Toxicity Detection in Text (2024)</h1>
        <p className="text-muted-foreground mb-4">
        Built a near-production NLP system for<strong>toxic comment classification</strong> , based <strong>on the Google Jigsaw dataset</strong>. This project combined deep learning, model explainability, and API deployment with a strong focus <strong>on fairness, scalability, and resilience.</strong>        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className="bg-blue-100 text-blue-800"> <strong>NLP : </strong>Preprocessing, classification, transformer fine-tuning</Badge>
          <Badge className="bg-blue-100 text-blue-800"><strong>MLOps : </strong> API deployment, latency monitoring, model versioning</Badge>
          <Badge className="bg-blue-100 text-blue-800"><strong>Model Explainability : </strong> SHAP, LIME, visualizations</Badge>
          <Badge className="bg-blue-100 text-blue-800"><strong>Bias & Fairness Auditing : </strong> Impact of language bias in ML</Badge>
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
          <strong>Results:</strong>
          <ul>
            <li>RoBERTa outperformed the LLM baseline in both accuracy and latency.</li>
            <li>Detailed <em>Model Card</em> and performance visualizations were created.</li>
            <li>Achieved low-latency inference through a deployed API.</li>
            <li>Implemented bias analysis and interpretability techniques (e.g., SHAP, LIME).</li>
          </ul>
        </p>

      </MotionDiv>

      {/* Projet 4 */}
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-2">MLOps Pipeline — GitLab CI/CD, Argo Workflows & Kubernetes</h1>
        <p className="text-muted-foreground mb-4">
          Designed and deployed a complete MLOps pipeline to automate the training, deployment, and orchestration of a data science application using GitLab CI/CD, Argo Workflows, and Kubernetes.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className="bg-blue-100 text-blue-800">MLOps best practices and CI/CD integration</Badge>
          <Badge className="bg-blue-100 text-blue-800">Kubernetes orchestration and Argo Workflow design</Badge>
          <Badge className="bg-blue-100 text-blue-800">Docker image creation and registry management</Badge>
          <Badge className="bg-blue-100 text-blue-800">GitLab runner configuration and DevOps automation</Badge>
        </div>

        

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
