import periferie_1 from "../assets/images/periferie_1.jpg";
import periferie_2 from "../assets/images/periferie_2.jpg";
import periferie_3 from "../assets/images/periferie_3.jpg";
import periferie_4 from "../assets/images/periferie_4.jpg";

import punkt_1 from "../assets/images/punkt_1.jpg";
import punkt_2 from "../assets/images/punkt_2.jpg";
import punkt_3 from "../assets/images/punkt_3.jpg";  
import punkt_4 from "../assets/images/punkt_4.jpg"; 

import buchta_1 from "../assets/images/buchta_1.jpg";
import buchta_2 from "../assets/images/buchta_2.jpg";
import buchta_3 from "../assets/images/buchta_3.jpg";
import buchta_4 from "../assets/images/buchta_4.jpg";

import pomlka_1 from "../assets/images/pomlka_1.jpg";
import pomlka_2 from "../assets/images/pomlka_2.jpg";
import pomlka_3 from "../assets/images/pomlka_3.jpg";
import pomlka_4 from "../assets/images/pomlka_4.jpg";

import qb_1 from "../assets/images/qb_1.jpg";
import qb_2 from "../assets/images/qb_2.jpg";
import qb_3 from "../assets/images/qb_3.jpg";
import qb_4 from "../assets/images/qb_4.jpg";

export type Cafe = {
  id: string;
  name: string;
  description: string;
  mainImage: string;
  images: string[];
  location: { address: string; link: string };
  tags: string[];
  hours: string;
  weekendHours?: string;
};

export const coffeeShops: Cafe[] = [
  {
    id: "1",
    name: "Periferie Kafe",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    mainImage: periferie_2,
    images: [periferie_4, periferie_3, periferie_1],
    location: {
      address: "Libušina tř. 580, 623 00 Brno-Kohoutovice",
      link: "https://maps.example.com/?q=Libušina+tř.+580,+623+00+Brno-Kohoutovice",
    },
    tags: ["cozy", "pastries", "wifi"],
    hours: "9:00 - 18:00",
  },
  {
    id: "2",
    name: "Punkt.",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    mainImage: punkt_2,
    images: [punkt_1, punkt_3, punkt_4],
    location: {
      address: "7, Bayerova 577, Veveří, 602 00 Brno-střed",
      link: "https://maps.example.com/?q=7,+Bayerova+577,+Veveří,+602+00+Brno-střed",
    },
    tags: ["cozy", "pastries", "wifi"],
    hours: "8:00 - 20:00",
    weekendHours: "10:00 - 20:00",
  },
  {
    id: "3",
    name: "Buchta B",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    mainImage: buchta_1,
    images: [buchta_2, buchta_3, buchta_4],
    location: {
      address: "Štefánikova 85/16, 602 00 Brno-Královo Pole-Ponava",
      link: "https://maps.example.com/?q=Štefánikova+85/16,+602+00+Brno-Královo+Pole-Ponava",
    },
    tags: ["cozy", "pastries", "wifi"],
    hours: "6:30 - 19:00",
    weekendHours: "8:00 - 18:00/19:00",
  },
  {
    id: "4",
    name: "Pomlka Kavárna & Butik",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    mainImage: pomlka_1,
    images: [pomlka_2, pomlka_3, pomlka_4],
    location: {
      address: "Ovocná 1, 621 00 Brno-Medlánky",
      link: "https://maps.example.com/?q=Ovocná+1,+621+00+Brno-Medlánky",
    },
    tags: ["cozy", "pastries", "wifi"],
    hours: "8:00 - 20:00",
  },
  {
    id: "5",
    name: "qb coffee roasters",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    mainImage: qb_1,
    images: [qb_2, qb_3, qb_4],
    location: {
      address: "Veslařská 507/179, 637 00 Brno-Jundrov",
      link: "https://maps.example.com/?q=Veslařská+507/179,+637+00+Brno-Jundrov",
    },
    tags: ["cozy", "pastries", "wifi"],
    hours: "7:30 - 20:00",
    weekendHours: "9:00 - 20:00",
  },
];
