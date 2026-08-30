// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux_logo.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui_logo.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

import socketlogo from './assets/tech_logo/socket.png'
import zustandlogo from './assets/tech_logo/zustand.svg'
import cloudinarylogo from './assets/tech_logo/cloudinary.webp'
import lucidelogo from './assets/tech_logo/lucide.png'
import shadcnlogo from './assets/tech_logo/shadcn.png'
import pythonlogo from './assets/tech_logo/python.png'
import typeScriptlogo from './assets/tech_logo/typescript.png'
import sqllogo from "./assets/tech_logo/sql.png"
import netlifylogo from './assets/tech_logo/netlify.png'
import renderlogo from './assets/tech_logo/render.png'
import vercellogo from './assets/tech_logo/vercel.png'
import atlaslogo from './assets/tech_logo/atlas.png'
import workbenchlogo from './assets/tech_logo/workbench.png'


// Experience Section Logo's

// Education Section Logo's
import pmiLogo from './assets/education_logo/pmi_logo.png';
import igitLogo from './assets/education_logo/igit_logo.png';

// Project Section Logo's
import airbnb_Logo from './assets/work_logo/airbnb_logo.png';
import bastra_Logo from './assets/work_logo/logo.png';
import foodapp_Logo from './assets/work_logo/foodapp.jpeg'
import connectify_Logo from './assets/work_logo/connectify.jpeg'




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Zustand', logo: zustandlogo},
      { name: 'Lucide', logo: lucidelogo},
      {name:"Shadcn",logo:shadcnlogo}
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      {name:"Socket.io" , logo : socketlogo},
      {name:"Cloudinary" , logo : cloudinarylogo}
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      {name : 'Python' , logo:pythonlogo},
      {name : "TypeScript",logo:typeScriptlogo},
      {name:"SQL",logo:sqllogo}
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },

      { name: 'Render', logo: renderlogo },
      { name: 'Netlify', logo: netlifylogo },
      { name: 'Vercel', logo: vercellogo },
      { name: 'MongoDB Atlas', logo: atlaslogo},
      { name: 'MySql Workbench', logo: workbenchlogo},
    ],
  },
];

  
  
  export const education = [
    {
      id: 0,
      img: igitLogo,
      school: "Indira Gandhi Institute of Technology,Sarang",
      date: "Sept 2024 - JUN 2026",
      grade: "8.79 CGPA",
      desc: "I have recently completed my Master's degree (MCA) in Computer Applications from Indira Gandhi Institute of Technology,Sarang. In this program I introduced myself to computer science. I learned about various programming languages ,new tecnologies, and many technial skills  ",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: pmiLogo,
      school: "Pattamundai College,Pattamundai",
      date: "Sept 2021 - May 2024",
      grade: "8.04 CGPA",
      desc: "I have completed my graduation from Pattamundai College,Pattamundai with Bsc(Physics). During this course I have learned various soft skills like leadership, management etc.",
      degree: "Bachelor of Science - BSC (Physics)",
    },
    
    
  ];
  
   export const projects = [
     {
       id: 0,
       title: "AirBNB clone",
       description:
         "An e-commerce web site for providing rooms and houses in different locations in the world,It build using Node.js, Express.js, MongoDB .It mainly focouses on backend part ,understanding and bulding clean and efficint code writting.It is also live on render.",
      image: airbnb_Logo,
       tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB","multer","cloudinary",],
       github: "https://github.com/Susanta5051/AIR_BNB_CLONE",
       webapp: "https://air-bnb-clone-1-nhyv.onrender.com/lists",
     },
     {
       id: 1,
       title: "BastraCollections",
       description:
         "Constructed a modern e-commerce solution using MERN technologies that is secured with JSON Web Tokens  for user authentication. The responsive interface was built with React.js and styled entirely using Tailwind CSS. Axios was employed for efficient API interactions, successfully deploying the final product on Vercel",
      image: bastra_Logo,
       tags: ["React.js","Express.js", "JavaScript", "Node.js", "MongoDB","cloudinary","multer","axios","material-ui","jsonwebtoken"],
       github: "https://github.com/Susanta5051/bastracollectionsweb",
       webapp: "https://bastracollectionsclient-um5z.vercel.app/",
     },
     {
      id: 2,
      title: "FoodApp",
      description:
        "Built a full-stack food delivery web app using MongoDB, Express, React, Node.js, and TypeScript. Implemented JWT-based authentication, restaurant creation & menu management, and core features like cart and order placement. Used Zustand for state management and shadcn/ui + Lucide for a responsive UI. ",
      image: foodapp_Logo,
      tags: ["React.js","Express.js", "TypeScript", "Node.js", "MongoDB","cloudinary","multer","axios","material-ui","jsonwebtoken","shadcn-ui","lucide-react"],
      github: "https://github.com/Susanta5051/foodapp",
      webapp: "https://foodapp-orcin-psi.vercel.app/",
    },
    {
      id: 3,
      title: "Connectify",
      description:
        "Constructed a scalable, instantaneous communication platform using Socket.io and Redux Toolkit to facilitate fluid, zero-latency message delivery. The responsive frontend architecture was built with React.js, utilizing a centralized state layer to seamlessly merge live WebSocket data feeds with the UI. The entire solution was backed by Node.js and Express, ensuring optimized connection management and a robust, modern user experience. ",
      image: connectify_Logo,
      tags: ["React.js","Express.js", "TypeScript", "Node.js", "MongoDB","cloudinary","multer","axios","material-ui","jsonwebtoken","shadcn-ui","lucide-react","socket-io"],
      github: "https://github.com/Susanta5051/connectify",
      webapp: "https://connectify-one-theta.vercel.app/",
    },
   ];  