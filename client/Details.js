import React from "react";
import styled from "@emotion/styled";
import {
  Article,
  Section,
  Headline,
  Subheadline,
  Paragraph,
  List,
  Item,
} from "./components";

const DetailsArticle = styled(Article)`
  text-align: center;
`;

const GridItem = styled(Item)`
  display: grid;
  grid-template: 100% / 34% 33% 33%;
  margin: 0 auto;
  height: 4em;
  width: 90%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 1200px) {
    width: 25%;
  }
`;

const Time = styled.strong`
  grid-area: 1 / 1 / 1 / 1;
`;

const Info = styled.span`
  grid-area: 1 / 2 / 1 / 4;
  text-align: left;
`;

const Date = styled.h3`
  margin-top: 0;
`;

export default function Details() {
  return (
    <DetailsArticle>
      <Headline>Details</Headline>

      <Section>
        <Subheadline>COVID-19</Subheadline>
        <Paragraph>
          <strong>
            All of our guests who have RSVPed will be vaccinated by June 12th.
          </strong>
        </Paragraph>
        <Paragraph>
          We are planning for the ceremony and wedding events to be outdoors,
          and will be spacing people for both dinner and the ceremony.
        </Paragraph>
        <Paragraph>
          We are keeping a close eye on developing CDC recommendations and will
          update with more detailed information about 2 weeks before the
          wedding.
        </Paragraph>
      </Section>

      <Section>
        <Subheadline>Rehearsal + Rehearsal Dinner</Subheadline>
        <List>
          <Date>Friday, 6/11</Date>
          <Item>
            The rehearsal dinner will be indoors, and we will try to seat guests
            with people they know and spend time with for COVID-safety purposes.
          </Item>
        </List>
        <h4>Schedule</h4>
        <List>
          <GridItem>
            <Time>4:00pm:</Time>{" "}
            <Info>Rehearsal, Mercury Hall (Wedding Party + Parents only)</Info>
          </GridItem>

          <GridItem>
            <Time>7:30pm:</Time>{" "}
            <Info>Rehearsal Dinner, Justine’s Secret House (Everyone!)</Info>
          </GridItem>
        </List>
      </Section>

      <Section>
        <Subheadline>Wedding</Subheadline>
        <List>
          <Date>Saturday, 6/12</Date>
          <Item>
            The wedding will largely be outdoors and dinner will be served on a
            graveled terrace, so please wear comfortable shoes and plan for the
            heat!
          </Item>
          <Item>We will make sure there are fans and cold drinks.</Item>
        </List>
        <h4>Schedule</h4>
        <List>
          <GridItem>
            <Time>6:30pm:</Time>{" "}
            <Info>Arrive at Mercury Hall, grab a drink!</Info>
          </GridItem>

          <GridItem>
            <Time>7:00pm:</Time> <Info>Wedding Ceremony begins</Info>
          </GridItem>

          <GridItem>
            <Time>7:30pm:</Time> <Info>Cocktails</Info>
          </GridItem>

          <GridItem>
            <Time>8:00pm:</Time> <Info>Dinner</Info>
          </GridItem>
        </List>
      </Section>
    </DetailsArticle>
  );
}
