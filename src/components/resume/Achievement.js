import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Hackathons & Coding Contests</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Smart India Hackathon"
            subTitle="Government of India | August - 2022"
            result="Finalist"
            des="Participated in Smart India Hackathon (SIH), a prestigious national-level event organized by the Government of India. Advanced to the Grand Finale and competed at a designated nodal center among the top teams across the country."
          />
          <ResumeCard
            title="5⭐ Problem Solver - Java"
            subTitle="HackerRank (2022 - 2023)"
            result="Milestone Reached"
            des="Achieved a 5-star rating in Java on HackerRank by demonstrating strong problem-solving skills using the Java programming language."
          />
          <ResumeCard
            title="5⭐ Query Solver - MySQL"
            subTitle="HackerRank (2022 - 2023)"
            result="Milestone Reached"
            des="Earned a 5-star rating in SQL on HackerRank by mastering MySQL queries and solving various challenges."
          />
        </div>
      </div>

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="WhatsApp CTWA Loan Onboarding"
            subTitle="Zype (Fintech) - 2025"
            result="Automation"
            des="Delivered end-to-end customer loan onboarding via WhatsApp Click-To-WhatsApp campaigns with eligibility validation, loan offer generation, and automated onboarding journeys—reducing manual intervention and improving operational efficiency."
          />
          <ResumeCard
            title="Backend Performance Optimization"
            subTitle="Zype (Fintech) - 2024"
            result="30% Faster"
            des="Improved API response time by 30% through query optimization and backend architecture improvements. Integrated Redis caching to reduce database queries by 35% and cut inter-service API calls by 40%."
          />
          <ResumeCard
            title="ETL & Bulk Processing Pipelines"
            subTitle="Zype (Fintech) - 2024"
            result="100K+ Rows"
            des="Built ETL/reporting pipelines processing 100K+ rows across services, reducing latency by 35%. Delivered a bulk PDF pipeline handling 1000 PDFs in 20 to 25 minutes against an SLA of 1000 PDFs per hour."
          />
          <ResumeCard
            title="Agentic AI Automation Platform"
            subTitle="Zype (Fintech) - 2025"
            result="2 Systems"
            des="Engineered AI-driven automation systems end-to-end with queue-based execution, retries, recovery mechanisms, and an internal Next.js monitoring dashboard for workflow tracking and execution analytics."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
