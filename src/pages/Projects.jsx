import React from 'react';
import { Carousel } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const projects = [
  {
    images: [
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545792/profile/s7ake4ffc8hg599rrytt.png',
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545790/profile/eqqewrjo5o6ybdtjaumk.png',
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545790/profile/zvhppgf1endgga2vcobl.png',
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545790/profile/xpj1sueik3a9hbie8vmc.png'
      
    ],
    title: 'Student Community',
    description: 'This project is done by using MERN technologies, in this project user can login/signup and create posts that visible to evryone,and can able to chat with other users also by using react-chatengine i have integrated chat',
    url: 'https://project1.example.com',
    git:'https://github.com/abvinnovator/Student-community'
    
  },
  {
    images: [
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545789/profile/xivfmzngjjbfvwtgq1y9.png',
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545789/profile/qpiozlcrauznarwtklwz.png',
    ],
    title: 'Projectopia',
    description: 'This is made by using Firebase+Reactjs in this user can authenciate by using firebaseAuth and showcase their projects to public and also i have included pagination and SEO!!.',
    url: 'https://project2.example.com',
    git:'https://github.com/abvinnovator/Projectopia'
  },
  {
    images: [
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545789/profile/hhlb1mdmvcfregjpvs5u.png',
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545791/profile/j25sqpjdlyjt5mtel1g1.png',
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545789/profile/bhhwjgsjje9zuohsyilf.png'
    ],
    title: 'RecipeShare',
    description: 'This is made by using Mysql+Reactjs in this user can  showcase their recipes to public and this is a basic CRUD application in mysql+reactjs but i have used Multer for storing Images!!',
    url: 'https://project2.example.com',
    git:'https://github.com/abvinnovator/Recipe-share'
  },
   {
    images: [
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545791/profile/s0kbwbwfjgd4fzcxqsnf.png',
      'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545791/profile/yuovajn1nsteiqfs9fjo.png',
    ],
    title: 'ExpenseTracker',
    description: 'This is made by using Firebase+Reactjs in this user can authenciate by using firebaseAuth and store all user expenses to track their expenses,income...',
    url: 'https://expense-tracker-d68da.web.app/',
    git:'https://github.com/abvinnovator/Expense-Tracker'
  },
  {
  images:[
    'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545790/profile/moxirlqazezf9ewcmefz.png'
  ],
  title: 'Promptopia',
  description:'Promptopia is a web application where users can login and create, edit, and delete prompts. Users can also search for prompts using tags.This project was built using Next.js and MongoDB',
  url:'https://nextjs-crud-l4fj-jixrsa36x-vamsis-projects-50491380.vercel.app/',
  git:'https://github.com/abvinnovator/Nextjs-CRUD'
},
{
  images:[
    'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545790/profile/kwibv4u0npma5wbekrh3.png',
    'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545791/profile/gvth0rs7pnab8l0fmrgv.png'
  ],
  title: 'Online Discount Store',
  description:'This was just a static wbsite used Reactjs+Redux',
  url:'https://abvdiscounts.netlify.app/',
  git:'https://github.com/abvinnovator/Online-Discount-Store'
}
];

const Projects = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className='text-center text-4xl font-bold mb-8'>My Projects</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
            <Carousel autoplay autoplaySpeed={4000}>
              {project.images.map((img, imgIndex) => (
                <div key={imgIndex}>
                  <img className="w-full" src={img} alt={`Project ${index + 1} Image ${imgIndex + 1}`} />
                </div>
              ))}
            </Carousel>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  {project.title}
                </a>
              </div>
              <p className="text-gray-700 text-base">
                {project.description}
              </p>
             <a href={project.git}> <p><GithubOutlined /></p></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
