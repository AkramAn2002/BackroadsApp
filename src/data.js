import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "service" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    img: img1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-map",
    pays: "china",
    days: 6,
    price: 2100,
  },
  {
    id: 2,
    img: img2,
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-map",
    pays: "indonesia",
    days: 11,
    price: 1400,
  },
  {
    id: 3,
    img: img3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-map",
    pays: "hong kong",
    days: 8,
    price: 5000,
  },
  {
    id: 4,
    img: img4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-map",
    pays: "kenya",
    days: 20,
    price: 3300,
  },
];
export const footer = [{}];
