import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Professional Summary"
            subTitle="Backend Engineer | SDE-II | Full Stack Development"
            result="Overview"
            des="Software Development Engineer (SDE-II) with 2+ years of experience engineering scalable backend systems, distributed architectures, microservices, ETL pipelines, and AI automation platforms using Node.js and TypeScript. Proficient in REST API development, asynchronous processing, workflow orchestration, Redis caching, RabbitMQ, PostgreSQL, performance optimization, and fault-tolerant backend architecture for high-throughput fintech platforms."
          />
          <ResumeCard
            title="Software Development Engineer - II"
            subTitle="Zype (Fintech) | Mar 2026 – Present | Mumbai"
            result="SDE-2"
            des="Promoted to SDE-2 for ownership of scalable backend systems, distributed microservices, ETL pipelines, and AI automation platforms using Node.js and TypeScript."
          />
          <ResumeCard
            title="Software Development Engineer - I"
            subTitle="Zype (Fintech) | Aug 2024 – Mar 2026 | Mumbai"
            result="SDE-1"
            des="Backend engineer on the Zype fintech platform, building REST APIs, microservices, and workflow orchestration for CRM and automation products."
          />
          <ResumeCard
            title="CRM Product"
            subTitle="Zype (Fintech) | Backend Development"
            result="Product"
            bullets={[
              "Engineered scalable microservices using Node.js (Express.js/Fastify) and TypeScript with SQL and NoSQL databases, improving API response time by 30% through query optimization and backend architecture improvements.",
              "Delivered an end-to-end customer loan onboarding pipeline via WhatsApp Click-To-WhatsApp (CTWA) campaigns, automating eligibility validation, loan offer generation, and onboarding journeys while integrating communication channels with backend services to reduce manual intervention.",
              "Built a bulk PDF pipeline delivering 1000 PDFs in 20 to 25 minutes against an SLA of 1000 PDFs per hour.",
              "Automated async bulk workflows with validation, retries, audit logging, status tracking, and row-level processing for large-scale operations.",
              "Reduced inter-service API calls by 40% through workflow optimization and improved communication patterns.",
              "Built ETL/reporting pipelines processing 100K+ rows across services, reducing latency by 35%.",
              "Integrated Redis caching, reducing database queries by 35% and improving throughput.",
              "Orchestrated event-driven workflows using RabbitMQ for asynchronous task execution.",
              "Integrated Tata Tele Smartflo APIs for CX calling and communication workflows.",
            ]}
          />
          <ResumeCard
            title="Agentic AI Systems"
            subTitle="Zype (Fintech) | AI Automation & Development"
            result="Platform"
            bullets={[
              "Engineered and delivered 2 AI-driven automation systems end-to-end with scalable backend orchestration pipelines.",
              "Built execution pipelines with retries, recovery mechanisms, queue-based execution, and status tracking.",
              "Automated calling workflows, reporting systems, inbound callbacks, notifications, and real-time Excel updates.",
              "Integrated WhatsApp, recording processing, alerts, and notification flows for AI-driven customer interaction workflows.",
              "Integrated Microsoft Azure, Cartesia, Tata Tele Smartflo, and external APIs for AI workflows.",
              "Improved scalability and fault tolerance using Redis caching and replica-based optimizations.",
              "Built an internal monitoring dashboard using Next.js for workflow tracking and execution analytics.",
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
