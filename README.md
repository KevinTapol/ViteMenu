# React Carousel
[Click here for Code Commerce React Carousel Tutorial](https://www.youtube.com/watch?v=tXlZCW26bto&t=917s&ab_channel=CodeCommerce)

### I built on top of CodeCommerce's guide to make my own website. 

- npx create vite@latest .
- gut react stuff not used
- npm i react-icons
- npm install -D tailwindcss postcss autoprefixer 
- npx tailwindcss init -p

***in tailwind.config.js***
- content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",]

- in src/index.css  
@tailwind base;  
@tailwind components;  
@tailwind utilities;

<!-- must use => () instead of => {} to render something on screen in arrow fn -->