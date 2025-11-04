import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: #fff;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
`;

const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterSection = styled.div`
  margin: 1rem;
  min-width: 200px;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    letter-spacing: 0.5px;
  }

  a {
    display: block;
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.6rem;
    font-size: 0.95rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ffd700; /* Gold highlight */
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

  a {
    color: #fff;
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ffd700;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255,255,255,0.2);
  width: 100%;
  max-width: 1200px;
  text-align: center;
  padding-top: 1rem;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.7);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterSection>
          <h3>About Us</h3>
          <p>We craft premium products with care and passion, delivering quality and trust to our customers.</p>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <a href="#Home">Home</a>
          <a href="#products">Products</a>
          <a href="#AboutUs">About</a>
          <a href="#Contact">Contact</a>
        </FooterSection>

        <FooterSection>
          <h3>Follow Us</h3>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </SocialIcons>
        </FooterSection>
      </FooterTop>

      <FooterBottom>
        &copy; {new Date().getFullYear()} Olives. All rights reserved.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;