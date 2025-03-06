import React from "react";
import styled from "styled-components";

const ContactUS = () => {
  return (
    <StyledWrapper>
      <div className="contact-container">
        {/* Left Side Content */}
        <div className="content-section">
          <h1>Get in Touch</h1>
          <h2>Let's Start a Conversation</h2>
          <p>
            Whether you have a question about our services, need a custom
            solution, or just want to say hello, we're here to help. Our team is
            ready to assist you and provide the support you need.
          </p>
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p>contact@example.com</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="info-item">
              <h3>Address</h3>
              <p>
                123 Business Street, Suite 100
                <br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
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
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  padding: 2rem 0;

  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
    align-items: center;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .content-section {
    color: white;
    padding: 2rem;

    h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      background: linear-gradient(to right, #b91c1c, #ff99cc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: #f4f3f3;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #f4f3f3;
      margin-bottom: 2rem;
    }

    .contact-info {
      margin-top: 2rem;
      border-left: 3px solid #b91c1c;
      padding-left: 2rem;

      .info-item {
        margin-bottom: 1.5rem;
        transition: transform 0.3s ease;

        &:hover {
          transform: translateX(10px);
        }

        h3 {
          font-size: 1.2rem;
          color: #b91c1c;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
      }
    }
  }

  #form {
    display: grid;
    place-items: center;
    width: 100%;
    max-width: 800px;
    height: auto;
    padding: 25px;
    background: linear-gradient(to right, #b91c1c, rgb(89, 5, 122));
    box-shadow: 0px 15px 60px rgba(85, 2, 24, 0.56);
    backdrop-filter: blur(10px);
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
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;

    &:hover {
      border-bottom-color: rgba(255, 255, 255, 0.4);
    }
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
    color: rgb(244, 234, 234);
    background-color: transparent;
    font-weight: 600;
    font-size: 14px;
    margin: 0;
    border-radius: 5px;
    padding: 14px 13px;
    border: 0;
    outline: 1px solid rgba(214, 190, 196, 0);
    line-height: 1;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }

  #submit-button:hover {
    background-color: rgb(228, 12, 66);
    color: #1a001a;
    cursor: pointer;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 1rem;

    .contact-container {
      padding: 1rem;
      gap: 3rem;
    }

    #form {
      width: 100%;
      max-width: 370px;
    }

    .content-section {
      padding: 1rem;
      text-align: center;

      h1 {
        font-size: 2.5rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }

      .contact-info {
        border-left: none;
        border-top: 3px solid #b91c1c;
        padding-left: 0;
        padding-top: 2rem;
        text-align: left;
      }
    }
  }
`;

export default ContactUS;
