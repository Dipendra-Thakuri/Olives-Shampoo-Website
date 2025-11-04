import styled from "styled-components";
import ShampooCardGrid from "./ShampooCardGrid";

const ImageContainer = styled.div`
    position : relative;
    display : inline-block;
`;

const HomeImg = styled.img`
    height : 100%;
    width : 100%;
`;

const HomeText = styled.h2`
    position : absolute;
    top : 5%;
    left : 53%;
    font-size : 8vw;
    background : linear-gradient(135deg, green, yellow);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const HomeImage = () => {
    return (
        <ImageContainer>
            <HomeImg src="./HairModel.jpg" alt="HomeImage" />
            <HomeText>Nature's Care for Your Hair</HomeText>
            <ShampooCardGrid />
        </ImageContainer>
    );
}

export default HomeImage;