import styled from "styled-components";

const Section = styled.section`
  display : flex;
  width: 100%;
  background: #fdfdfd;
  border-radius: 5px;
  margin : 6vw 0 6vw 0;
`;

const OurImage = styled.img`
  margin : auto 0 0 0;
  height : 40vw;
`;

const OurContent = styled.div`
  position : absolute;
  width : 50%;
  margin : 5vw 0 0 0;
  padding : 1vw 4vw 2vw 4vw;
  right : 0%;
  border-radius : 5px;
  background : linear-gradient(135deg, #beffb8, #c7da5a, #fffda5);
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

const OurPurpose = () => {
  return (
    <Section id="OurPurpose">
      <OurImage src="./Home2.jpg" alt="OurPurpose" />
      <OurContent>
        <Title>Our Purpose</Title>
        <Content>
          Our purpose is simple — to bring natural, effective haircare to everyone. 
          We understand how harsh chemicals and synthetic ingredients can damage hair 
          and the environment. That's why <b>Olives</b> shampoos are made with pure, 
          eco-friendly ingredients that care for both you and the planet. <br />
          From nourishing olive oil to soothing herbal infusions, every formula is designed 
          to strengthen your hair from root to tip while maintaining its natural balance. 
          We're committed to sustainability, cruelty-free testing, and honest craftsmanship — 
          because we believe that beauty and responsibility go hand in hand.
        </Content>
      </OurContent>
    </Section>
  );
};

export default OurPurpose;