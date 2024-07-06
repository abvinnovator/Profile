import React from 'react';
import { Carousel } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const projects = [
  {
    images: [
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1720014556/Screenshot_2024-07-02_140817_u9bvwm.png',
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1720014556/Screenshot_2024-07-02_140958_yq1h2a.png',
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1720014555/Screenshot_2024-07-02_140931_k7v5cw.png'
    ],
    title: 'Ecommerce-Store',
    description: 'This project implements an Ecommerce platform using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes user authentication, admin functionalities, cart management, product search, and detailed product viewing.',
    url: 'https://project1.example.com',
    git: 'https://github.com/abvinnovator/Ecommerce-MERN'
  },
  {
    images: [
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545792/profile/s7ake4ffc8hg599rrytt.png',
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545790/profile/eqqewrjo5o6ybdtjaumk.png',
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545790/profile/zvhppgf1endgga2vcobl.png',
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545790/profile/xpj1sueik3a9hbie8vmc.png'
    ],
    title: 'Student Community',
    description: 'This project is done by using MERN technologies, in this project user can login/signup and create posts that visible to everyone, and can chat with other users also by using react-chatengine I have integrated chat',
    url: 'https://project1.example.com',
    git: 'https://github.com/abvinnovator/Student-community'
  },
  {
    images: [
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545789/profile/xivfmzngjjbfvwtgq1y9.png',
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545789/profile/qpiozlcrauznarwtklwz.png'
    ],
    title: 'Projectopia',
    description: 'This is made by using Firebase+Reactjs in this user can authenticate by using firebaseAuth and showcase their projects to the public and also I have included pagination and SEO!!',
    url: 'https://project2.example.com',
    git: 'https://github.com/abvinnovator/Projectopia'
  },
  {
    images: [
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545789/profile/hhlb1mdmvcfregjpvs5u.png',
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545791/profile/j25sqpjdlyjt5mtel1g1.png',
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545789/profile/bhhwjgsjje9zuohsyilf.png'
    ],
    title: 'RecipeShare',
    description: 'This is made by using Mysql+Reactjs in this user can showcase their recipes to the public and this is a basic CRUD application in Mysql+Reactjs but I have used Multer for storing Images!!',
    url: 'https://project2.example.com',
    git: 'https://github.com/abvinnovator/Recipe-share'
  },
  {
    images: [
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545791/profile/s0kbwbwfjgd4fzcxqsnf.png',
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545791/profile/yuovajn1nsteiqfs9fjo.png'
    ],
    title: 'ExpenseTracker',
    description: 'This is made by using Firebase+Reactjs in this user can authenticate by using firebaseAuth and store all user expenses to track their expenses, income...',
    url: 'https://expense-tracker-d68da.web.app/',
    git: 'https://github.com/abvinnovator/Expense-Tracker'
  },
  {
    images: [
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545790/profile/moxirlqazezf9ewcmefz.png'
    ],
    title: 'Promptopia',
    description: 'Promptopia is a web application where users can login and create, edit, and delete prompts. Users can also search for prompts using tags. This project was built using Next.js and MongoDB',
    url: 'https://nextjs-crud-l4fj-jixrsa36x-vamsis-projects-50491380.vercel.app/',
    git: 'https://github.com/abvinnovator/Nextjs-CRUD'
  },
  {
    images: [
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545790/profile/kwibv4u0npma5wbekrh3.png',
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545791/profile/gvth0rs7pnab8l0fmrgv.png'
    ],
    title: 'Online Discount Store',
    description: 'This was just a static website using Reactjs+Redux',
    url: 'https://abvdiscounts.netlify.app/',
    git: 'https://github.com/abvinnovator/Online-Discount-Store'
  }
];

const Projects = ({darkMode}) => {
  return (
    <div className={`bg-white ${darkMode ? 'dark:bg-gray-900 text-gray-200' : 'text-gray-800'} min-h-screen  transition-all duration-500`}>
    <div className="container mx-auto p-4 text-gray-800 dark:text-gray-200">
      <h1 className="text-center text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
            <Carousel autoplay autoplaySpeed={4000}>
              {project.images.map((img, imgIndex) => (
                <div key={imgIndex}>
                  <img className="w-full" src={img} alt={`Project ${index + 1} Image ${imgIndex + 1}`} />
                </div>
              ))}
            </Carousel>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500">
                  {project.title}
                </a>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base">
                {project.description}
              </p>
              <a href={project.git} className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
                <GithubOutlined />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Projects;
