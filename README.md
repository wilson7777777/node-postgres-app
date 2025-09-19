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

This project is a **full-stack web application** that demonstrates a complete **DevOps workflow**, from development to continuous integration and deployment on a **Kubernetes** cluster. The application uses a **Node.js Express** server to serve a modern front end and interact with a **PostgreSQL** database.

---

## ✨ Key Features

- **Node.js Server**: A lightweight backend API built with **Express** to handle requests and manage data.
- **PostgreSQL Database**: A persistent database deployed within the Kubernetes cluster to store application data.
- **Advanced Front End**: A modern, single-file HTML, CSS, and JavaScript front end with a dark mode toggle, built with **Tailwind CSS** and **Alpine.js** for a professional and dynamic user experience.
- **Full DevOps Workflow**: The project includes a complete **CI/CD pipeline** with **GitHub Actions** for automated testing, building **Docker** images, and deploying the application to an **AWS EKS** (Elastic Kubernetes Service) cluster.

---

## 🚀 Technical Stack

| Category          | Technology                  |
| ----------------- | --------------------------- |
| **Backend** | `Node.js`, `Express`        |
| **Database** | `PostgreSQL`                |
| **Frontend** | `HTML`, `CSS` (Tailwind), `JavaScript` (Alpine.js) |
| **Containerization** | `Docker`                   |
| **Orchestration** | `Kubernetes` (`kubectl`)    |
| **Cloud Provider** | `AWS EKS`                  |
| **CI/CD** | `GitHub Actions`            |

---

## 🚦 Getting Started

To run this project, you will need access to a Kubernetes cluster configured to work with AWS EKS. The following components are deployed via the CI/CD pipeline:

1.  **Node.js Application**: A Kubernetes Deployment and Service for the Node.js application.
2.  **PostgreSQL Database**: A Kubernetes Deployment for the PostgreSQL database.

The **CI/CD pipeline** is triggered automatically upon a `git push` to the `main` branch. It handles the entire build, push, and deployment process.

---

## 🔗 API Endpoints

| Endpoint                                       | HTTP Method | Description                                                              |
| ---------------------------------------------- | ----------- | ------------------------------------------------------------------------ |
| `/`                                            | `GET`       | Serves the advanced HTML front end.                                      |
| `/add-data?name=<string>&value=<string>`       | `GET`       | Adds a new record to the database with the provided name and value.      |
| `/get-data`                                    | `GET`       | Retrieves all records from the database and returns them as a JSON array.|

---

## 🖥️ Accessing the Application

Once the CI/CD pipeline has successfully deployed the application, you can access the front end by visiting the URL of your **AWS Elastic Load Balancer (ELB)**.

**Example URL**:
`http://<your-load-balancer-address>/`

---
