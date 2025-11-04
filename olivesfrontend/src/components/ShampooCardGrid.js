import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ShampooCard from "./ShampooCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";

const GridWrapper = styled.section`
  position: absolute;
  top: 59%;
  left: 1%;
  width: 98%;
`;

const GridTitle = styled.h2`
  text-align: center;
  font-size: 2.5vw;
  color: white;
  margin-bottom: 1.5vw;
`;

const GridContainer = styled.div`
  position: relative;
`;

const GridComponent = styled.div`
  display: flex;
  gap: 1.3vw;
  overflow-x: hidden; /* hide scrollbar */
  scroll-behavior: smooth; /* smooth scroll */
  padding: 1vw;
  background: none;
  border-radius: 5px;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  border-radius : 5px;
  padding: 10.4vw 2vw 10.4vw 2vw;
  cursor: pointer;
  z-index: 5;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(123, 123, 123, 0.8);
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: 0.1vw;
`;

const RightArrow = styled(ArrowButton)`
  right: 0.1vw;
`;

const ShampooCardGrid = () => {
  const scrollRef = useRef(null);
  const [cards, setCards] = useState([]);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 700; // Adjust how much to scroll per click
    if (direction === "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <GridWrapper id="Products">
      <GridTitle>Our Products</GridTitle>
      <GridContainer>
        <LeftArrow onClick={() => scroll("left")}>
          <FaChevronLeft />
        </LeftArrow>
        <GridComponent ref={scrollRef}>
          {cards.map((card, index) => (
            <ShampooCard
              key={card.id || index}
              image={card.imageUrl}
              title={card.name}
              description={card.description}
            />
          ))}
        </GridComponent>
        <RightArrow onClick={() => scroll("right")}>
          <FaChevronRight />
        </RightArrow>
      </GridContainer>
    </GridWrapper>
  );
};

export default ShampooCardGrid;