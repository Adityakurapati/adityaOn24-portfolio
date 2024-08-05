import
{
        mobile,
        backend,
        creator,
        web,
        javascript,
        typescript,
        html,
        css,
        reactjs,
        redux,
        tailwind,
        nodejs,
        mongodb,
        git,
        figma,
        docker,
        meta,
        starbucks,
        tesla,
        shopify,
        carrent,
        jobit,
        tripguide,
        threejs,
        laravel, arduino, django, blender, jsp, wordpress, java,
        android,
        python, gov_project, blind_assist, env_project1, ipl_project, linux_project, load_project, pet_project, studygears_project, summarize_project
} from "../assets";

export const navLinks=[
        {
                id: "about",
                title: "About",
        },
        {
                id: "work",
                title: "Work",
        },
        {
                id: "contact",
                title: "Contact",
        },
];

const services=[
        {
                title: "Web Developer",
                icon: web,
        },
        {
                title: "React Native Developer",
                icon: mobile,
        },
        {
                title: "Backend Developer",
                icon: backend,
        },
        {
                title: "App Developer",
                icon: creator,
        },
];

const technologies=[
        {
                name: "HTML 5",
                icon: html,
        },
        {
                name: "CSS 3",
                icon: css,
        },
        {
                name: "JavaScript",
                icon: javascript,
        },
        {
                name: "TypeScript",
                icon: typescript,
        },
        {
                name: "React JS",
                icon: reactjs,
        },
        {
                name: "Redux Toolkit",
                icon: redux,
        },
        {
                name: "Tailwind CSS",
                icon: tailwind,
        },
        {
                name: "Node JS",
                icon: nodejs,
        },
        {
                name: "MongoDB",
                icon: mongodb,
        },
        {
                name: "Three JS",
                icon: threejs,
        },
        {
                name: "git",
                icon: git,
        },
        {
                name: "figma",
                icon: figma,
        },
        {
                name: "Laravel PHP",
                icon: laravel,
        },
        {
                name: "java",
                icon: java,
        },
        {
                name: "jsp",
                icon: jsp,
        },
        {
                name: "arduino",
                icon: arduino,
        },
        {
                name: "wordpress",
                icon: wordpress,
        },
        {
                name: "django",
                icon: django,
        },
        {
                name: "blender",
                icon: blender,
        },
];

const experiences=[
        {
                title: "Wordpress Developer ",
                icon: wordpress,
                iconBg: "#383E56",
                date: "April 2022 - june 2022",
                points: [
                        "Developed CMS For Government Polytechnic Solapur. "
                ],
        },
        {
                title: "Android Developer",
                icon: android,
                iconBg: "#383E56",
                date: "Jan 2023 - April 2023",
                points: [
                        "Developed The Cool Music App With Awesome Interface "
                ],
        },
        {
                title: "Node Js Developer",
                icon: nodejs,
                iconBg: "#383E56",
                date: "Aug 2022 - April 2024",
                points: [
                        "Developed The StudyGears Website Using Nodejs and  EJS | PUG For Providing Easy Access To Some Online Tech Courses Available On Udemy , ",
                        "Developer Linux Based File Organizer With C Library ana NodeJs"
                ],
        },
        {
                title: "Arduino IOT(Hardware)",
                icon: arduino,
                iconBg: "#E6DEDD",
                date: "Jan 2019 - Feb 2023",
                points: [
                        "Automated Heavy Load Monitoring System Using IOT Sensor Like load Cell , servo Motor , Rfid Controller, Arduino Uno",
                        "Pet Monitoring Web And Hardware based System With PIR Motion Sensor , Ultrasonic , Water Motor Dc",
                        "2019- UTurn Prevention System On Mountains"
                ],
        },
        {
                title: "React With Python",
                icon: python,
                iconBg: "#383E56",
                date: "Aug 2023 - April 2024",
                points: [
                        "AI Based IPL Winner Prediction Website Using Django with React",
                        "AI Video Summarization System For Easier Content Understanding(flask)",
                        "Smart Blind Assistant(Hardware+Web)",
                ],
        },
        {
                title: "PHP Laravel",
                icon: laravel,
                iconBg: "#383E56",
                date: "Feb 2024 - April 2024",
                points: [
                        "Web Application To show Real TIme air Quality with VIsuallization using DHT-11 , MQtt Sensor ",
                ],
        },
        {
                title: "NEXT JS",
                company_name: "Meta",
                icon: meta,
                iconBg: "#E6DEDD",
                date: "April 2024 - Present",
                points: [
                        "PMPML Passenger Monitoring System with NextJs , Redis",
                ],
        },
];

const testimonials=[
        {
                testimonial:
                        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
                name: "Sara Lee",
                designation: "CFO",
                company: "Acme Co",
                image: "https://randomuser.me/api/portraits/women/4.jpg",
        },
        {
                testimonial:
                        "I've never met a web developer who truly cares about their clients' success like Rick does.",
                name: "Chris Brown",
                designation: "COO",
                company: "DEF Corp",
                image: "https://randomuser.me/api/portraits/men/5.jpg",
        },
        {
                testimonial:
                        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
                name: "Lisa Wang",
                designation: "CTO",
                company: "456 Enterprises",
                image: "https://randomuser.me/api/portraits/women/6.jpg",
        },
];

const projects=[
        {
                name: "AI Video Summarizer Bot",
                description:
                        "A web platform that uses AssemblyAI to transcribe and summarize video content. Users can input video URLs or upload files, and the summarized text is presented through the website.",
                tags: [
                        {
                                name: "React",
                                color: "blue-text-gradient",
                        },
                        {
                                name: "Flask",
                                color: "green-text-gradient",
                        },
                        {
                                name: "NLP",
                                color: "pink-text-gradient",
                        },
                ],
                image: summarize_project, // Replace with actual image path
                source_code_link: "https://github.com/", // Replace with actual link if available
        },
        {
                name: "Linux File Organizer",
                description:
                        "A Node.js application that integrates with C programs to organize files on a Linux filesystem using BST and Heap Sort algorithms. The project focuses on efficient file management and sorting operations.",
                tags: [
                        {
                                name: "Node.js",
                                color: "blue-text-gradient",
                        },
                        {
                                name: "C",
                                color: "green-text-gradient",
                        },
                        {
                                name: "Linux",
                                color: "pink-text-gradient",
                        },
                ],
                image: linux_project,
                source_code_link: "https://github.com/", // Replace with actual link if available
        },
        {
                name: "ThirdEye Blind Assistant",
                description:
                        "An assistive technology project aimed at helping blind individuals in their daily lives using machine learning and IoT technologies. The project includes web development for interface and ESP32 microcontrollers for device integration.",
                tags: [
                        {
                                name: "Machine Learning",
                                color: "blue-text-gradient",
                        },
                        {
                                name: "IoT",
                                color: "green-text-gradient",
                        },
                        {
                                name: "Python",
                                color: "pink-text-gradient",
                        },
                ],
                image: blind_assist,
                source_code_link: "https://github.com/", // Replace with actual link if available
        },
        {
                name: "Environment Health Monitoring Device",
                description:
                        "A device designed to monitor environmental health parameters using sensors and microcontrollers, integrated with an IoT platform for data collection and visualization.",
                tags: [
                        {
                                name: "IoT",
                                color: "blue-text-gradient",
                        },
                        {
                                name: "ESP8266",
                                color: "green-text-gradient",
                        },
                        {
                                name: "Laravel",
                                color: "pink-text-gradient",
                        },
                ],
                image: env_project1,
                source_code_link: "https://github.com/", // Replace with actual link if available
        },
        {
                name: "Automated Heavy Load Monitoring System",
                description:
                        "An IoT-based system that monitors and controls vehicle load using RFID, load cells, and servo motors. The system ensures vehicles are loaded within safe limits.",
                tags: [
                        {
                                name: "IoT",
                                color: "blue-text-gradient",
                        },
                        {
                                name: "RFID",
                                color: "green-text-gradient",
                        },
                        {
                                name: "Microcontrollers",
                                color: "pink-text-gradient",
                        },
                ],
                image: load_project,
                source_code_link: "https://github.com/", // Replace with actual link if available
        },
        {
                name: "Pet Monitoring System using IoT and Node.js",
                description:
                        "A monitoring system that uses sensors to track pet activities and environmental conditions. Data is sent to a ThingSpeak server and displayed on a custom website.",
                tags: [
                        {
                                name: "IoT",
                                color: "blue-text-gradient",
                        },
                        {
                                name: "Node.js",
                                color: "green-text-gradient",
                        },
                        {
                                name: "PugJS",
                                color: "pink-text-gradient",
                        },
                ],
                image: pet_project,
                source_code_link: "https://github.com/", // Replace with actual link if available
        },
        {
                name: "IPL Winner Prediction using ML",
                description:
                        "A machine learning project that predicts IPL match outcomes based on historical data, player statistics, and other relevant features.",
                tags: [
                        {
                                name: "Machine Learning",
                                color: "blue-text-gradient",
                        },
                        {
                                name: "Python",
                                color: "green-text-gradient",
                        },
                        {
                                name: "Data Analysis",
                                color: "pink-text-gradient",
                        },
                ],
                image: ipl_project,
                source_code_link: "https://github.com/", // Replace with actual link if available
        },
        {
                name: "CMS for Study Material Monitoring",
                description:
                        "A content management system designed to facilitate easy access to lab manuals, past question papers, and syllabus documents for students.",
                tags: [
                        {
                                name: "WordPress",
                                color: "blue-text-gradient",
                        },
                        {
                                name: "PHP",
                                color: "green-text-gradient",
                        },
                        {
                                name: "MySQL",
                                color: "pink-text-gradient",
                        },
                ],
                image: gov_project,
                source_code_link: "https://github.com/", // Replace with actual link if available
        },
];


export { services, technologies, experiences, testimonials, projects };