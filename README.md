# React + Golang with PostgreSQL

## Table of Contents

## Description

## Structure

```
my-fullstack-app/
├── backend/
│   ├── main.go
│   ├── go.mod
│   ├── go.sum
│   └── ...
├── frontend/
│   ├── public/
│   │   └── ...
│   ├── src/
│   │   ├── components/
│   │   │   ├── Insert.jsx
│   │   │   ├── Read.jsx
│   │   │   ├── Update.jsx
│   │   │   ├── Delete.jsx
│   │   │   └── ...
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── package.json
│   ├── vite.config.js
│   └── ...
├── .gitignore
└── README.md
```

## Getting Started

to run the application locally, with both frontend and backend servers concurrently, install the 'concurrently dependency' package using the following command:
```
npm install concurrently --save-dev
```

Undate the package.json file by adding the following scripts either side of the "dev" script:
```
"start": "concurrently \"npm:dev\" \"npm:server\"",
"dev": "vite",
"server": "cd ../backend && go run main.go"
```

This setup defines:

- dev: Script to start the Vite development server.
- server: Script to navigate to the backend directory and run the Go server.
- start: Script to run both dev and server scripts concurrently.

Both servers can be started with the single command:
```
npm start
```



