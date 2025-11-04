import { useState, useEffect } from "react";
import styled from "styled-components";

const HeaderNavbar = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background: ${({ isScrolled }) =>
        isScrolled
            ? "linear-gradient(135deg, #2c5364, #203a43, #0f2027)"
            : "transparent"};
    transition: background 0.4s ease;
    z-index: 11;
`;

const OlivesLogo = styled.img`
    height: 2.8vw;
    width: 10vw;
    padding: 1.5vw 1vw 1.5vw 1.5vw;
`;

const Navbar = styled.nav``;

const NavList = styled.ul`
    margin: 0;
    padding: 0 1vw 0 0;
    list-style: none;
    display: flex;
    gap: 0.5vw;
`;

const NavItem = styled.li`
    a {
        margin: 0;
        text-decoration: none;
        height: 100%;
        font-size: 1.5vw;
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        padding: 2vw 1vw;
        border-radius: 3px;
        transition: all 0.5s ease;

        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
    }
`;

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <HeaderNavbar isScrolled={isScrolled}>
            <a href="#Home">
                <OlivesLogo src="./Olives.png" alt="Olives" />
            </a>
            <Navbar>
                <NavList>
                    <NavItem> <a href="#Products">Products</a> </NavItem>
                    <NavItem> <a href="#AboutUs">About Us</a> </NavItem>
                    <NavItem> <a href="#OurPurpose">Our Purpose</a> </NavItem>
                    <NavItem> <a href="#ContactUs">Contact Us</a> </NavItem>
                </NavList>
            </Navbar>
            <Navbar>
                <NavList>
                    <NavItem> <a href="#Home"><i className="fa-solid fa-magnifying-glass"></i></a> </NavItem>
                    <NavItem> <a href="#Home"><i className="fa-solid fa-cart-shopping"></i></a> </NavItem>
                    <NavItem> <a href="#Home"><i className="fa-solid fa-bars"></i></a> </NavItem>
                </NavList>
            </Navbar>
        </HeaderNavbar>
    );
};

export default Header;
