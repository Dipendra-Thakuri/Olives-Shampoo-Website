import styled from "styled-components";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import HomeImage from "../components/HomeImage";
import OurPurpose from "../components/OurPurpose";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const HomeWrapper = styled.div``;

const Home = () => {
    return (
        <HomeWrapper id="Home">
            <Header />
            <HomeImage />
            <AboutUs />
            <OurPurpose />
            <ContactForm />
            <Footer />
        </HomeWrapper>
    );
}

export default Home;