---
layout: post
title:  "AI Prompt template to generate resumes and cover letters"
author: vishesh gupta
description: A must checkout for job seekers to learn how to leverage the power of AI to build resumes and cover letters tailored fit for a particular job.
---
![Resume Builder Doodle](/assets/images/resume_doodle.png)

## Appetizer
In this post we are going to build a prompt for instructing AI to create resumes customized for each job's description. 

*NOTE: For the purpose of this post, I am going to use my data for building the resume, but you must use your own data\**

**Let's Start!**

## Main-course
#### Basic Prompt Template
````
Write a crisp {output_document} for {canditate_name}. 
To write it, use the below mentioned informations:
1. Below is the information on {canditate_name}'s career journey, achievements, skill-set and contact handles:
```
{canditate_career_profile_data}
```
2. Below is the job description for which the resume needs to be created:
```
{job_description}
```
````

#### <ins>Variables</ins>
As you can see there are **variables** like *{output_document}, {canditate_name}, {canditate_career_profile_data} and {job_description}*, in the above prompt. We have to replace these variable with actual data to make this prompt work well. 

Here I will use the my career's data:
- ***{output_document}***<br>
The value of this variable can be:
  - `resume`
  - `cover letter`
- ***{canditate_name}***<br>
`Vishesh Gupta`

- ***{canditate_career_profile_data}*** : Here i am just copying all the text from my resume and structuring it neatly. This is the **[text value](#candidate-profile)** for this variable

- ***{job_description}*** : job's description for which I am building my resume. In this case, I am trying to apply for the role of ***Principal Backend Engineer, at BitGo***. For this [job listing](https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3778822327), we copy the entire text for this jd. Here is the **[text value](#job-description)** for this variable.

This is the the [Final Prompt Value](#final-prompt).

## Dessert
Use the [final prompt value](#final-prompt) as the input for your AI tool like **[ChatGpt](https://chat.openai.com/)**, or etc, to instruct AI to build your resume. 

#### <ins>Output</ins>
Using the final prompt as the input to the [chatGpt](https://chat.openai.com/):
- output resume: **[my resume](#resultant-resume)**
- output cover letter: **[my cover letter](#resultant-cover-letter)**

## Conclusion
This [resume builder template](#basic-prompt-template) can be used to build resumes for *different jobs* and for *different candidates* by changing the value of [these 3 variables](#) in the prompt. <br>


*Hope this helps you to leverage AI to its best in your job search efforts*

___
#### Candidate profile
<pre>
Vishesh Education details:
```
degree: Bachelors of Technology
duration: 2008 - 2012
institute: Jaypee Institute of Information Technology, Noida, India 
field of study: Computer Science Engineering
Bachelor’s Major project: An Augmented Reality application to draw computer graphics in 3d space. (3D Air Sketching). 


degree: Masters of Technology
duration: 2012 - 2013
institute: Jaypee Institute of Information Technology, Noida, India 
field of study: Computer Science Engineering
Master’s Thesis: An interactive application development framework, letting developers easily use natural ways of human interaction to design the user interface of their applications.  
```

VISHESH GUPTA Contact details:
```
Home City:  Bangalore, India
phone number: +91-9971301392
emailId: vgvishesh2008@gmail.com

https://github.com/vgvishesh
https://www.linkedin.com/in/guptavishesh/
https://vgvishesh.com/
https://www.producthunt.com/@visheshg
https://mega-mind.io/
https://twitter.com/__visheshgupta
```

Vishesh Work Experience. Organisations that he worked for, their location and the duration of employement:
```
EXPERIENCE
role: CTO, Co-Founder
duration: April 2022- May 2023
organisation: Shyft.to (100x VC)
location: Bangalore
• Raised $200k in multiple pre-seed funding rounds along with my co-founders, from 100x VCs and other angel investors.
• Hired and mentored the engineering team to take care of devops and backend systems, to build fast and reliable infrastructure on Solana Blockchain.
• Laid the technological foundations of Shyft’s star offerings like Transaction Parsers and Solana data cache to support superfast queries on blockchain data. 
Tech Stack: (typescript, Solana, Quicknode, aws, Nodejs, React, MongoDb)


role: Staff Engineer 
duration: Jan 2021- Oct 2021
organisation: Playment.io (YC 2017) 
location: Bangalore
• Redesigned the entire backend system to move away from a distributed monolith design to domain driven services using the principals of Domain Driven Design (DDD). Migrated existing code repositories towards new system design.

role: Lead Engineer 
duration: Oct 2018 – Dec 2020
organisation: Playment.io (YC 2017) 
location: Bangalore
• Engineered fault tolerant mechanisms in data pipelines, to reduce the data stuck issues by 80%.
• Built Quality Control system for video, lidar and 2D raster data annotations, which ensured trust and transparency between Playment and its clients. 
• Built Split and Stitch feature, to split video and lidar sequence frames into smaller subsets to be annotated simultaneously by human workforce.
• Led performance optimization effort to reduce the memory cost of unmarshalling Json documents in Golang by 60%.
• Improved concurrency in projects’ data pipelines by solving noisy neighbor problem in multi-tenant system.
• Updated the 2 of the most heavily used system operations to reduce the memory and time cost by almost 99%.
Tech Stack: (Golang, java, AWS, GitHub, PostgreSQL, Redis, RabbitMQ)

role: Software Development Engineer 
duration: May 2017 – Mar 2018 
organisation: Amazon Dev. Center
location: Chennai 
work done:
• Rolling Stones: Designed and implemented a new Database Access API that works with most relational database systems.
• Using this API our team was able to migrate databases for 28 high traffic applications, smoothly, from Oracle to PostgreSQL.
Tech Stack: (Java 8, spring, hibernate, JPA, Google Guice)


role: Game Programmer 
duration: Ubisoft, 
organisation: Pune 
location: Oct 2014 – April 2017
work done:
• Games Developed: Just Dance 2016, Just Dance 2017, Monopoly 
Online Programmer
• In Monopoly, architected the online gameplay system in the game. This enabled the game to be played in a hosted online session with multiple players in it. All the clients in a session were connected in a peer-to-peer fashion.
Tools Programmer 
• Completely automated the license distribution process, reducing the manual effort of build engineers to serve the requests
and the wait time for the programmers to 0.
• Increased the efficiency, speed and accuracy of the Gameplay programmers, artists and build engineers to debug the
problems in the game data by writing a game data diff tool.
• Rearchitected the main data building tool, which made the entire production pipeline completely trackable.
Tech Stack: (C++, C# .NET)


role: Research Assistant 
duration: Jun 2013 – Aug 2014
organisation: IIT
location: Delhi 
• Point Cloud Rendering Engine: A hybrid graphics rendering system that renders both meshes and point cloud data depending on the level of detail needed to render the scene. 
• Implemented a process to enhance the Kinect depth image resolution up to 60% by filing the holes in the depth image with high density point cloud data captured using a laser scanner.

Tech Stack: (C/C++, Python, OpenGL, GLSL)
```

Languages and Tech stacks that Vishesh has expertise in:
```
Programming Languages: Golang, JavaScript, Typescript, C/C++, Java, C#, Python, Solidity.

Development Frameworks: NodeJS, Express, ReactJS, Spring, Hibernate, JPA, Google Guice, NestJs, Angular, Ethereum, Solana, Polygon, REST Apis, OpenAi, ElevenLabs, Twitter APIs, QuickNode, puppeteer, HuggingFace.

Data and deployment Systems: MongoDB, PostgreSQL, RabbitMQ, AWS, Redis, Docker, GitHub Actions, CI/CD, Nginx.
```
</pre>

#### Job Description
<pre>
About the job

BitGo is the leader in digital asset financial services, providing institutional investors with liquidity, custody, and security solutions. Founded in 2013, BitGo pioneered the multi-signature wallet and is the first digital asset company to focus exclusively on serving institutional clients. Active in both centralized and decentralized finance, BitGo offers market leading trading, lending, and borrowing services through its prime brokerage services and acts as the custodian for WBTC, the leading global stablecoin for Bitcoin. In 2020, BitGo launched BitGo Portfolio and Tax, providing clients with a full-stack solution for digital assets. In 2018, it launched BitGo Trust Company, the first qualified custodian purpose-built for storing digital assets. BitGo processes approximately 20% of all global Bitcoin transactions, and supports over 600 coins and tokens. BitGo provides the security and operational backbone for more than 1500 institutional clients in 50 countries, including many regulated entities and the world’s top cryptocurrency exchanges and platforms. BitGo is backed by Goldman Sachs, Craft Ventures, Digital Currency Group, DRW, Galaxy Digital Ventures, Redpoint Ventures, and Valor Equity Partners.


BitGo is looking for a Principal Software Engineer who will join our Prime Engineering team and help us build new features and applications for our enterprise clients. The Prime team builds systems to make BitGo the best digital assets Prime Broker for businesses. 



Responsibilities:

Design,build, and support strong, resilient, and robust APIs, libraries, and services to power our settlement product
Responsible for managing BitGo’s technical architecture
Own functionality and scalability features by taking responsibility from inception to deployment and customer integration
Expose and document functionality to the UI, third-party developers, and our internal and external tooling
Collaborate closely with all engineering teams to ensure consistency in understanding of technical requirements and overall work quality
Provide mentorship to your peers in the broader engineering team through code reviews and education on best practices


Skills & Experience: 

We are looking for teammates who share and practice our values: open communication, transparency, taking ownership, and a high level of craftsmanship. We are looking for coworkers who share our vision and mission: deliver trust in digital assets. 



Required:

At least 9+ years of back-end, server-side software development
Great at algorithm design, problem solving, and complexity analysis
Strong experience with server-side languages like TypeScript/Node.JS, Golang, etc.
Strong experience with SQL databases like Postgres or MySQL
Strong experience with RESTful API design
Experience with unit and functional testing and debugging
Experience with microservices and service-oriented architectures
Experience in Git/GitHub and branching methodologies, code review tools, CI tools, JIRA, Confluence, etc.
Ability to work independently in a fast-paced environment
Comfortable with inclusion in on-call rotations for system support
Strong spoken English skills
Bachelor’s degree in computer science, applied mathematics, or another technical discipline from a top university


Preferred:

Experience with Kubernetes, Docker, Golang, TypeScript
Experience in Financial Services and/or Financial Technology 
Experience with asynchronous programming
Experience with functional programming
Experience developing or supporting financial accounting systems, such as general ledger and bookkeeping functions
Familiarity with digital asset trading, lending, and/or wallets
Ability to work full-stack and familiarity with React 
Experience with large-scale, real-time, and distributed applications
Experience working with clients and/or business partners
Understanding and strong interest in cryptocurrencies and blockchain industry 


Why Join BitGo?

Disrupting an industry takes vision, innovation, passion, technical chops, drive to deliver, collaboration, and execution. Join a team of great people who strive for excellence and personify our corporate values of open communication, collaboration, accountability, craftsmanship, and a client first approach. We are looking for new colleagues who bring innovative ways of thinking and problem solving, and who want to be part of the team that changes the world’s financial markets.


Here are some of the benefits of working at BitGo:
Competitive salary
Meal & Commute allowance
Medical Insurance
Hybrid working model
IT equipment support for work
Great/Talented workforce to learn and grow with


Cryptocurrencies are the most disruptive change the financial services industry has seen in years. Join us and you’ll be able to look back and say you were part of the team that transformed finance.
</pre>

#### Final Prompt
<pre>
Write a resume for Vishesh Gupta. 
To write it, use the below mentioned informations:
1. Below is the information on Vishesh Gupta's career journey, achievements, skill-set and contact handles:
```
Vishesh Education details:
```
degree: Bachelors of Technology
duration: 2008 - 2012
institute: Jaypee Institute of Information Technology, Noida, India 
field of study: Computer Science Engineering
Bachelor’s Major project: An Augmented Reality application to draw computer graphics in 3d space. (3D Air Sketching). 


degree: Masters of Technology
duration: 2012 - 2013
institute: Jaypee Institute of Information Technology, Noida, India 
field of study: Computer Science Engineering
Master’s Thesis: An interactive application development framework, letting developers easily use natural ways of human interaction to design the user interface of their applications.  
```

VISHESH GUPTA Contact details:
```
Home City:  Bangalore, India
phone number: +91-9971301392
emailId: vgvishesh2008@gmail.com

https://github.com/vgvishesh
https://www.linkedin.com/in/guptavishesh/
https://vgvishesh.com/
https://www.producthunt.com/@visheshg
https://mega-mind.io/
https://twitter.com/__visheshgupta
```

Vishesh Work Experience. Organisations that he worked for, their location and the duration of employement:
```
EXPERIENCE
role: CTO, Co-Founder
duration: April 2022- May 2023
organisation: Shyft.to (100x VC)
location: Bangalore
• Raised $200k in multiple pre-seed funding rounds along with my co-founders, from 100x VCs and other angel investors.
• Hired and mentored the engineering team to take care of devops and backend systems, to build fast and reliable infrastructure on Solana Blockchain.
• Laid the technological foundations of Shyft’s star offerings like Transaction Parsers and Solana data cache to support superfast queries on blockchain data. 
Tech Stack: (typescript, Solana, Quicknode, aws, Nodejs, React, MongoDb)


role: Staff Engineer 
duration: Jan 2021- Oct 2021
organisation: Playment.io (YC 2017) 
location: Bangalore
• Redesigned the entire backend system to move away from a distributed monolith design to domain driven services using the principals of Domain Driven Design (DDD). Migrated existing code repositories towards new system design.

role: Lead Engineer 
duration: Oct 2018 – Dec 2020
organisation: Playment.io (YC 2017) 
location: Bangalore
• Engineered fault tolerant mechanisms in data pipelines, to reduce the data stuck issues by 80%.
• Built Quality Control system for video, lidar and 2D raster data annotations, which ensured trust and transparency between Playment and its clients. 
• Built Split and Stitch feature, to split video and lidar sequence frames into smaller subsets to be annotated simultaneously by human workforce.
• Led performance optimization effort to reduce the memory cost of unmarshalling Json documents in Golang by 60%.
• Improved concurrency in projects’ data pipelines by solving noisy neighbor problem in multi-tenant system.
• Updated the 2 of the most heavily used system operations to reduce the memory and time cost by almost 99%.
Tech Stack: (Golang, java, AWS, GitHub, PostgreSQL, Redis, RabbitMQ)

role: Software Development Engineer 
duration: May 2017 – Mar 2018 
organisation: Amazon Dev. Center
location: Chennai 
work done:
• Rolling Stones: Designed and implemented a new Database Access API that works with most relational database systems.
• Using this API our team was able to migrate databases for 28 high traffic applications, smoothly, from Oracle to PostgreSQL.
Tech Stack: (Java 8, spring, hibernate, JPA, Google Guice)


role: Game Programmer 
duration: Ubisoft, 
organisation: Pune 
location: Oct 2014 – April 2017
work done:
• Games Developed: Just Dance 2016, Just Dance 2017, Monopoly 
Online Programmer
• In Monopoly, architected the online gameplay system in the game. This enabled the game to be played in a hosted online session with multiple players in it. All the clients in a session were connected in a peer-to-peer fashion.
Tools Programmer 
• Completely automated the license distribution process, reducing the manual effort of build engineers to serve the requests
and the wait time for the programmers to 0.
• Increased the efficiency, speed and accuracy of the Gameplay programmers, artists and build engineers to debug the
problems in the game data by writing a game data diff tool.
• Rearchitected the main data building tool, which made the entire production pipeline completely trackable.
Tech Stack: (C++, C# .NET)


role: Research Assistant 
duration: Jun 2013 – Aug 2014
organisation: IIT
location: Delhi 
• Point Cloud Rendering Engine: A hybrid graphics rendering system that renders both meshes and point cloud data depending on the level of detail needed to render the scene. 
• Implemented a process to enhance the Kinect depth image resolution up to 60% by filing the holes in the depth image with high density point cloud data captured using a laser scanner.

Tech Stack: (C/C++, Python, OpenGL, GLSL)
```

Languages and Tech stacks that Vishesh has expertise in:
```
Programming Languages: Golang, JavaScript, Typescript, C/C++, Java, C#, Python, Solidity.

Development Frameworks: NodeJS, Express, ReactJS, Spring, Hibernate, JPA, Google Guice, NestJs, Angular, Ethereum, Solana, Polygon, REST Apis, OpenAi, ElevenLabs, Twitter APIs, QuickNode, puppeteer, HuggingFace.

Data and deployment Systems: MongoDB, PostgreSQL, RabbitMQ, AWS, Redis, Docker, GitHub Actions, CI/CD, Nginx.
```
```
2. Below is the job description for which the resume needs to be created:
```
About the job

BitGo is the leader in digital asset financial services, providing institutional investors with liquidity, custody, and security solutions. Founded in 2013, BitGo pioneered the multi-signature wallet and is the first digital asset company to focus exclusively on serving institutional clients. Active in both centralized and decentralized finance, BitGo offers market leading trading, lending, and borrowing services through its prime brokerage services and acts as the custodian for WBTC, the leading global stablecoin for Bitcoin. In 2020, BitGo launched BitGo Portfolio and Tax, providing clients with a full-stack solution for digital assets. In 2018, it launched BitGo Trust Company, the first qualified custodian purpose-built for storing digital assets. BitGo processes approximately 20% of all global Bitcoin transactions, and supports over 600 coins and tokens. BitGo provides the security and operational backbone for more than 1500 institutional clients in 50 countries, including many regulated entities and the world’s top cryptocurrency exchanges and platforms. BitGo is backed by Goldman Sachs, Craft Ventures, Digital Currency Group, DRW, Galaxy Digital Ventures, Redpoint Ventures, and Valor Equity Partners.


BitGo is looking for a Principal Software Engineer who will join our Prime Engineering team and help us build new features and applications for our enterprise clients. The Prime team builds systems to make BitGo the best digital assets Prime Broker for businesses. 



Responsibilities:

Design,build, and support strong, resilient, and robust APIs, libraries, and services to power our settlement product
Responsible for managing BitGo’s technical architecture
Own functionality and scalability features by taking responsibility from inception to deployment and customer integration
Expose and document functionality to the UI, third-party developers, and our internal and external tooling
Collaborate closely with all engineering teams to ensure consistency in understanding of technical requirements and overall work quality
Provide mentorship to your peers in the broader engineering team through code reviews and education on best practices


Skills & Experience: 

We are looking for teammates who share and practice our values: open communication, transparency, taking ownership, and a high level of craftsmanship. We are looking for coworkers who share our vision and mission: deliver trust in digital assets. 



Required:

At least 9+ years of back-end, server-side software development
Great at algorithm design, problem solving, and complexity analysis
Strong experience with server-side languages like TypeScript/Node.JS, Golang, etc.
Strong experience with SQL databases like Postgres or MySQL
Strong experience with RESTful API design
Experience with unit and functional testing and debugging
Experience with microservices and service-oriented architectures
Experience in Git/GitHub and branching methodologies, code review tools, CI tools, JIRA, Confluence, etc.
Ability to work independently in a fast-paced environment
Comfortable with inclusion in on-call rotations for system support
Strong spoken English skills
Bachelor’s degree in computer science, applied mathematics, or another technical discipline from a top university


Preferred:

Experience with Kubernetes, Docker, Golang, TypeScript
Experience in Financial Services and/or Financial Technology 
Experience with asynchronous programming
Experience with functional programming
Experience developing or supporting financial accounting systems, such as general ledger and bookkeeping functions
Familiarity with digital asset trading, lending, and/or wallets
Ability to work full-stack and familiarity with React 
Experience with large-scale, real-time, and distributed applications
Experience working with clients and/or business partners
Understanding and strong interest in cryptocurrencies and blockchain industry 


Why Join BitGo?

Disrupting an industry takes vision, innovation, passion, technical chops, drive to deliver, collaboration, and execution. Join a team of great people who strive for excellence and personify our corporate values of open communication, collaboration, accountability, craftsmanship, and a client first approach. We are looking for new colleagues who bring innovative ways of thinking and problem solving, and who want to be part of the team that changes the world’s financial markets.


Here are some of the benefits of working at BitGo:
Competitive salary
Meal & Commute allowance
Medical Insurance
Hybrid working model
IT equipment support for work
Great/Talented workforce to learn and grow with


Cryptocurrencies are the most disruptive change the financial services industry has seen in years. Join us and you’ll be able to look back and say you were part of the team that transformed finance.
```
</pre>


#### Resultant Resume
```
Contact Details:

Phone: +91-9971301392
Email: vgvishesh2008@gmail.com
LinkedIn: linkedin.com/in/guptavishesh
GitHub: github.com/vgvishesh
Portfolio: vgvishesh.com
Product Hunt: producthunt.com/@visheshg
Twitter: twitter.com/__visheshgupta
Mega Mind: mega-mind.io
Education:

Masters of Technology

Duration: 2012 - 2013
Institute: Jaypee Institute of Information Technology, Noida, India
Field of Study: Computer Science Engineering
Thesis: An interactive application development framework, allowing developers to use natural ways of human interaction to design the user interface of their applications.
Bachelors of Technology

Duration: 2008 - 2012
Institute: Jaypee Institute of Information Technology, Noida, India
Field of Study: Computer Science Engineering
Major Project: An Augmented Reality application for drawing computer graphics in 3D space (3D Air Sketching).
Work Experience:

CTO, Co-Founder (April 2022 - May 2023)

Organization: Shyft.to (100x VC), Bangalore
Achievements:
Raised $200k in multiple pre-seed funding rounds.
Hired and mentored the engineering team for devops and backend systems on Solana Blockchain.
Established technological foundations for Transaction Parsers and Solana data cache.
Tech Stack: TypeScript, Solana, Quicknode, AWS, Nodejs, React, MongoDB
Staff Engineer (Jan 2021 - Oct 2021)

Organization: Playment.io (YC 2017), Bangalore
Achievements:
Redesigned backend system using Domain Driven Design principles.
Migrated code repositories to a new system design.
Lead Engineer (Oct 2018 – Dec 2020)

Organization: Playment.io (YC 2017), Bangalore
Achievements:
Engineered fault-tolerant mechanisms in data pipelines.
Built Quality Control system for video, lidar, and 2D raster data annotations.
Led performance optimization efforts in Golang and Java.
Tech Stack: Golang, Java, AWS, GitHub, PostgreSQL, Redis, RabbitMQ
Software Development Engineer (May 2017 – Mar 2018)

Organization: Amazon Dev. Center, Chennai
Achievements:
Designed and implemented a new Database Access API.
Migrated databases for 28 high-traffic applications from Oracle to PostgreSQL.
Tech Stack: Java 8, Spring, Hibernate, JPA, Google Guice
Game Programmer (Oct 2014 – April 2017)

Organization: Ubisoft, Pune
Achievements:
Architected online gameplay system for Monopoly.
Automated license distribution process, improving efficiency.
Tech Stack: C++, C# .NET
Research Assistant (Jun 2013 – Aug 2014)

Organization: IIT, Delhi
Achievements:
Developed a hybrid graphics rendering system.
Enhanced Kinect depth image resolution using a laser scanner.
Tech Stack: C/C++, Python, OpenGL, GLSL
Languages and Tech Stacks:

Programming Languages: Golang, JavaScript, Typescript, C/C++, Java, C#, Python, Solidity.
Development Frameworks: NodeJS, Express, ReactJS, Spring, Hibernate, JPA, Google Guice, NestJs, Angular, Ethereum, Solana, Polygon, REST APIs, OpenAi, ElevenLabs, Twitter APIs, QuickNode, puppeteer, HuggingFace.
Data and Deployment Systems: MongoDB, PostgreSQL, RabbitMQ, AWS, Redis, Docker, GitHub Actions, CI/CD, Nginx.
```

#### Resultant Cover Letter
```
Vishesh Gupta
Bangalore, India
vgvishesh200@gmail.com
9971301392
[DATE]

Hiring Manager
BitGo
[BitGo Address]
[City, State, ZIP Code]

Dear Hiring Manager,

I am writing to express my interest in the Principal Software Engineer position at BitGo, as advertised. With a strong background in software development, extensive experience in leading roles, and a comprehensive skill set, I am confident in my ability to contribute effectively to your Prime Engineering team.

I am impressed by BitGo's leadership in digital asset financial services, and I believe my technical expertise aligns well with the responsibilities outlined in the job description. Here's how my skills and experience make me a strong candidate for the role:

Technical Expertise:
My educational background includes a Bachelor's and Master's in Technology from Jaypee Institute of Information Technology, specializing in Computer Science Engineering. Throughout my career, I have honed my skills in various programming languages, including Golang, JavaScript, TypeScript, C/C++, Java, C#, and Python. My hands-on experience with development frameworks such as NodeJS, ReactJS, Spring, Hibernate, and others, as well as data and deployment systems like MongoDB, PostgreSQL, AWS, Docker, and GitHub Actions, positions me well for the technical challenges at BitGo.

Leadership and Entrepreneurial Experience:
As the CTO and Co-Founder at Shyft.to, I successfully raised $200k in pre-seed funding, mentored an engineering team, and laid the technological foundations for key offerings. This experience, along with my roles as Staff Engineer and Lead Engineer at Playment.io, showcases my ability to drive technological innovation, implement system redesigns, and optimize performance in dynamic environments.

Blockchain and Financial Technology:
My recent role at Shyft.to involved building infrastructure on the Solana Blockchain, and I have experience with Ethereum and other blockchain technologies. Additionally, my time at Playment.io and Amazon Dev. Center has equipped me with a deep understanding of financial services and technologies, making me well-suited for BitGo's focus on institutional clients.

Collaboration and Communication:
Throughout my career, I have collaborated closely with cross-functional teams, ensuring consistency in technical requirements and work quality. My experience includes leading fault-tolerant mechanisms, building quality control systems, and optimizing data pipelines, demonstrating my commitment to delivering high-quality solutions.

I am excited about the opportunity to contribute to BitGo's mission of delivering trust in digital assets. I am confident that my technical skills, leadership experience, and passion for innovation make me a valuable asset to your team.

Thank you for considering my application. I look forward to the opportunity to discuss how my skills align with the needs of BitGo.

Sincerely,

Vishesh Gupta
```




