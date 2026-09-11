# CloudOps AI Simulator Platform — Complete Project Plan

Test Here : https://ai-agents-rag-rose.vercel.app/

## Problem Statement

Modern cloud platforms like Google Cloud Platform (GCP) are powerful but overwhelming for:

- Students learning cloud architecture
- Freshers preparing for enterprise cloud/AI roles
- Teams understanding infrastructure cost estimation
- Support engineers practicing enterprise escalation workflows
- Developers learning AI agents, RAG, and human-in-the-loop systems

### Core Problems:

1. **Real cloud platforms are expensive and complex** for beginners.
2. **Billing estimation is difficult** without deploying actual infrastructure.
3. **Enterprise support systems are rarely accessible** for learning purposes.
4. **AI agent + RAG + support automation systems** are usually theoretical, not practical.
5. There is **no unified educational simulator** combining:
   - Cloud architecture simulation
   - Billing prediction
   - AI support workflows
   - Human approvals
   - Feedback learning loops

---

# Proposed Solution

## CloudOps AI Simulator Platform

A web-based enterprise-grade cloud simulator inspired by GCP that allows users to:

### Simulate cloud infrastructure:

- Projects
- VPC networks
- Subnets
- Virtual Machines
- Managed Instance Groups (basic)
- Load Balancers
- Cloud Storage buckets
- BigQuery datasets/tables
- Pub/Sub simulation
- App Engine deployment simulation

### Billing Intelligence:

- Simulated pricing calculator
- Usage duration inputs
- Resource configuration pricing
- ML/rule-based billing estimation
- LLM-generated reasoning for cost predictions

### AI Support System:

- Ticket creation
- AI-powered ticket classification
- Escalation matrix routing
- Human approval workflows
- Secondary support teams
- Personalized AI agents for each support engineer
- Feedback loop for continual improvement

---

# High-Level Architecture

<img width="1557" height="390" alt="cloudops_ai_architecture" src="https://github.com/user-attachments/assets/31d7e199-3211-4003-b45d-c8e064dc2f1a" />

---

# Tech Stack

## Frontend

### React.js + MUI

Purpose:

- GCP-like dashboard UI
- Infrastructure simulation panels
- Billing dashboard
- Ticket raising system
- Admin dashboards
- Secondary support dashboards

### Key Features:

- Google-like design
- Project dashboard
- Resource creation forms
- Billing estimate pages
- Support ticket pages
- Role-based dashboards

---

## Backend

### Node.js + Express.js

Responsibilities:

- Authentication
- Role management
- Resource simulation logic
- Billing calculations
- Ticket APIs
- Agent orchestration
- Feedback storage

---

## Database

### MongoDB

Stores:

### Users Collection

- Super admin
- Secondary admins
- Role assignments
- Escalation levels
- Agent ownership

### Projects Collection

- User cloud projects
- Infrastructure resources
- Configurations
- Billing metadata

### Tickets Collection

- Customer issues
- Severity
- Assigned support
- Escalation stage
- Resolution history

### Secondary Agent Memory Collection

- Past solved issues
- User-specific learning
- Feedback logs

---

## Vector Database

### Pinecone

Stores:

- GCP documentation
- Pricing references
- Billing rules
- Enterprise support SOPs
- Previous ticket solutions
- Escalation knowledge

Purpose:

- Reduce hallucinations
- Improve ticket support accuracy
- Accurate billing reasoning
- Personalized support retrieval

---

# AI Components

## 1. Billing Estimation Engine

### Inputs:

- VM count
- Storage usage
- BigQuery size
- Load balancers
- Usage duration

### Processing:

- Rule engine
- Pricing heuristics
- Optional ML prediction

### Output:

- Estimated bill
- Resource breakdown
- LLM explanation

### Example:

> “Estimated monthly cost is high due to 3 VM instances, premium storage usage, and global load balancing.”

---

## 2. RAG-Based Knowledge Engine

### Flow:

```txt
User Query → Retrieve relevant cloud docs → Context injection → Gemini LLM → Accurate answer
```

### Use Cases:

- Billing reasoning
- Support troubleshooting
- Infrastructure recommendations
- Policy explanations

---

## 3. AI Ticket Routing Agent

### Flow:

```txt
Ticket Raised → LLM Classification → JSON Output → Tool Calling → Role Assignment
```

### Example Few-Shot Prompt:

**Input Ticket:**

> “My VM costs are unexpectedly high.”

**LLM Output:**

```json
{
  "issue_type": "billing",
  "priority": "P2",
  "department": "FinOps",
  "assign_role": "L2",
  "recommended_tool": "billing_analyzer"
}
```

### Tool Calling:

- billing_analyzer()
- network_validator()
- storage_optimizer()
- deployment_checker()

---

# Human-in-the-Loop System

## Primary Admin (Super Admin)

Responsibilities:

- Create support accounts
- Assign roles:
  - L1
  - L2
  - L3
  - L4

- Assign severity permissions:
  - P1
  - P2
  - P3
  - P4

- Review AI ticket assignments
- Approve or override routing
- Monitor team performance

---

## Secondary Admins (Support Engineers)

Responsibilities:

- Resolve assigned tickets
- Use personal AI support assistant
- Manual + AI-assisted workflows
- Build historical solution memory

---

# Escalation Matrix

| Priority | Impact   | Response Time | Support Level  |
| -------- | -------- | ------------- | -------------- |
| P1       | Critical | 15 mins       | L4 / Emergency |
| P2       | High     | 4 hrs         | L3             |
| P3       | Medium   | 8 hrs         | L2             |
| P4       | Low      | Business hrs  | L1             |

---

# Personalized Secondary AI Agents

Each secondary support engineer gets:

### Features:

- Custom AI agent name
- Personal ticket memory
- Historical issue retrieval
- Suggested solutions
- Learning from resolved tickets

### Example:

Secondary User:

- Name: Rahul
- AI Agent: “CloudAssist-Rahul”

When Rahul solves similar issues later:

- Agent retrieves previous fixes
- Suggests optimized resolution paths
- Improves productivity

---

# Feedback-in-the-Loop System

### Workflow:

```txt
Ticket Solved → Resolution Stored → MongoDB → Pinecone → Secondary Agent Knowledge Updated
```

### Benefits:

- Continuous improvement
- Better future recommendations
- Reduced repeated errors
- Demonstrates adaptive AI systems

---

# Frontend Modules

## User Side:

- Login/Register
- Cloud project simulator
- Billing simulator
- Ticket raising panel
- AI support chat

## Super Admin Side:

- Dashboard
- Team management
- Role creation
- Escalation matrix
- Ticket approvals
- Analytics

## Secondary Support Side:

- Assigned tickets
- Personal AI assistant
- Resolution dashboard
- Feedback management

---

# Outputs :

<img width="1637" height="808" alt="image" src="https://github.com/user-attachments/assets/3e5af530-81c5-4434-ac5f-6e576e46f0a5" />

---

# Resources i used to understand the concepts and implemnted using those :

https://www.linkedin.com/pulse/understanding-cosine-similarity-rag-generation-modern-thadivaka-hdmde/
https://medium.com/@nishi.paul.in/simple-rag-with-cosine-similarity-search-hands-on-blog-a344cfa78967
https://www.outerport.com/blog/agentic-search
https://www.ibm.com/think/topics/agentic-rag

# Data used :

i used official gcp docs :
and also used some support cases that resolved by google support cases :
https://docs.cloud.google.com/support/docs/customer-care-procedures
https://docs.cloud.google.com/support/docs/best-practices
https://cloud.google.com/blog/topics/inside-google-cloud/google-cloud-support-engineer-solves-a-tough-dns-case
