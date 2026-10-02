# Jenkins CI/CD Pipeline

## Objective

Create a simple Jenkins CI/CD pipeline to automate the
build, test, Docker image creation, and deployment of a
Node.js application.

## Technologies

- Jenkins
- Docker
- Node.js
- Git
- GitHub

## Architecture

GitHub
   |
   | Push
   v
Jenkins
   |
   +-- Checkout
   |
   +-- Build
   |
   +-- Test
   |
   +-- Docker Build
   |
   +-- Deploy
   |
   v
Docker Container
   |
   v
Node.js Application

## Pipeline Stages

1. Checkout
2. Build
3. Test
4. Docker Build
5. Deploy

## Run Jenkins

```bash
docker compose up -d --build

Jenkins:

http://localhost:8080

Run Application
http://localhost:3000
Verify Containers
docker ps
Stop Jenkins
docker compose down
Author

Rajesh Maurya


---

# 24. Final repository

Your GitHub repository should look like:

```text
jenkins-cicd-demo/
│
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── Jenkins.Dockerfile
├── docker-compose.yml
├── Jenkinsfile
├── .dockerignore
├── .gitignore
└── README.md

This gives you a complete implementation of the uploaded Task 2: Create a Simple Jenkins Pipeline for CI/CD, including the requested Jenkinsfile, build/test/deploy stages, Docker usage, commit-triggered pipeline concept, testing, and GitHub submission structure.
