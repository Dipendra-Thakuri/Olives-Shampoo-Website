import styled from "styled-components";

const Section = styled.div`
  display : flex;
  width: 100%;
  background: #fdfdfd;
  border-radius: 5px;
  margin : 6vw 0 0 0;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5vw;
  color: #2c2c2c;
  margin-bottom: 1.5vw;
`;

const Content = styled.p`
  font-size: 1.3vw;
  font-weight : 600;
  color: #444;
  line-height: 1.8;
  text-align: justify;
`;

const AboutImage = styled.img`
  margin : 0 0 0 auto;
  height : 40vw;
`;

const AboutContent = styled.div`
  position : absolute;
  width : 50%;
  margin : 5vw 0 0 0;
  left : 0%;
  padding : 1vw 4vw 2vw 4vw;
  background : linear-gradient(135deg, #beffb8, #c7da5a, #fffda5);
`;

const AboutUs = () => {
  return (
    <Section id="AboutUs">
      <AboutContent>
      <Title>About Us</Title>
        <Content>
          At <b>Olives</b>, we believe that true beauty starts with nature's care. 
          Our journey began with a small team of passionate researchers and creators 
          who wanted to craft something special — shampoos that are safe, natural, 
          and made with love. After years of research, we finally created a haircare 
          formula that blends modern science with traditional goodness. <br />
          Every drop of our shampoo is filled with the essence of olive oil, herbal 
          extracts, and vitamins that restore your hair's natural strength and shine. 
          We’re here to help you embrace healthier, happier hair — the way nature intended.
        </Content>
      </AboutContent>
      <AboutImage src="./Home1.png" alt="AboutUs" />
    </Section>
  );
};

export default AboutUs;