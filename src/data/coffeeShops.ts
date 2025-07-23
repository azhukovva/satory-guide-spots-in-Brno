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

import kratky_1 from "../assets/images/kratky_1.jpg";
import kratky_2 from "../assets/images/kratky_2.jpg";
import kratky_3 from "../assets/images/kratky_3.jpg";
import kratky_4 from "../assets/images/kratky_4.jpg";

import brunches_1 from "../assets/images/brunches_1.jpg";
import brunches_2 from "../assets/images/brunches_2.jpg";
import brunches_3 from "../assets/images/brunches_3.jpg";
import brunches_4 from "../assets/images/brunches_4.jpg";

import anoda_1 from "../assets/images/anoda_1.jpg";
import anoda_2 from "../assets/images/anoda_2.jpg";
import anoda_3 from "../assets/images/anoda_3.jpg";
import anoda_4 from "../assets/images/anoda_4.jpg";

import maybe_1 from "../assets/images/maybe_1.jpg";
import maybe_2 from "../assets/images/maybe_2.jpg";
import maybe_3 from "../assets/images/maybe_3.jpg";
import maybe_4 from "../assets/images/maybe_4.jpg";

import riverside_1 from "../assets/images/riverside_1.jpg";
import riverside_2 from "../assets/images/riverside_2.jpg";
import riverside_3 from "../assets/images/riverside_3.jpg";
import riverside_4 from "../assets/images/riverside_4.jpg";

import low_1 from "../assets/images/low_1.jpg";
import low_2 from "../assets/images/low_1.jpg";
import low_3 from "../assets/images/low_3.jpg";
import low_4 from "../assets/images/low_4.jpg";

import vzdycky_1 from "../assets/images/vzdycky_1.jpg";
import vzdycky_2 from "../assets/images/vzdycky_2.jpg";
import vzdycky_3 from "../assets/images/vzdycky_3.jpg";
import vzdycky_4 from "../assets/images/vzdycky_4.jpg";

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
  closed?: string;
};

export const coffeeShops: Cafe[] = [
  {
    id: "7",
    name: "Krátký Kafe",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    mainImage: kratky_1,
    images: [kratky_2, kratky_3, kratky_4],
    location: {
      address: "Merhautova 869/129, 613 00 Brno-sever-Černá Pole",
      link: "pb=!1m18!1m12!1m3!1d3627.8261755982753!2d16.62264231270829!3d49.213202175551636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712954a503d0ed3%3A0x8dbe6b378133bfc9!2zS3LDoXRrw70gS2FmZQ!5e1!3m2!1sen!2scz!4v1753280279749!5m2!1sen!2scz",
    },
    tags: ["cozy", "pastries", "wifi"],
    hours: "9:00 - 20:00",
  },
  {
    id: "1",
    name: "Periferie Kafe",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    mainImage: periferie_2,
    images: [periferie_4, periferie_3, periferie_1],
    location: {
      address: "Libušina tř. 580, 623 00 Brno-Kohoutovice",
      link: "pb=!1m18!1m12!1m3!1d3629.009409593195!2d16.531514912707742!3d49.19707727669226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712968a7368800f%3A0x9749aef73401d9e1!2sPeriferie_kafe!5e1!3m2!1sen!2scz!4v1753280917124!5m2!1sen!2scz",
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
      link: "pb=!1m18!1m12!1m3!1d3628.3387359901817!2d16.599375312708!3d49.206217576045674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712944222ab4801%3A0x8573bc7808522ba3!2sPunkt.!5e1!3m2!1sen!2scz!4v1753280950890!5m2!1sen!2scz",
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
      link: "pb=!1m18!1m12!1m3!1d3628.138190297064!2d16.60125271270808!3d49.20895047585229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471295ce2909be65%3A0x6fe0b1fb99415481!2sBuchta%20B!5e1!3m2!1sen!2scz!4v1753280980482!5m2!1sen!2scz",
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
      link: "pb=!1m18!1m12!1m3!1d3625.823219945516!2d16.5745071127093!3d49.24048917362098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471291f24c169bd1%3A0x33c3776312c8c4db!2sPomlka%20Kav%C3%A1rna%20%26%20Butik!5e1!3m2!1sen!2scz!4v1753281005307!5m2!1sen!2scz",
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
      link: "pb=!1m18!1m12!1m3!1d3628.7559156155958!2d16.56415331270791!3d49.20053217644799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712afad9fe78e35%3A0x6b994fc969b18b97!2sqb%20coffee%20roasters!5e1!3m2!1sen!2scz!4v1753281038659!5m2!1sen!2scz",
    },
    tags: ["cozy", "pastries", "wifi"],
    hours: "7:30 - 20:00",
    weekendHours: "9:00 - 20:00",
  },
  {
    id: "6",
    name: "Brunche's Bistro",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    mainImage: brunches_1,
    images: [brunches_2, brunches_3, brunches_4],
    location: {
      address: "63, Vodova 1986, 612 00 Brno-Královo Pole",
      link: "pb=!1m18!1m12!1m3!1d7254.321658596582!2d16.584570412708644!3d49.2222676749104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712940570f60541%3A0x2155a79909624f83!2sBrunche&#39;s%20Bistro!5e1!3m2!1sen!2scz!4v1753285865032!5m2!1sen!2scz",
    },
    tags: ["breakfasts", "local"],
    hours: "8:30 - 14:00",
    weekendHours: "8:30 - 15:00",
    closed: "Monday",
  },
  {
    id: "7",
    name: "anoda",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    mainImage: anoda_1,
    images: [anoda_2, anoda_3, anoda_4],
    location: {
      address: "tř. Kpt. Jaroše 39, 602 00 Brno-střed-Černá Pole",
      link: "pb=!1m18!1m12!1m3!1d3628.518206708838!2d16.607725212707937!3d49.203771776218716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471295527fda8e29%3A0x2036e73b3e03306d!2sanoda!5e1!3m2!1sen!2scz!4v1753281109555!5m2!1sen!2scz",
    },
    tags: ["cozy", "pastries", "wifi"],
    hours: "8:00 - 23:00",
    weekendHours: "Fr: 8:00 - 02:00/ Sat: 10:00 - 01:00/ Sun: 10:00 - 22:00",
  },
  {
    id: "8",
    name: "Riverside Coffee",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    mainImage: riverside_2,
    images: [riverside_1, riverside_3, riverside_4],
    location: {
      address: "Břehová 2, 614 00 Brno-Maloměřice a Obřany",
      link: "pb=!1m18!1m12!1m3!1d3626.734051261732!2d16.645501512708822!3d49.22808197449885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712953c8ada5e11%3A0xd906d590d8ffca57!2sRiverside%20Coffee!5e1!3m2!1sen!2scz!4v1753281140122!5m2!1sen!2scz",
    },
    tags: ["local", "outdoor seating only", "pastry", "pleasing prices:)"],
    hours: "7:30 - 19:00",
  },
  {
    id: "9",
    name: "Maybe coffee & bistro",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    mainImage: maybe_1,
    images: [maybe_2, maybe_3, maybe_4],
    location: {
      address: "Vídeňská 18a, 602 00 Brno-střed-Štýřice",
      link: "pb=!1m18!1m12!1m3!1d3629.9413445305354!2d16.592310012707237!3d49.18437427759065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47129505cf230855%3A0x7e9995f826eca605!2sMaybe%20coffee%20%26%20bistro!5e1!3m2!1sen!2scz!4v1753281169490!5m2!1sen!2scz",
    },
    tags: ["breakfasts"],
    hours: "8:00 - 20:00",
    weekendHours: "9:00 - 16:00",
  },
  {
    id: "10",
    name: "Vždycky kafe",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    mainImage: vzdycky_3,
    images: [vzdycky_2, vzdycky_1, vzdycky_4],
    location: {
      address: "Fryčajova 532/147, 614 00 Brno-Maloměřice a Obřany",
      link: "pb=!1m18!1m12!1m3!1d3626.156579327814!2d16.641474812709095!3d49.23594847394228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712932c447d58d7%3A0x72e40be96a0bb352!2sV%C5%BEdycky%20kafe!5e1!3m2!1sen!2scz!4v1753281196698!5m2!1sen!2scz",
    },
    tags: ["local", "breakfasts"],
    hours: "9:00 - 22:00; Monday, Tuesday - 13:00 - 22:00",
  },
  {
    id: "11",
    name: "Café Löw-Beer",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    mainImage: low_4,
    images: [low_1, low_2, low_3],
    location: {
      address: "Drobného 297, 602 00 Brno-sever-Černá Pole",
      link: "pb=!1m18!1m12!1m3!1d3628.3343184821356!2d16.61217301270811!3d49.206277776041446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471294675b25b099%3A0x66a59a6fe19688c8!2zQ2Fmw6kgTMO2dy1CZWVy!5e1!3m2!1sen!2scz!4v1753281226315!5m2!1sen!2scz",
    },
    tags: [],
    hours: "10:00 - 18:00",
    closed: "Monday",
  },
];
