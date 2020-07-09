# Game Of Life Kata

## Description

Kata to work TDD and hexagonal architecture.

### Rules of Kata

We have a grid of cells, each cell can be dead or alive.

- if a cell have less than 2 alive neighbour, it dies at the next step. 
- if a cell have 2 alive neighbour, it keeps his state at the next step. 
- if a cell have 3 alive neighbour, it lives at the next step. 
- if a cell have more than 3 alive neighbour, it dies at the next step.

## Installation

### Dependencies installation

At the root of project

```bash
npm install 
```

### Run the project

At the root of project

```bash
npm run start:cli 
```
