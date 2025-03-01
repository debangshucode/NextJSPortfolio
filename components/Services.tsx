import React from "react";
import styled from "styled-components";

const Services = () => {
  const skillsData = [
    {
      title: "Front-End Skills",
      skills: [
        "Vue/Vuex",
        "React/Redux",
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "Grid",
        "FlexBox",
        "SASS/LESS",
        "Webpack",
        "Gulp",
        "Three.js/Babylon.js",
        "FabricJs",
        "Material UI",
        "Shopify",
        "WordPress",
        "Craft",
      ],
    },
    {
      title: "Back-End Skills",
      skills: [
        "PHP",
        "JavaScript",
        "Liquid",
        "Python",
        "Laravel",
        "Node/Express",
        "RoR",
        "Django",
        "RESTful API",
        "GraphQL",
        "MySQL/PostgreSQL",
        "MongoDB",
        "CMS DevOps",
        "CI/CD",
      ],
    },
    {
      title: "Other Skills",
      skills: [
        "Git/Bitbucket/GitLab",
        "Jira",
        "Trello",
        "AWS Services",
        "CloudFlare",
        "Apache",
        "Nginx",
        "Linux",
        "Prox",
        "Dashboard Designing",
        "Power BI",
      ],
    },
  ];

  return (
    <StyledWrapper>
      <h1 className="heading">
        Our <span className="text-red-700">Services</span>
      </h1>
      <div className="cards-container">
        {skillsData.map((category, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">{category.title}</p>
                <p>Show Skills</p>
              </div>
              <div className="flip-card-back">
                <p className="title">{category.title}</p>
                <div className="skills-container">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="skill-box">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 30px;
    justify-content: center;
    padding: 20px;
  }

  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 410px;
    perspective: 1000px;
    font-family: sans-serif;
  }

  .title {
    font-size: 1.2em;
    font-weight: 900;
    text-align: center;
    margin-bottom: 10px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid coral;
    border-radius: 1rem;
    padding: 15px;
  }

  .flip-card-front {
    background: linear-gradient(
      120deg,
      #1a0000 60%,
      #4b0018 88%,
      #6a0032 40%,
      #8a2be2 48%
    );
    color: #ffb6c1;
  }

  .flip-card-back {
    background: linear-gradient(
      120deg,
      #2c001e 30%,
      #4b0032 88%,
      #6a003f 40%,
      #8a2be2 78%
    );
    color: white;
    transform: rotateY(180deg);
    overflow-y: auto;
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    max-width: 100%;
    padding: 10px;
  }

  .skill-box {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 5px 10px;
    font-size: 0.85em;
    font-weight: 600;
    color: white;
    text-align: center;
    white-space: nowrap;
  }
`;

export default Services;
