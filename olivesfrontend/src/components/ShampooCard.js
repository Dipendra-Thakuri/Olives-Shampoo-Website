import styled from "styled-components";

const Card = styled.div`
  height: 22vw;
  background: #f8f8f8;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor : pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    box-shadow: 0 15px 25px rgba(0,0,0,0.3);
  }
`;

const CardImage = styled.img`
  height: 75%;
  object-fit: cover;
  transition: transform 0.2s ease;
  padding-top : 0.7vw;
  
  &:hover {
    transform: scale(1.08);
  }
`;

const CardContent = styled.div`
  text-align: center;
  margin : 0;
  padding : 1vw 0 0 0;
  width : 22vw;
`;

const CardTitle = styled.h3`
  font-size: 1.2vw;
  padding : 0 1vw;
  margin : 0;
`;

const ShampooCard = ({ image, title }) => {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
      </CardContent>
    </Card>
  );
};

export default ShampooCard;