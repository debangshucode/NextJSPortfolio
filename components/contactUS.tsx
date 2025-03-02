import React from "react";
import styled from "styled-components";

const ContactUS = () => {
  return (
    <StyledWrapper>
      <div id="form-ui">
        <form action="#" method="post" id="form">
          <div id="form-body">
            <div id="welcome-lines">
              <div id="welcome-line-1">Contact Us</div>
              <div id="welcome-line-2">We'd love to hear from you!</div>
            </div>
            <div id="input-area">
              <div className="form-inp">
                <input placeholder="Full Name" type="text" required />
              </div>
              <div className="form-inp">
                <input placeholder="Phone Number" type="tel" required />
              </div>
              <div className="form-inp">
                <input placeholder="Email Address" type="email" required />
              </div>
              <div className="form-inp">
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
            <div id="submit-button-cvr">
              <button id="submit-button" type="submit">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #form {
    display: grid;
    place-items: center;
    width: 800px;
    height: auto;
    padding: 25px;
    background-color: rgba(22, 3, 3, 0.75);
    box-shadow: 0px 15px 60px rgb(24, 1, 7);
    outline: 1px solid rgba(299, 9, 20);
  }

  #form-body {
    position: relative;
    width: 100%;
    text-align: center;
  }

  #welcome-lines {
    text-align: center;
    line-height: 1;
  }

  #welcome-line-1 {
    color: rgb(241, 236, 238);
    font-weight: 600;
    font-size: 28px;
  }

  #welcome-line-2 {
    color: #ffffff;
    font-size: 16px;
    margin-top: 10px;
  }

  #input-area {
    margin-top: 30px;
  }

  .form-inp {
    padding: 12px 15px;
    background: transparent;

    line-height: 1;
    margin-bottom: 15px;
    width: 100%;
  }

  .form-inp input,
  .form-inp textarea {
    width: 100%;
    background: none;
    font-size: 14px;
    color: rgb(244, 243, 243);
    border: none;
    padding: 0;
    margin: 0;
    resize: none;
  }

  .form-inp input:focus,
  .form-inp textarea:focus {
    outline: none;
    border-bottom: 2px solid rgb(234, 224, 227);
  }

  #submit-button-cvr {
    margin-top: 20px;
  }

  #submit-button {
    display: block;
    width: 100%;
    color: #f40b0b;
    background-color: transparent;
    font-weight: 600;
    font-size: 14px;
    margin: 0;
    padding: 14px 13px;
    border: 0;
    outline: 1px solid rgb(142, 10, 43);
    line-height: 1;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }

  #submit-button:hover {
    background-color: rgb(228, 12, 66);
    color: #1a001a;
    cursor: pointer;
  }

  #bar {
    position: absolute;
    left: 50%;
    bottom: -30px;
    width: 28px;
    height: 8px;
    margin-left: -14px;
    background-color: #ff3366;
    border-radius: 10px;
  }

  #bar:before,
  #bar:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #ff99cc;
    border-radius: 50%;
  }

  #bar:before {
    right: -20px;
  }

  #bar:after {
    right: -38px;
  }
  @media (max-width: 768px) {
    #form {
      width: 370px;
    }
  }
`;

export default ContactUS;
