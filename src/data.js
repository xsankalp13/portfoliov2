import p1 from "./assets/Projects/portfolio-project.png";
import p2 from "./assets/Projects/image-genration.png";
import p3 from "./assets/Projects/gpt3-landingpage.png";
import p4 from "./assets/Projects/todoapp_image.png";
import p5 from "./assets/Projects/sushiman.png";
import p6 from "./assets/Projects/chumHire.png";

export const filters = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Landing Page",
        id: "landing-page",
    },
    {
        name: "CURD Operations",
        id: "curd",
    },
    {
        name: "Website",
        id: "website",
    },
];

export const projects = [
    {
        name: "My previous Personal PortFolio",
        image: p1,
        tags: ["website", "landing-page"],
    },
    {
        name: "Image Generation Ai with the Help of OpenAPI",
        image: p2,
        tags: ["curd", "website"],
    },
    {
        name: "GPT-3 Landing Page",
        image: p3,
        tags: ["landing-page"],
    },
    {
        name: "A Todo App with user Authentication",
        image: p4,
        tags: ["curd"],
    },
    {
        name: "A Sushi Hotel's Landing Page",
        image: p5,
        tags: ["website", "landing-page"],
    },
    {
        name: "ChumHire My Personal Project",
        image: p6,
        tags: ["website"],
    },
];

export const achievements = [
    {
        id: 1,
        year: 8,
        description: "SUCCESSFULLY<br />COMPLETED<br />PERSONAL PROJECTS",
    },
    {
        id: 2,
        year: 1.5,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 25,
        description: "TECHNOLOGIES",
    },
    {
        id: 4,
        year: 40,
        description: "COMMUNITY<br />POSTS",
    },
];
