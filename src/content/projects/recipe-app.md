---
title: "Pantry Chef"
summary: "Input the ingredients you have, and get a list of recipes you can cook right now."
image: "/images/placeholder-5.jpg"
size: "2x2"
tags: ["React Native", "Expo", "Node.js"]
---
# Pantry Chef Mobile App

Ever look in your fridge and have no idea what to make? Pantry Chef solves the "what's for dinner" dilemma.

## Development Journey
This was my first foray into mobile development. I chose React Native and Expo to leverage my existing React knowledge while deploying to both iOS and Android. 

The backend is a custom Node.js Express server that interfaces with the Spoonacular API to reverse-engineer recipes based on a comma-separated list of available ingredients. I also implemented a local SQLite database to allow users to save their favorite recipes for offline viewing.