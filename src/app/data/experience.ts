export const EXPERIENCE = [
    {
        company: 'PVcase',
        date: '2024-Present',
        title: 'Senior Full Stack Software Engineer',
        companyUrl: 'https://www.linkedin.com/company/pvcase/',
        description: "Moving solar projects forward with a single end-to-end platform for site selection, design, and yield optimization.",
        achievements: [
            'Partnered with the principal front-end engineer to build the company’s first React-based project management application, defining architecture, coding standards, and mentoring teammates transitioning from Angular. Owned major feature development — including dashboards, real-time commenting, and data integrations — delivering high-quality code at speed.',
            'Architected and implemented a reusable Node.js-based ETL framework for Mapbox VectorTile (MVT) data, capable of ingesting and transforming any third-party vector dataset into internal asset models. Designed around NATS (task orchestration), PostGIS (geospatial computation), and Firebase (data persistence) the system now powers the company’s zoning data integration — processing tens of thousands of tiles daily across millions of assets — and serves as the foundation for future geospatial ETL pipelines company-wide.',
            'Introduced a feature flag system (Flagsmith) across front-end and back-end services, improving release management and QA processes.',
            'Collaborated with Product Management to define technical objectives, plan sprints, and guide architectural decisions, ensuring alignment between engineering initiatives and business goals.',
            'Championed AI-assisted engineering practices (e.g., Copilot-assisted code reviews, AI-based test generation), reducing review turnaround time and achieving 100% unit test coverage.',
            'Established org-wide metrics with engineering leadership to measure development time, identify bottlenecks, and improve team productivity.',
            'Developed and maintained backend APIs and third-party data integrations using Node.js and Fastify, improving system reliability and extensibility.',
            'Authored Architecture Decision Records (ADRs) to document and guide key technical decisions, ensuring long-term maintainability across services.',
            'Contributed to the company’s Angular-based map prospecting platform, integrating datasets and adding functionality for European market expansion.',
            'Optimized PostgreSQL performance with refined indexing and query strategies on complex geospatial queries, reducing execution times from ~60s to under 2s.',
            'Built and enhanced Python-based GIS automation scripts for GeoJSON data ingestion into GeoServer and PostgreSQL, streamlining data pipeline efficiency.'

        ],
        skills: ['React', 'Angular', 'Python', 'NodeJS', 'Fastify', 'PostGIS', 'AWS', 'Kubernetes'],
    },
    {
        company: 'Robin Healthcare',
        date: '2019 - 2023',
        title: 'Full stack software engineer',
        companyUrl: 'https://www.linkedin.com/company/robin-healthcare/',
        description: "Eliminated barriers to health by building applications and services used by doctors and administrators to automate and assist medical documentation",
        achievements: [
            "Led development of an employee onboarding application that cut training time from months to two weeks for thousands of medical scribes",
            "Designed a 5X revenue-boosting E&M billing code calculator becoming the company's core intellectual property.",
            "Developed an ETL pipeline integrating HL7 and FHIR data, optimizing clinic scheduling processes and patient record keeping.",
            "Built and regularly enhanced the company's internal Nest.js GraphQL API for improved data management.",
            "Led the refactoring of production repositories into a NX monorepo, bolstering security with Snyk.",
            "Implemented front and back-end testing suites that secured over 90% code coverage.",
            "Automated weekly medical coding reports for auditors using AWS Lambda and Google Sheets integration.",
            "Built and refined applications for efficient medical documentation and data capture."
        ],
        skills: ['Typescript', 'React', 'NodeJS', 'NestJS', 'AWS', 'DocDB', 'DynamoDB', 'Docker'],
    },
    {
        company: 'Thinkful Coding Bootcamp',
        date: '2018 - 2019',
        title: 'Software Engineering student',
        companyUrl: 'https://www.thinkful.com/',
        description: "Five month, full-time coding bootcamp specializing in full stack web development",
        // . Contributed to Robin's core product, the Assist App, faciliating medical scribes to generate documentation of exam room video footage, designed and built the world's most accurate E&M code billing calculator, and lead team designing and building a scribe training application.", 
        achievements: [
            'Learned industry best practices and practical software development standards with a focus on HTML5, CSS3, JavaScript, jQuery, Node.js, React, Redux, and algorithms & data structures',
            'Created and deployed mobile-first applications while learning new languages and frameworks by collaborating several hours every week with senior web developers'
        ],
        skills: ['Javascript', 'HTML5', 'CSS3', 'React', 'Redux', 'NodeJS', 'MongoDB', 'Heroku'],
    },
];