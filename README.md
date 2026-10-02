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


docker compose up -d --build

Jenkins:

http://localhost:8080

Run Application
http://localhost:3000
Verify Containers
docker ps
Stop Jenkins
docker compose down

## Screenshot
[screenshot](https://github.com/rajesh1927/jenkins-cicd-demo-task2/blob/main/screenshot_task2.pdf)

## Author

Rajesh Maurya



