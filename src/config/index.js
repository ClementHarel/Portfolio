module.exports = {
  siteTitle: 'Clément Harel | Développeur Informatique',
  siteDescription:
    'Bonjour, je suis Clément Harel. Développeur Data',
  siteKeywords: 
  'Clément Harel, data, BI, business_intelligence, décisionnel, Qliksense, Qlik, Tableau, PowerBI, software engineer, front-end engineer, web developer, javascript, aix, marseille, c#, .net, sql, java, j2ee, devexpress',
  siteUrl: 'https://clementharel.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Clément Harel',
  location: 'Marseille',
  email: 'mail@clementharel.com',
  github: 'https://github.com/ClementHarel',
  twitterHandle: '@bchiang7',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ClementHarel',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/harelc',
    },
  ],

  navLinks: [
    {
      name: 'A propos de moi',
      url: '/#about',
    },
    {
      name: 'Expérience',
      url: '/#jobs',
    },
    {
      name: 'Mes projets',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
