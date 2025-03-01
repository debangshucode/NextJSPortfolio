import React from "react";
import styled from "styled-components";

// Define the expected prop types
interface CardProps {
  heading: string;
  skills: string[];
}

const Card: React.FC<CardProps> = ({ heading, skills }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__border" />
        <div className="card_title__container">
          <span className="card_title">{heading}</span>
          <p className="card_paragraph">{`Expertise in ${heading} development.`}</p>
        </div>
        <hr className="line" />
        <ul className="card__list">
          {skills.map((skill, index) => (
            <li key={index} className="card__list_item">
              <span className="check">
                <svg
                  className="check_svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
              <span className="list_text">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </StyledWrapper>
  );
};

// Styled components remain the same
const StyledWrapper = styled.div`
  /* Container Styling */
  .card {
    --white: hsl(0, 0%, 100%);
    --black: hsl(240, 15%, 9%);
    --paragraph: hsl(0, 0%, 83%);
    --line: hsl(240, 9%, 17%);
    --primary: hsl(189, 92%, 58%);

    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    width: 22rem;
    background: rgba(33, 11, 19, 0.6); /* Transparent base */
    border-radius: 1rem;
    box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.15) inset;
    backdrop-filter: blur(12px); /* Blur effect */
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  /* Gradient Background */
  body {
    background: linear-gradient(135deg, #210b13, #3b1725, #571f35);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card .card_title__container .card_title {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--white);
  }

  .card .card_title__container .card_paragraph {
    font-size: 0.9rem;
    color: var(--paragraph);
  }

  .card .line {
    height: 0.1rem;
    background-color: var(--line);
    border: none;
  }

  .card .card__list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .card .card__list .card__list_item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.4rem 0.75rem;
    border-radius: 0.5rem;
  }

  .card .card__list .card__list_item .check {
    width: 1rem;
    height: 1rem;
    background-color: var(--primary);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list_text {
    font-size: 0.9rem;
    color: var(--white);
  }
`;

export default Card;
