import React from "react";
import styled from "styled-components";

const Socialmedia = () => {
  return (
    <StyledWrapper>
      <div className="card">
        {/* Instagram */}
        <a className="social-link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1em" viewBox="0 0 448 512">
            <path d="M224 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.4-115-115-115zM224 373c-80.3 0-145-64.7-145-145S143.7 83 224 83s145 64.7 145 145-64.7 145-145 145zm146.4-229.8c-14.2 0-25.8-11.5-25.8-25.8s11.5-25.8 25.8-25.8 25.8 11.5 25.8 25.8-11.5 25.8-25.8 25.8z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a className="social-link" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1em" viewBox="0 0 448 512">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
          </svg>
        </a>

        {/* Twitter (or X) */}
        <a className="social-link" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1em" viewBox="0 0 576 512">
            <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47z" />
          </svg>
        </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    display: flex;
    gap: 10px;
  }
  .social-link {
    display: inline-block;
    padding: 10px;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;

export default Socialmedia;
