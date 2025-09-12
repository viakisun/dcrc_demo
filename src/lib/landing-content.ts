import { Globe, BrainCircuit, ShieldAlert, Layers, Users, Clock, Rocket } from 'lucide-react';
import React from 'react';

export const heroContent = {
  headline: "ROKAF MCRC",
  subheadline: "Drone Control and Reporting Center",
  tagline: "Defining the Future of Autonomous Airspace Dominance",
  buttons: {
    primary: "Explore Capabilities",
    secondary: "View Demonstrations"
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

export const aboutContent = {
  title: "The Next-Generation Unified Drone Operations Command & Control System",
  subtitle: "Republic of Korea Drone Control and Reporting Center",
  definition: {
    title: "What is MCRC?",
    text: "The MCRC is a strategic core infrastructure operated by the ROKAF Drone Operations Command. It enables real-time surveillance, control, and coordination of all drone-related operations within the Korean Peninsula and surrounding waters.",
    points: [
      "Strategic drone operations command and control",
      "Real-time situational awareness and analysis",
      "Threat analysis and immediate response",
      "Information fusion and rapid dissemination",
      "Combined operations support and coordination"
    ]
  },
  mission: {
    title: "Mission & Vision",
    missionText: "To defend national security and public safety by achieving complete control of the Korean airspace.",
    visionText: "To set a new global standard in drone security with world-class drone control technology.",
  }
};

export const capabilitiesContent = {
    title: "A New Dimension of Control",
    capabilities: [
        {
            title: "Real-time Tracking",
            description: "Simultaneously control and monitor 50+ drone assets with a 6-second position update cycle and ±5m accuracy. Our system provides real-time path prediction and automated collision avoidance.",
            image: "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            title: "AI-Powered Threat Analysis",
            description: "Utilize a 3-stage automated risk assessment system. Instantly detect unidentified objects, recognize anomalous behavior patterns, and receive early warnings based on predictive models.",
            image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            title: "Instantaneous Response",
            description: "Achieve initial response within 2 minutes. Relay commands in real-time, automatically escalate emergency situations, and coordinate with multiple agencies through a 24/7 command structure.",
            image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    ]
};

export const operationsContent = {
    title: "Command & Control Structure",
    commandStructure: {
        title: "3-Tier Command System",
        icon: React.createElement(Users, {}),
        tiers: [
            { level: "⭐⭐ Strategic", role: "Drone Commander", description: "Oversees entire East-Asian theater." },
            { level: "🎯 Tactical", role: "Sector Commander", description: "Detailed control over 9 grid sectors." },
            { level: "👨‍💻 Operational", role: "Specialized Operators", description: "6 specialized roles for 24/7 operations." }
        ]
    },
    operationsCycle: {
        title: "24/7 Operations Cycle",
        icon: React.createElement(Clock, {}),
        shifts: [
            { name: "Alpha Shift", time: "08:00-16:00", focus: "Primary operations & training.", staff: "18 Full Staff" },
            { name: "Bravo Shift", time: "16:00-24:00", focus: "Evening ops & next-day planning.", staff: "15 Core Staff" },
            { name: "Charlie Shift", time: "24:00-08:00", focus: "Night watch & system maintenance.", staff: "12 Minimal Staff" }
        ]
    }
};

export const innovationContent = {
    title: "Technological Innovation & Future Roadmap",
    roadmap: {
        title: "5-Year Development Roadmap",
        icon: React.createElement(Rocket, {}),
        current: {
            year: "2025 (Current)",
            items: ["Base MCRC System Established", "24/7 Operations in 9 Sectors", "AI-based Threat Analysis", "US-ROKAF System Integration"]
        },
        future: [
            { year: "2026", item: "Advanced AI Predictive System" },
            { year: "2027", item: "Fully Autonomous Control System" },
            { year: "2028", item: "AI Commander's Assistant" },
            { year: "2029", item: "Quantum-based Analysis" }
        ]
    },
    partners: {
        title: "Global Partnership Network",
        icon: React.createElement(Globe, {}),
        partners: [
            { name: "USA", description: "Strategic Alliance" },
            { name: "JAPAN", description: "Regional Security" },
            { name: "AUSTRALIA", description: "Pacific Partner" },
            { name: "UK", description: "Technology Cooperation" },
            { name: "ISRAEL", description: "Advanced Technology" }
        ]
    }
};

export const contactContent = {
    title: "Get in Touch",
    sections: [
        {
            title: "Partnership Inquiries",
            description: "Explore opportunities for technology, business, or international cooperation.",
            email: "partnership@dcrc.mil.kr",
            buttonText: "Propose Partnership"
        },
        {
            title: "Media & Press",
            description: "Access our media kit, press releases, and other official materials.",
            email: "media@dcrc.mil.kr",
            buttonText: "Access Media Kit"
        },
        {
            title: "Technical Inquiries",
            description: "Contact our engineering team for technical questions and support.",
            email: "tech-support@dcrc.mil.kr",
            buttonText: "Submit a Question"
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
