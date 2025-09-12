import { Globe, BrainCircuit, ShieldAlert, Layers, Users, Clock, Rocket } from 'lucide-react';
import React from 'react';

export const heroContent = {
  headline: "ROKAF MCRC",
  subheadline: "Master Control & Reporting Center",
  tagline: "Next-Generation Intelligent Air Defense Command & Control System",
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
      title: "Integrated Air Defense Control",
      description: "Monitor and control all air defense assets across 9 operational sectors from a unified command interface in real-time."
    },
    {
      icon: React.createElement(BrainCircuit, { size: 32 }),
      title: "AI-Powered Threat Analysis",
      description: "Advanced machine learning algorithms detect anomalies, predict threats, and provide early warning capabilities."
    },
    {
      icon: React.createElement(ShieldAlert, { size: 32 }),
      title: "Automated Response Systems",
      description: "Intelligent countermeasures and defense systems activated based on real-time threat assessment and rules of engagement."
    },
    {
      icon: React.createElement(Layers, { size: 32 }),
      title: "Multi-Sensor Data Fusion",
      description: "Comprehensive situational awareness through integration of radar, satellite, and intelligence data sources."
    }
  ]
};

export const aboutContent = {
  title: "The Next-Generation Intelligent Air Defense Command & Control System",
  subtitle: "Republic of Korea Air Force Air Defense Command",
  definition: {
    title: "What is MCRC?",
    text: "The MCRC is a strategic core infrastructure operated by the ROKAF Air Defense Command. It provides real-time surveillance, control, and coordination of all air defense operations within the Korean Peninsula and surrounding airspace.",
    points: [
      "Strategic air defense operations command and control",
      "Real-time situational awareness and threat analysis",
      "Intelligent threat detection and immediate response",
      "Multi-source information fusion and rapid dissemination",
      "Integrated air defense system coordination"
    ]
  },
  mission: {
    title: "Mission & Vision",
    missionText: "To defend national security and airspace sovereignty through advanced intelligent air defense systems.",
    visionText: "To establish a new global standard in air defense technology with world-class intelligent command and control systems.",
  }
};

export const capabilitiesContent = {
    title: "Advanced Air Defense Capabilities",
    capabilities: [
        {
            title: "Real-time Air Defense Tracking",
            description: "Simultaneously monitor and control 100+ air defense assets with 3-second position updates and ±2m accuracy. Advanced radar fusion provides real-time threat assessment and automated response coordination.",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1260&h=750&q=80"
        },
        {
            title: "AI-Powered Threat Analysis",
            description: "Advanced 4-stage intelligent threat assessment system. Instant detection of unidentified aircraft, behavioral pattern analysis, and predictive threat modeling with 99.7% accuracy.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1260&h=750&q=80"
        },
        {
            title: "Rapid Response Systems",
            description: "Achieve initial response within 30 seconds. Real-time command relay, automatic threat escalation, and coordinated multi-agency response through 24/7 intelligent command structure.",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1260&h=750&q=80"
        }
    ]
};

export const operationsContent = {
    title: "Air Defense Command Structure",
    commandStructure: {
        title: "3-Tier Command System",
        icon: React.createElement(Users, {}),
        tiers: [
            { level: "⭐⭐ Strategic", role: "Air Defense Commander", description: "Oversees entire Korean Peninsula air defense operations." },
            { level: "🎯 Tactical", role: "Sector Commander", description: "Detailed control over 9 operational sectors." },
            { level: "👨‍💻 Operational", role: "Specialized Controllers", description: "8 specialized roles for 24/7 air defense operations." }
        ]
    },
    operationsCycle: {
        title: "24/7 Air Defense Operations",
        icon: React.createElement(Clock, {}),
        shifts: [
            { name: "Alpha Shift", time: "08:00-16:00", focus: "Primary operations & training exercises.", staff: "24 Full Staff" },
            { name: "Bravo Shift", time: "16:00-24:00", focus: "Evening operations & threat assessment.", staff: "20 Core Staff" },
            { name: "Charlie Shift", time: "24:00-08:00", focus: "Night watch & system maintenance.", staff: "16 Minimal Staff" }
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
            items: ["Intelligent MCRC System Deployed", "24/7 Air Defense Operations", "AI-powered Threat Analysis", "US-ROKAF System Integration"]
        },
        future: [
            { year: "2026", item: "Advanced AI Predictive Defense System" },
            { year: "2027", item: "Autonomous Air Defense Control" },
            { year: "2028", item: "AI Air Defense Commander Assistant" },
            { year: "2029", item: "Quantum-enhanced Threat Analysis" }
        ]
    },
    partners: {
        title: "Global Partnership Network",
        icon: React.createElement(Globe, {}),
        partners: [
            { name: "USA", description: "Strategic Air Defense Alliance" },
            { name: "JAPAN", description: "Regional Air Defense Cooperation" },
            { name: "AUSTRALIA", description: "Pacific Air Defense Partner" },
            { name: "UK", description: "Advanced Technology Cooperation" },
            { name: "ISRAEL", description: "Air Defense Technology" }
        ]
    }
};

export const contactContent = {
    title: "Get in Touch",
    sections: [
        {
            title: "Partnership Inquiries",
            description: "Explore opportunities for air defense technology, business, or international cooperation.",
            email: "partnership@mcrc.mil.kr",
            buttonText: "Propose Partnership"
        },
        {
            title: "Media & Press",
            description: "Access our media kit, press releases, and other official materials.",
            email: "media@mcrc.mil.kr",
            buttonText: "Access Media Kit"
        },
        {
            title: "Technical Inquiries",
            description: "Contact our engineering team for technical questions and support.",
            email: "tech-support@mcrc.mil.kr",
            buttonText: "Submit a Question"
        }
    ]
};

export const showcaseContent = {
  title: "Interactive Air Defense Demonstrations",
  samples: [
      { id: 'rokaf-mcrc-advanced-v2', route: '/samples/rokaf-mcrc-advanced-v2', title: 'MCRC Advanced V2', description: 'Intelligent Air Defense Command Center' },
      { id: 'rokaf-sector-ke14-operations', route: '/samples/rokaf-sector-ke14-operations', title: 'Sector KE-14 Ops', description: 'Regional Air Defense Operations' },
      { id: 'rokaf-radar-controller-workstation', route: '/samples/rokaf-radar-controller-workstation', title: 'Radar Controller WS', description: 'Advanced Radar Control System' },
      { id: 'rokaf-data-analyst-workstation', route: '/samples/rokaf-data-analyst-workstation', title: 'Data Analyst WS', description: 'Intelligence Analysis & Processing' },
      { id: 'rokaf-flight-controller-workstation', route: '/samples/rokaf-flight-controller-workstation', title: 'Flight Controller WS', description: 'Aircraft Interception Control' },
      { id: 'comm-coordinator-workstation', route: '/samples/comm-coordinator-workstation', title: 'Comm Coordinator WS', description: 'Secure Communications Management' },
  ]
};
