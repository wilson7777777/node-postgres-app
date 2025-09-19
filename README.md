<div align="center">
  <br>
  <h1>Node.js Full-Stack Application on Kubernetes</h1>
  <br>
  <p>A full-stack web application showcasing a complete DevOps workflow with Node.js, Kubernetes, and AWS EKS.</p>
  <br>
  <a href="#">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js Badge">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes Badge">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL Badge">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/AWS EKS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS EKS Badge">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions Badge">
  </a>
</div>

## 🌐 Overview

This is a **full-stack web application** that demonstrates a complete **DevOps workflow**, from development to continuous integration and deployment on a Kubernetes cluster. The application uses a Node.js Express server to serve a modern front-end and interact with a PostgreSQL database.

***

## ⚙️ Technical Stack

-   **Backend**: Node.js, Express
-   **Database**: PostgreSQL
-   **Frontend**: HTML, CSS, JavaScript
-   **Containerization**: Docker
-   **Orchestration**: Kubernetes (kubectl)
-   **Cloud Provider**: AWS ECR, AWS EKS
-   **CI/CD**: GitHub Actions

***

## 🚀 Getting Started

To get this project running, you will need access to a Kubernetes cluster configured to work with AWS

## 🌐 Live Application & Database Endpoints

Based on your `kubectl get service` output, your application and database services are running. You can access the front-end and test the API endpoints using the links below.

-   **Application URL**: [http://adcf3ca548903479992474a3fa82d16f-1325604658.us-east-1.elb.amazonaws.com](http://adcf3ca548903479992474a3fa82d16f-1325604658.us-east-1.elb.amazonaws.com)
-   **Get Data API**: [http://adcf3ca548903479992474a3fa82d16f-1325604658.us-east-1.elb.amazonaws.com/get-data](http://adcf3ca548903479992474a3fa82d16f-1325604658.us-east-1.elb.amazonaws.com/get-data)
-   **Add Data API**: [http://adcf3ca548903479992474a3fa82d16f-1325604658.us-east-1.elb.amazonaws.com/add-data?name=MyData&value=123](http://adcf3ca548903479992474a3fa82d16f-1325604658.us-east-1.elb.amazonaws.com/add-data?name=MyData&value=123)
