
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Nsubuga Muhamood",
  title: "Hi all, I'm Muhamood",
  subTitle: emoji("A passionate Front-end Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Vuejs / Nodejs  and some other cool libraries and frameworks."),
  resumeLink: "https://docs.google.com/document/d/18jNQS7jtGCcxwTmXJgqc5bC5kdB46YycP8dhAirfw-A/edit#heading=h.ia67hw6jjos2"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/muhamood",
  linkedin: "https://www.linkedin.com/in/muhamood-nsubuga/",
  gmail: "nmuhamood30@gmail.com",
  gitlab: "https://gitlab.com/nmuhamood3",
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql & mongo database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front end Engineer (Contract)",  
      company: "Twelve Incs, Uganda",
      companylogo: require("./assets/images/twelve.png"),
      date: "Oct 2020 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Examined requirements and designed, developed and implemented application front end design interfaces.",
        "Worked with a variety of technologies inclusive of React, Redux, Material UI and Firebase."
      ]
    },
    {
      role: "Freelance Software Developer",   
      company: "Remote",
      companylogo: require("./assets/images/remote2.webp"),
      date: "Jan 2018 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Analyze requirements and design, develop and implement software applications for various clientele ranging from simple APIs to data analysis and visualization",
        "Discuss project progress with customers, collect feedback on different stages, and directly address concerns.",
        "Work with a variety of languages and technologies such as JavaScript, TypeScript, React, Vue, Node Express,  Mongo, Postgres, Firebase."
      ]
    },
    {
      role: "Web designer",  
      company: "Custom Engineering - Uganda",
      companylogo: require("./assets/images/customeng.jpeg"),
      date: "Nov 2017 – Sep 2018",
      desc: "Developed and maintained code for custom engineering website primarily using HTML, CSS, JavaScript, Python(Flask)."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "muhamood", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/guio.png"),
      link: "https://develop--app-guio.netlify.app/",
      
    },
    {
      image: require("./assets/images/bulksms2.png"),
      link: "https://sms-bulk.netlify.app/",
     
    },
    {
      image: require("./assets/images/customeng.jpeg"),
      link: "http://customengineering.org/",
      
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Responsive Web Design",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/image.png"),
      footerLink: [
        { name: "Certification", url: "https://freecodecamp.org/certification/muhamood/responsive-web-design" }
      ]
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/image.png"),
      footerLink: [
        { name: "Certification", url: "https://freecodecamp.org/certification/muhamood/javascript-algorithms-and-data-structures" }
      ]
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+256 75151 4503",
  email_address: "nmuhamood3@gmail.com"
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, contactInfo };
