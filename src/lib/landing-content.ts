import { Globe, BrainCircuit, ShieldAlert, Layers } from 'lucide-react';
import React from 'react';

export const heroContent = {
  headline: "ROK DCRC",
  subheadline: "Drone Control and Reporting Center",
  tagline: "Defining the Future of Autonomous Airspace Dominance",
  stats: [
    "Real-time Control of 50+ Drones",
    "6-Second Real-Time Data Processing",
    "24/7 Continuous Uninterrupted Operations",
    "Unified Surveillance of the Korean Peninsula"
  ],
  buttons: {
    primary: "Explore the System",
    secondary: "Download Technical Data"
  }
};

export const featuresContent = {
  title: "Core Capabilities",
  features: [
    {
      icon: React.createElement(Globe, { size: 32 }),
      title: "Integrated Control",
      description: "Track and manage all drone assets across 9 grid sectors from a single, unified interface in real-time."
    },
    {
      icon: React.createElement(BrainCircuit, { size: 32 }),
      title: "AI-Powered Analysis",
      description: "Detect anomalies and predict potential threats with machine learning algorithms before they escalate."
    },
    {
      icon: React.createElement(ShieldAlert, { size: 32 }),
      title: "Automated Defense",
      description: "Activate automated countermeasures and defense systems based on pre-defined rules of engagement."
    },
    {
      icon: React.createElement(Layers, { size: 32 }),
      title: "Multi-Layered Data Fusion",
      description: "Achieve complete situational awareness by fusing data from satellites, radar, and field reports."
    }
  ]
};

export const showcaseContent = {
  title: "Interactive Demonstrations",
  samples: [
      { id: 'rokaf-mcrc-advanced-v2', route: '/samples/rokaf-mcrc-advanced-v2', title: 'MCRC Advanced V2', description: 'Master Control & Reporting Center' },
      { id: 'rokaf-sector-ke14-operations', route: '/samples/rokaf-sector-ke14-operations', title: 'Sector KE-14 Ops', description: 'Detailed Sector Operations' },
      { id: 'rokaf-radar-controller-workstation', route: '/samples/rokaf-radar-controller-workstation', title: 'Radar Controller WS', description: 'Radar Control Workstation' },
      { id: 'rokaf-data-analyst-workstation', route: '/samples/rokaf-data-analyst-workstation', title: 'Data Analyst WS', description: 'Data Analysis & Intel' },
      { id: 'rokaf-flight-controller-workstation', route: '/samples/rokaf-flight-controller-workstation', title: 'Flight Controller WS', description: 'Aircraft Vectoring Control' },
      { id: 'comm-coordinator-workstation', route: '/samples/comm-coordinator-workstation', title: 'Comm Coordinator WS', description: 'Communications Management' },
  ]
};
