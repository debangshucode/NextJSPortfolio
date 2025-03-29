import { socialMedia } from "@/data";
import React from "react";
import styled from "styled-components";

const Socialmedia = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <a
          className="social-link1"
          href="https://www.instagram.com/sy_stem.r/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M224 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.4-115-115-115zm0 190c-41.4 0-75-33.6-75-75s33.6-75 75-75 75 33.6 75 75-33.6 75-75 75zm146.4-194.8c0 14.2-11.5 25.8-25.8 25.8s-25.8-11.5-25.8-25.8 11.5-25.8 25.8-25.8 25.8 11.5 25.8 25.8zM448 152c0-42.6-34.5-77.1-77.1-77.1H77.1C34.5 75 0 109.5 0 152v208c0 42.6 34.5 77.1 77.1 77.1h293.8c42.6 0 77.1-34.5 77.1-77.1V152zM224 373c-80.3 0-145-64.7-145-145S143.7 83 224 83s145 64.7 145 145-64.7 145-145 145zm146.4-229.8c-14.2 0-25.8-11.5-25.8-25.8s11.5-25.8 25.8-25.8 25.8 11.5 25.8 25.8-11.5 25.8-25.8 25.8z" />
          </svg>
        </a>

        <a
          className="social-link2"
          href="https://www.linkedin.com/company/systemr"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            fill="#fff"
          >
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
          </svg>{" "}
        </a>

        <a
          className="social-link4"
          href="https://www.facebook.com/share/1F9UYfvGGb/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            fill="#fff"
          >
            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
          </svg>
        </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    display: flex;
    height: 40px;
    width: 250px;
    justify-content: center;
  }

  .card svg {
    position: absolute;
    display: flex;
    width: 60%;
    height: 100%;
    font-size: 18px;
    font-weight: 700;
    opacity: 1;
    transition: opacity 0.25s;
    z-index: 2;
    cursor: pointer;
  }

  .card .social-link1,
  .card .social-link2,
  .card .social-link3,
  .card .social-link4 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    color: whitesmoke;
    font-size: 18px;
    text-decoration: none;
    transition: 0.25s;
    border-radius: 50px;
  }

  .card svg {
    transform: scale(1);
  }

  .card .social-link1:hover {
    background: linear-gradient(
      45deg,
      #f09433,
      #e6683c,
      #dc2743,
      #cc2366,
      #bc1888
    );
    animation: bounce_613 0.4s linear;
  }

  .card .social-link2:hover {
    background-color: #0a66c2;
    animation: bounce_613 0.4s linear;
  }

  .card .social-link3:hover {
    background-color: #0059f7;
    animation: bounce_613 0.4s linear;
  }

  .card .social-link4:hover {
    background-color: #1d4292;
    animation: bounce_613 0.4s linear;
  }

  @keyframes bounce_613 {
    40% {
      transform: scale(1.4);
    }

    60% {
      transform: scale(0.8);
    }

    80% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }
  @media (max-width: 600px) {
    .card .social-link1,
    .card .social-link2,
    .card .social-link3,
    .card .social-link4 {
      width: 20%;
    }
  }
`;

export default Socialmedia;
