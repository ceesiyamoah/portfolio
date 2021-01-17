/* eslint-disable prettier/prettier */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Cyril Yamoah| Front- End Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, My name is',
  name: 'Cyril Yamoah',
  subtitle: 'I am a Front-End Developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'cyril_prof.png',
  paragraphOne:
    'I am a front-end developer, in Accra, Ghana with skills in HTML, CSS, React, Redux, Versioning Control and Cloud Computing',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: 'https://drive.google.com/file/d/1CMaOZlvzo1jAoxBa3KCwDW_9HBmTTYDU/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'countries.jpg',
    title: 'Countries Stats',
    info: 'A website to show a list of countries with details',
    info2: 'Using the restcountries API',
    url: 'https://ccyamoah-countries.netlify.app/',
    repo: 'https://github.com/ceesiyamoah/countries-stats-redux', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covid.jpg',
    title: 'COVID-19 country status',
    info: 'A website to show the number of active cases in various countries',
    info2: ' ',
    url: 'https://ccyamoah-covid.netlify.app/',
    repo: 'https://github.com/ceesiyamoah/covid-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'shoppies.jpg',
    title: 'Shoppies',
    info: 'A website to search and nominate movies for the shoppies',
    info2: 'In fulfilment of the Shopify challenge',
    url: 'https://cyrilshoppies.netlify.app/',
    repo: 'https://github.com/ceesiyamoah/movie-nominator', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'ccyamoah@gmail.com',
  email: 'ccyamoah@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Siisi_Any',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/cyril-yamoah-a620a7168/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ceesiyamoah',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
