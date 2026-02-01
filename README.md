<h1 align=center>Space Tracker App</h1>

<h2 align=center>This is the space tracker app for my Advanced Server-side Languages class (WDV442).</h2>

--- 

### Technologies

![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff)
![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00000f?logo=mysql&logoColor=white)
![Twig](https://img.shields.io/badge/Twig-889900?logo=twig&logoColor=white)
![Multer](https://img.shields.io/badge/Multer-CC3534?logo=npm&logoColor=white)

---

### Description

This project focuses on building a fully RESTful API using Node.js, Express, and Sequelize ORM. The primary goal was to construct a "Space Tracker" API capable of handling standard CRUD operations (Create, Read, Update, Delete) for celestial objects.

The API manages three primary resources: **Galaxies**, **Stars**, and **Planets**, handling the relationships between them (e.g., Stars belonging to Galaxies). The project is containerized using Docker Compose, which orchestrates both the Node.js application and the MySQL database service for a seamless development environment.

---

### How to run

## Prerequisites
Make sure you have Docker Desktop installed and running on your machine. In the event you don't have it, here is the [link](https://www.docker.com/products/docker-desktop/) for Docker Desktop. It supports both Windows and Mac.

## Setup & Installation
1. Clone this repo and open the project in your code editor of choice.
2. Open the terminal.
3. Start the container by running the command: Docker compose up. It will start on localhost:3000.
4. Open a separate terminal.
5. Issue the cURL commands to Create, Read, Update, or Delete the planets, stars, and galaxies you desire.

### Example cURL command
curl -X POST [(http://localhost:3000/galaxies)]

-H "Content-Type: application/json" \

-d '{"name": "Milky Way", "size": 100000, "description": "Where we call home"}'

This will create a galaxy by the name of "Milky Way" with a description of "Where we call home" and an Id of 1, granted you haven't already created a galaxy already. 

---

### Update 02.01.2026

The API has been updated to serve an application page using Twig.js and Multer for file uploads like photos. 
The steps to run the application are largely the same, however now you can open a page in the browser via [(http://localhost:3000)] and interact by inputting planets, stars, and galaxies through forms. 

