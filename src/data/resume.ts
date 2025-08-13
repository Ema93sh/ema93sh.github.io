export const resume = {
  name: "Magesh Kumar Murali",
  role: "Senior Software Engineer",
  location: "Seattle, WA",
  contacts: {
    website: "http://www.mageshkumar.com",
    email: "m.magesh.66@gmail.com",
    linkedin: "https://www.linkedin.com/in/magesh-kumar",
    github: "https://github.com/Ema93sh",
  },
  summary:
    "Senior Software Engineer with a background spanning large-scale ML systems, big data platforms, and developer tooling. Built Prime Video's next‑gen recommendation engine, TB‑scale pipelines, and cost‑saving ML infra; prior experience at Pivotal Labs/VMware shipping cloud‑native systems; research in deep reinforcement learning at Oregon State University.",
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Prime Video, Amazon",
      location: "Seattle",
      period: "Jun 2020 – Present",
      highlights: [
        "Built the next‑generation content recommendation engine increasing overall stream time by 5%",
        "Created PV Page Simulator for rapid prototyping of page optimization strategies",
        "Designed a framework to automate daily training, deployment, versioning, and monitoring of ML models",
        "Scaled an ML pipeline to run TB‑scale inference in ~30 minutes; optimized training time from 12h → 2h via GPU utilization",
        "Identified cross‑component optimizations saving ≈ $1.4M per year",
        "Winner of the Prime Video ‘Technically Fearless’ award",
      ],
      tech: [
        "SageMaker",
        "Spark",
        "Scala",
        "Python",
        "AWS CDK",
        "MXNet",
        "PyTorch",
        "DynamoDB",
      ],
    },
    {
      title: "Software Engineer",
      company: "Pivotal Labs (VMware)",
      location: "San Francisco",
      period: "Sep 2018 – Jun 2020",
      highlights: [
        "Led a big‑data platform for SunPower ingesting sensor data from millions of devices; improved 95p latency from 4s → 250ms",
        "Migrated WeWork’s Inventory Management System from a monolith to cloud‑native microservices",
        "Introduced observability practices to reduce time‑to‑restore",
        "Led and built the UI layer for Autodesk Drive used across flagship products (AutoCAD, Revit, …)",
        "Coached XP practices, improving deployment frequency from 1 in 3 months to 24 in 3 months",
        "Contributed to the Cloud Foundry CLI",
      ],
      tech: [
        "Kafka",
        "Kubernetes",
        "Prometheus/Jaeger/Grafana",
        "Gatling",
        "Go",
        "Java (Spring Boot)",
        "TypeScript",
        "Cloud Foundry",
        "BOSH",
        "Concourse CI",
        "EDA",
        "RabbitMQ",
      ],
    },
    {
      title: "Graduate Research Assistant",
      company: "Oregon State University",
      location: "Corvallis",
      period: "Sep 2016 – Jun 2018",
      highlights: [
        "Built AI agents for Atari games using DQN, HRA, and A3C",
        "Developed a framework to help programmers create deep RL agents",
        "Applied deep RL to improve adaptive programming paradigms",
        "Researched variational data structures and benchmarked performance",
      ],
      tech: ["TensorFlow", "PyTorch", "Python", "Google Cloud ML", "Haskell"],
    },
    {
      title: "Application Developer",
      company: "ThoughtWorks",
      location: "Singapore",
      period: "Aug 2013 – Jun 2016",
      highlights: [
        "Developed a private banking application for Credit Suisse (APAC) with iOS/Android support",
        "Architected a reusable UI framework to accelerate delivery across projects",
        "Optimized build pipelines to improve developer productivity",
        "Benchmarked and tuned performance using Gatling",
        "Refactored a monolith to microservices with zero downtime",
      ],
      tech: [
        "JavaScript (ES6)",
        "Objective‑C",
        "AngularJS",
        "GoCD",
        "Cordova",
        "Gulp",
        "Gatling",
      ],
    },
  ],
  education: [
    {
      school: "Oregon State University",
      degree: "M.Eng., Computer Science",
      details: "GPA 3.56 / 4",
      period: "Sep 2016 – Jun 2018",
    },
    {
      school: "Amrita University",
      degree: "B.Tech., Computer Science",
      details: "Major GPA 8.69 / 10 (Top 10%)",
      period: "Jun 2009 – May 2013",
    },
  ],
  projects: [
    {
      name: "Adaptive Programming Library",
      blurb:
        "Framework enabling programmers to build intelligent agents using state‑of‑the‑art reinforcement learning algorithms.",
      link: "https://github.com/Ema93sh/abp",
      stack: ["Python", "TensorFlow", "TensorBoard", "Cloud ML", "OpenAI Gym"],
    },
    {
      name: "Pragyan",
      blurb:
        "Open‑source question answering system for simple What/Who/Why queries powered by the semantic web.",
      link: "https://github.com/Cookielabs/pragyan",
      stack: ["Python", "Django", "Semantic Web", "NLP", "SPARQL", "DBPedia"],
    },
  ],
} as const;

export type Resume = typeof resume;
