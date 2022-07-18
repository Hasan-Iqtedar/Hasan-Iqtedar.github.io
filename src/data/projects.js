import { importImagesObject } from "../utils";

const images = importImagesObject(
  require.context("../assets/projects", false, /\.(png)$/)
);

export const projects = [
  {
    name: "Members Only",
    code: "https://github.com/Hasan-Iqtedar/members-only",
    live: "https://peaceful-tundra-42013.herokuapp.com/",
    img: images["members-only"],
  },
  {
    name: "Inventory Application",
    code: "https://github.com/Hasan-Iqtedar/inventory-application",
    live: "https://tranquil-falls-52509.herokuapp.com/groceries",
    img: images["inventory-app"],
  },
  {
    name: "Blogs Dashboard",
    code: "https://github.com/Hasan-Iqtedar/blog-admin-dashboard",
    live: "https://hasan-iqtedar.github.io/blog-admin-dashboard/#/login",
    img: images["blogs-dashboard"],
  },
  {
    name: "Blogs App",
    code: "https://github.com/Hasan-Iqtedar/blog-client",
    live: "https://hasan-iqtedar.github.io/blog-client/",
    img: images["blogs-client"],
  },
  {
    name: "CV Application",
    code: "https://github.com/Hasan-Iqtedar/cv-application",
    live: "https://hasan-iqtedar.github.io/cv-application/",
    img: images["cv-application"],
  },
  {
    name: "Memory Card Game",
    code: "https://github.com/Hasan-Iqtedar/memory-card",
    live: "https://hasan-iqtedar.github.io/memory-card/",
    img: images["memory-card"],
  },
  {
    name: "Shop Application",
    code: "https://github.com/Hasan-Iqtedar/shopping-cart",
    live: "https://hasan-iqtedar.github.io/shopping-cart/",
    img: images["shop-app"],
  },
  {
    name: "Etch-a-Sketch",
    code: "https://github.com/Hasan-Iqtedar/etch-a-sketch",
    live: "https://hasan-iqtedar.github.io/etch-a-sketch/",
    img: images["etch-a-sketch"],
  },
  {
    name: "Calculator",
    code: "https://github.com/Hasan-Iqtedar/calculator",
    live: "https://hasan-iqtedar.github.io/calculator/",
    img: images["calculator"],
  },
  {
    name: "Tic Tac Toe",
    code: "https://github.com/Hasan-Iqtedar/tic-tac-toe",
    live: "https://hasan-iqtedar.github.io/tic-tac-toe/",
    img: images["tic-tac-toe"],
  },
  {
    name: "Weather App",
    code: "https://github.com/Hasan-Iqtedar/weather-app",
    live: "https://hasan-iqtedar.github.io/weather-app/",
    img: images["weather-app"],
  },
  {
    name: "Battleship",
    code: "https://github.com/Hasan-Iqtedar/battleship",
    live: "https://hasan-iqtedar.github.io/battleship/",
    img: images["battleship"],
  },
  {
    name: "Library Catalog",
    code: "https://github.com/Hasan-Iqtedar/express-local-library",
    live: "https://hidden-journey-39430.herokuapp.com/catalog",
    img: images["library"],
  },
  {
    name: "ToDo List",
    code: "https://github.com/Hasan-Iqtedar/todo-list",
    live: "https://hasan-iqtedar.github.io/todo-list/",
    img: images["todo-list"],
  },
];
