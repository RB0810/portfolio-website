export const linklist = [
  { id: 0, text: "Home", link: "#home" },
  { id: 1, text: "Skills", link: "#skills" },
  { id: 2, text: "Experience", link: "#experience" },
  { id: 3, text: "Projects", link: "#projects" },
  //{ id: 4, text: "Blog", link: "/contact" },
];
export const hero = [
  {
    id: 1,
    title: "Cups of Coffee",
    text: "800",
  },
  {
    id: 2,
    title: "Technologies",
    text: "17",
  },
  {
    id: 3,
    title: "Projects",
    text: "15",
  },
  {
    id: 4,
    title: "Lines of Code",
    text: "9382",
  },
];


export const projects = [
  {
    id: 1,
    title: "VisioAssist",
    type: ["IoT", "AI"],
    desc: "A pair of smart glasses for the visually impaired using OCR technology to convert real-time text to speech, and facilitating emergency contacts to access a live feed through a mobile app.",
    cover: "./images/portfolio/visio-assist.png",
    github: "https://github.com/RB0810/VisioAssist",
    video: "https://youtu.be/O5nDXE7XUxE",
  },
  {
    id: 2,
    title: "Housing Portal",
    type: ["website"],
    desc: "A web portal for tenants to raise housing tickets and for landlords go effectively manage and assign these tickets to staff members making communication and management easier.",
    cover: "./images/portfolio/housing-portal.png",
    github: "https://github.com/RB0810/Housing-Ticket-Managing-System",
    video: "https://youtu.be/y3eBS4il44k",
  },
  {
    id: 3,
    title: "BrewLogi",
    type: ["app"],
    desc: "A full-stack Android app for Heineken to manage large scale events, enabling users to order beer and organizers to track inventory, receive low stock alerts, and monitor product performance with charts and graphs.",
    cover: "./images/portfolio/brewlogi.png",
    github: "https://github.com/RB0810/BrewLogi",
    video: "https://youtu.be/hLti-yn6gL0",
  },
  {
    id: 4,
    title: "BondGenie",
    type: ["website", "AI"],
    desc: "An AI-driven website for Relationship Managers to compare different investment options and simulate different results based on client portfolio so as to get the best fit for each client.",
    cover: "./images/portfolio/bondgenie.png",
    github: "",
    video: "https://youtu.be/rtqbNsh0-Yw",
  },
  {
    id: 5,
    title: "Feeding.io",
    type: ["website"],
    desc: "A website aimed at mitigating food waste, by helping merchants give away the excess food they have left at the end of the day for rallies, campaigns and/or at a cheaper rate to buyers.",
    cover: "./images/portfolio/feedingio.png",
    github: "",
    video: "",
  },
  {
    id: 6,
    title: "OccupEye",
    type: ["app", "AI"],
    desc: "A Full Stack Android Application that detects the occupancy levels of a room using Computer Vision and relays the information to the user.",
    cover: "./images/portfolio/occupeye.png",
    github: "https://github.com/RB0810/OccupEye",
    video: "https://youtu.be/OqaWKkNVCiI",
  },
  
  {
    id: 7,
    title: "Semantic Analysis",
    type: ["AI"],
    desc: "A machine learning model for sentiment analysis exploring the Hidden Markov Model and some of its variations like trigram HMM, checking which variation suits the best.",
    cover: "./images/portfolio/semantic.jpeg",
    github: "https://github.com/RB0810/Sentiment-Analysis",
    video: "",
  },
  {
    id: 8,
    title: "BattleField",
    type: ["IoT"],
    desc: "A fun 2 player hardware game testing your intuition, wherein you need to guess the button pressed by the other player using some reverse psychology and his/her previous presses.",
    cover: "./images/portfolio/battlefield.png",
    github: "https://github.com/RB0810/BattleField",
    video: "https://youtu.be/FcB7yy0EGB0",
  },
  {
    id: 9,
    title: "Mastermind Game",
    type: ["app"],
    desc: "A color sequence guessing game using Python and the tkinter library, incorporating clues and hints for users to solve within a limited number of attempts, akin to a color-based version of Wordle.",
    cover: "./images/portfolio/mastermins.jpeg",
    github: "https://github.com/RB0810/Python---Game-Mastermind",
    video: "",
  },
];

export const experienceData = [
  {
    id: 1,
    time: "Aug 2024 - Present",
    title: "Tech Lead",
    institute: "Horizon Labs",
    desc: "I manage a team of 15+ engineers, from setting up the Azure Container App infrastructure for our backend and building the product website to planning sprints and SCRUM meetings.",
    logo: "./images/experience/horizon.jpeg",
  },
  {
    id: 2,
    time: "May 2024 - Aug 2024",
    title: "Cloud Engineer Intern",
    institute: "Ernst & Young",
    desc:"Enhanced system performance by 35% through load balancing solutions and traffic management, ensured security with NSGs and encryption for a government client, optimized CI/CD pipelines reducing deployment times by 15%, and transitioned infrastructure from Terraform to Azure Verified Modules.",
    logo: "./images/experience/ey.png",
  },
  {
    id: 3,
    time: "Jan 2024 - May 2024",
    title: "Full Stack Developer",
    institute: "Rapidnode",
    desc:"I developed the company’s website offering one-click deployments for Web3 DeFi applications and integrated smart contract functionality, enabling secure and seamless DeFi transactions directly through the platform.",
    logo: "./images/experience/rapidnode.png",
  },
  {
    id: 4,
    time: "Aug 2023 - Dec 2023",
    title: "Software Engineer Intern",
    institute: "Ernst & Young",
    desc:"I developed 50+ screens using React and TypeScript, built and tested 20+ .NET APIs, and integrated the backend APIs with the frontend environment. I also built and integrated complex features like cron jobs, service bus and authentication using Azure Active Directory.",
    logo: "./images/experience/ey.png",
  },
  {
    id: 5,
    time: "May 2022  - Dec 2022",
    title: "Full Stack Developer",
    institute: "Blockverse Media",
    desc:"Built the company's website during its initial startup phase, enhancing user experience and resulting in a 40% increase in user engagement.",
    logo: "./images/experience/blockverse.jpeg",
  },
  {
    id: 6,
    time: "May 2020  - Sep 2021",
    title: "Co-Founder",
    institute: "DigitAge",
    desc:"Developed tailor-made websites for 10+ companies and social organization, to boost their digital presence and reach. Received positive feedback from 100% of the clients. ",
    logo: "./images/experience/digitage.png",
  },
];

export const skillsData = [
  { id: 1, name: "Python", icon: "./images/skill/python.svg" },
  { id: 2, name: "Java", icon: "./images/skill/java.svg" },
  { id: 3, name: "Tailwind", icon: "./images/skill/tailwindcss-icon.svg" },
  { id: 4, name: "TypeScript", icon: "./images/skill/typescript-icon.svg" },
  { id: 5, name: "React", icon: "./images/skill/react.svg" },
  { id: 6, name: "JavaScript", icon: "./images/skill/javascript.svg" },
  { id: 7, name: "NodeJS", icon: "./images/skill/nodejs.svg" },
  { id: 8, name: ".NET", icon: "./images/skill/c-sharp.svg" },
  { id: 9, name: "Express", icon: "./images/skill/express.png" },
  { id: 10, name: "MongoDB", icon: "./images/skill/mongodb-icon.svg" },
  { id: 11, name: "SQL", icon: "./images/skill/mysql-icon.svg" },
  { id: 12, name: "Azure", icon: "./images/skill/microsoft-azure.svg" },
  { id: 13, name: "Docker", icon: "./images/skill/docker-icon.svg" },
  { id: 14, name: "Kubernetes", icon: "./images/skill/kubernetes.svg" },
  { id: 15, name: "Terraform", icon: "./images/skill/terraform-icon.svg" },
  { id: 16, name: "Git", icon: "./images/skill/git-icon.svg" },
  { id: 17, name: "Solidity", icon: "./images/skill/solidity.svg" },
];

export const blogs = [
  {
    id: 1,
    image: "./images/blog/b1.jpg",
    date: "Creating",
    title: "Innovative Solutions",
  },
  {
    id: 2,
    image: "./images/blog/b6.jpg",
    date: "Building",
    title: "Scalable Infrastructure",
  },
  {
    id: 3,
    image: "./images/blog/b3.jpg",
    date: "Exploring",
    title: "Emerging Trends",
  },
  {
    id: 4,
    image: "./images/blog/b4.jpg",
    date: "Designing",
    title: "Engaging Visuals",
  }
];