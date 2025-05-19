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
              src="/capgemini.jpg"
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
              src="/esiea.png"
              alt="Dashboard COVID"
              className="rounded-2xl shadow-md"
            />
          </CardContent>
        </Card>

        <div className="flex gap-4 mb-6">
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
              src="/esiea.png"
              alt="Graphique des prédictions"
              className="rounded-2xl shadow-md"
            />
          </CardContent>
        </Card>

        <p>
            <strong>Results:</strong>
            <ul>
              <li>– RoBERTa outperformed the LLM baseline in both accuracy and latency.</li>
              <li>– Detailed <em>Model Card</em> and performance visualizations were created.</li>
              <li>– Achieved low-latency inference through a deployed API.</li>
              <li>– Implemented bias analysis and interpretability techniques (e.g., SHAP, LIME).</li>
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

        <Card className="mb-4">
          <CardContent className="p-2">
            <img
              src="/esiea.png"
              alt="Graphique des prédictions"
              className="rounded-2xl shadow-md"
            />
          </CardContent>
        </Card>

        
      </MotionDiv>

      {/* Projet 5 */}
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-2">Multi-Agent System — Wumpus World Hunter Agent (2023)</h1>
        <p className="text-muted-foreground mb-4">
        Designed a minimalist multi-agent system (MAS) simulating a Wumpus World (WW) scenario using two intelligent agents:
        <ul>
          <li>- A Gold Hunter Agent</li>
          <li>- A WW Simulator Agent</li>
        </ul>
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className="bg-blue-100 text-blue-800">Declarative logic programming using CLP</Badge>
          <Badge className="bg-blue-100 text-blue-800">Prolog</Badge>
          
        </div>

        <Card className="mb-4">
          <CardContent className="p-2">
            <img
              src="/esiea.png"
              alt="Graphique des prédictions"
              className="rounded-2xl shadow-md"
            />
          </CardContent>
        </Card>

      </MotionDiv>

      {/* Projet 6 */}
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-2">OpenDom'X — IoT Analysis & Control Platform (2023)</h1>
        <p className="text-muted-foreground mb-4">
        <strong>OpenDom'X </strong>is an IoT-focused analysis platform designed to explore <strong>the security, control, and communication</strong> of connected devices. This project combined <strong>hardware, embedded systems, reverse engineering, and mobile development.</strong></p>
        <h1><strong>Objectives :</strong></h1> 
          <p>- Analyze and secure various connected devices (IoT) </p>
          <p>- Explore communication protocols and embedded firmware</p>
          <p>- Develop a mobile application to control and monitor devices remotely</p>
          <br /> 

          <h1><strong>Tools & Technologies :</strong></h1> 

            <p>- Electronics & Embedded Systems</p>

            <p>- Protocol Analysis: WIFI, Bluetooth, Zigbee, </p>

            <p>- Reverse Engineering and Forensics</p>

            <p>- Mobile Development: Cross-platform control app </p>
            <br /> 

            <h1><strong>Key Contributions :</strong></h1>
            <p>- Connected and tested IoT devices using multiple communication standards</p>

            <p>- Performed security audits and reverse engineering on embedded components</p>

            <p>- Designed and implemented a custom mobile app to control smart devices</p>

            <p>- Designed and implemented a custom mobile app to control smart devices</p>
            <br /> 

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className="bg-blue-100 text-blue-800">Embedded systems and firmware interaction</Badge>
          <Badge className="bg-blue-100 text-blue-800">IoT security analysis and reverse engineering</Badge>
          <Badge className="bg-blue-100 text-blue-800">Mobile app development for device control</Badge>
          <Badge className="bg-blue-100 text-blue-800">Protocol debugging and forensic investigation</Badge>
        </div>



        <Card className="mb-4">
          <CardContent className="p-2">
            <img
              src="/esiea.png"
              alt="Graphique des prédictions"
              className="rounded-2xl shadow-md"
            />
          </CardContent>
        </Card>


      </MotionDiv>

      {/* Projet 7 */}
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-2">Ecological Watering Mobile App in Flutter (2022)</h1>
        <p className="text-muted-foreground mb-4">
        Created a mobile application for ecological watering using Flutter.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className="bg-blue-100 text-blue-800">Flutter</Badge>
          
        </div>

        <Card className="mb-4">
          <CardContent className="p-2">
            <img
              src="esiea.png"
              alt="Graphique des prédictions"
              className="rounded-2xl shadow-md"
            />
          </CardContent>
        </Card>


      </MotionDiv>

      {/* Projet 8 */}
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-2">Embedded System Development (2023)</h1>
        <p className="text-muted-foreground mb-4">
        Worked with STM32, relays, ultrasonic sensors, LEDs, temperature and humidity sensors, ESP32, and solenoid valves to create a comprehensive embedded system.
        </p>

        <Card className="mb-4">
          <CardContent className="p-2">
            <img
              src="/esiea.png"
              alt="Graphique des prédictions"
              className="rounded-2xl shadow-md"
            />
          </CardContent>
        </Card>


      </MotionDiv>

      {/* Projet 6 */}
      <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-2">Bullet Hell Game Development in Python (2022)</h1>
        <p className="text-muted-foreground mb-4">
        Developed a bullet hell game using Pygame.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className="bg-blue-100 text-blue-800">Python</Badge>
          <Badge className="bg-blue-100 text-blue-800">C++</Badge>
          
        </div>

        <Card className="mb-4">
          <CardContent className="p-2">
            <img
              src="/esiea.png"
              alt="Graphique des prédictions"
              className="rounded-2xl shadow-md"
            />
          </CardContent>
        </Card>


      </MotionDiv>

      {/* À propos de moi */}
      <MotionDiv
        className="col-span-1 md:col-span-2 mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
        I’m a final-year engineering student passionate about the intersection of mathematics, AI, and complex systems.        </p>

        <div className="flex justify-center gap-4 mb-4">
          <Button asChild  className="">
            <a href="mailto:domo@et.esiea.fr">📧 Me Contacter</a>
          </Button>
          <Button variant="secondary" asChild  className="">
            <a href="/CV_Domo_Adama.pdf" target="_blank">📄 Voir mon CV</a>
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

        
      </MotionDiv>
    </div>
  );
}
