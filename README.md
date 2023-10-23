# Ecommerce App README

Welcome to the Ecommerce App, built using React Native and Expo, with a backend powered by an Express server and MongoDB.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Requirements](#requirements)
4. [Getting Started](#getting-started)
5. [Frontend Setup](#frontend-setup)
6. [Backend Setup](#backend-setup)
7. [Usage](#usage)
8. [Development](#development)

## Introduction

The Ecommerce App is a mobile application that allows users to shop for various products, add them to their cart, and make purchases. It provides an intuitive and user-friendly interface for both customers and sellers. The backend server, powered by Express and MongoDB, handles user registration and authentication via REST APIs.

## Features

- User authentication (sign-up and sign-in) with JSON Web Tokens (JWT).
- User authentication for customers and sellers.
- Browse products by category.
- Search for products using keywords.
- View product details, including images and descriptions.
- Add products to the shopping cart.

## Requirements

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your machine.
- [Expo CLI](https://docs.expo.dev/get-started/installation/) installed globally.
- An Expo account (required for deploying the app).
- A MongoDB database set up and running.
- An internet connection.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ecommerce-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ecommerce-app
   ```

## Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the frontend dependencies:
   ```bash
    npm i
   ```
3. Create a .env file in the frontend directory and add your frontend configuration variables.

4. Start the Expo development server:
   ```bash
   npm expo start
   ```
5. Follow the instructions provided in the terminal to run the app on an emulator, device, or web browser.

## Backend Setup

1. Navigate to the backend directory:
   ```bash
   npm expo start
   ```

2. Install the backend dependencies:
    ```bash
    npm install
    ```
3. Create a .env file in the backend directory and add your backend configuration variables, including MongoDB connection details.

4. Start the Express server:
    ```bash
      npm run dev
    ```

5. Your backend server should now be running at http://localhost:3000 (or as configured).

## Usage
Once the app is up and running, you can:
- Register and log in as a user.
- Explore the products, add them to your cart, and proceed to checkout.
- Use the seller and admin dashboards to manage products and users (if authorized).
- Customize and extend the app to meet your specific eCommerce needs.

## Development

If you wish to contribute to this project, follow these steps:
- Fork the repository on GitHub.
- Clone your forked repository to your local machine.
- Create a new branch for your feature or bug fix: git checkout -b feature/your-feature-name.
- Make your changes and commit them: git commit -m "Add feature".
- Push your changes to your GitHub repository: git push origin feature/your-feature-name.
- Create a pull request on the original repository.
