import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUS = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const maxChars = 300;
  const [phone, setPhone] = useState("+91"); // Default country code (India)
  const validateName = (name: string): boolean => /^[A-Za-z\s]+$/.test(name);
  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string): boolean => /^\d{10,15}$/.test(phone); // Adjust length as needed

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;

    if (name === "message") {
      if (value.length > maxChars) return; // Prevent typing beyond 300 characters
      setCharCount(value.length);
    }

    // Capitalize first letter of each word in "name" field
    if (name === "name") {
      value = value
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase());
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value: string, country: any) => {
    const countryCode = `+${country.dialCode}`;

    // Prevent the user from deleting the country code
    if (!value.startsWith(countryCode)) {
      value = countryCode; // Reset to the correct country code
    }

    setPhone(value);
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  // 🔥 Prevent Backspace/Delete on Country Code
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const cursorPosition = input.selectionStart || 0; // Cursor position

    // Disable Backspace/Delete when inside the country code
    if (
      (e.key === "Backspace" || e.key === "Delete") &&
      cursorPosition <= phone.length
    ) {
      e.preventDefault();
    }
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.message.length >= 10 &&
    !Object.values(errors).some((error) => error);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    emailjs
      .send(
        "service_lnzeqr8",
        "template_v074snk",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "-FmMuHY6GM5lEStfv"
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setIsSent(true);
          setFormData({ name: "", phone: "", email: "", message: "" });
          setCharCount(0);
        },
        (error) => {
          console.log("Email sending failed:", error);
        }
      );
  };

  return (
    <StyledWrapper>
      <div className="contact-container">
        <div className="content-section">
          <h1>Get in Touch</h1>
          <h2>Let's Start a Conversation</h2>
          <p>
            Whether you have a question about our services, need a custom
            solution, or just want to say hello, we&apos;re here to help.
          </p>
        </div>

        <div id="form-ui">
          <form id="form" onSubmit={sendEmail}>
            <div id="form-body">
              <div id="welcome-lines">
                <div id="welcome-line-1">Contact Us</div>
                <div id="welcome-line-2">We&apos;d love to hear from you!</div>
              </div>

              <div id="input-area">
                <div className="form-inp">
                  <input
                    name="name"
                    placeholder="Full Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div className="form-inp phone-input">
                  <PhoneInput
                    country="in"
                    value={phone}
                    onChange={handlePhoneChange}
                    inputProps={{
                      required: true,
                      autoComplete: "off",
                      onKeyDown: handleKeyDown, // Attach keydown event
                    }}
                    inputStyle={{
                      width: "100%",
                      background: "transparent",
                      color: "white",
                      border: "none",
                      fontSize: "2.2vw",
                      paddingLeft: "4rem",
                    }}
                    buttonStyle={{
                      border: "2px solid #FFD700",
                      background: "transparent",
                      borderRadius: "5px",
                      padding: "0.4rem",
                      marginRight: "0.8rem",
                      maxWidth: "50px",
                    }}
                    containerStyle={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                    dropdownStyle={{
                      border: "none",
                      background: "#333",
                    }}
                  />
                  {errors.phone && <p className="error">{errors.phone}</p>}
                </div>

                <div className="form-inp">
                  <input
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="form-inp">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <p style={{ color: charCount === maxChars ? "red" : "gray" }}>
                    {charCount}/{maxChars} characters
                  </p>
                  {errors.message && <p className="error">{errors.message}</p>}
                </div>
              </div>

              <div id="submit-button-cvr">
                <button
                  id="submit-button"
                  type="submit"
                  disabled={!isFormValid}
                >
                  Send Message
                </button>
              </div>

              {isSent && (
                <p style={{ color: "white", marginTop: "10px" }}>
                  Message Sent Successfully!
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  padding: 2rem 0;

  .phone-input {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .phone-input .react-tel-input {
    width: 100%;
  }

  .phone-input .react-tel-input .flag-dropdown.open {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }

  .phone-input .react-tel-input .selected-flag {
    padding: 5px;
    background: transparent !important;
  }

  .phone-input .react-tel-input .country-list {
    background: #222 !important; /* Dark background */
    border-radius: 8px !important;
    border: 1px solid #ffd700 !important; /* Golden border */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2) !important;
  }

  .phone-input .react-tel-input .country-list .country {
    color: white !important;
    padding: 10px !important;
    transition: background 0.3s ease-in-out;
  }

  .phone-input .react-tel-input .country-list .country:hover {
    background: #444 !important;
  }

  .phone-input .react-tel-input .selected-flag:focus {
    outline: none !important;
    box-shadow: none !important;
  }
  .phone-input .react-tel-input .country-list {
    overflow-y: auto !important;
    scrollbar-width: none !important; /* For Firefox */
    -ms-overflow-style: none !important; /* For Internet Explorer & Edge */
  }

  .phone-input .react-tel-input .country-list::-webkit-scrollbar {
    display: none !important;
  }

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
    border-radius: 10px;
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
      gap: 0;
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
