import React from "react";
import styled from "@emotion/styled";
import { Link, ExternalLink, List, Item, Headline } from "./components";

const linkStyles = `
color: #fff;

:visited,
:active {
  color: #fff;
}
`;

const StyledLink = styled(Link)`
  ${linkStyles}
`;

const StyledExternalLink = styled(ExternalLink)`
  ${linkStyles}
`;

const NavItem = styled(Item)`
  margin: 0 auto;
  font-size: 1.75rem;
  text-align: center;
  margin-bottom: 1.5em;
  font-family: "Playfair Display", serif;

  @media screen and (min-width: 768px) {
    font-size: 2em;
  }
`;

const Announcement = styled(Headline)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 0 2em 0;
  height: 40%;
  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 4em;
  }
`;

const Main = styled.main`
  min-height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("./img/engagement-bridge.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: left;
  text-align: center;
`;

export default function Home() {
  return (
    <Main>
      <Announcement>
        <div>Linden & Scott</div>
        <div>Are</div>
        <div>Getting</div>
        <div>Married</div>
      </Announcement>

      <List>
        <NavItem>
          <StyledLink to="/rsvp">RSVP</StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink to="/about">Our Story</StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink to="/details">Event Details</StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink to="/attractions">Austin Attractions</StyledLink>
        </NavItem>

        <NavItem>
          <StyledExternalLink
            src="https://www.zola.com/registry/linandscott"
            label="Registry"
          />
        </NavItem>
      </List>
    </Main>
  );
}
