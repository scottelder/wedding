import React from "react";
import {
  Article,
  Section,
  Headline,
  Subheadline,
  Paragraph,
  List,
  Item,
} from "./components";

export default function Details() {
  return (
    <Article>
      <Headline>Details</Headline>

      <Section>
        <Subheadline>COVID-19</Subheadline>
        <Paragraph>
          We are planning for the ceremony and wedding events to be outdoors,
          and will be spacing people for both dinner and the ceremony.
          <strong>
            As of now, all of our guests who have RSVPed will be vaccinated.
          </strong>
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
          <Item>
            The rehearsal dinner will be indoors, and we will try to seat guests
            with people they know and spend time with for COVID-safety purposes.
          </Item>
        </List>
        <List>
          <Item>
            4:00pm Rehearsal, Mercury Hall (Wedding Party + Parents only)
          </Item>
          <Item>
            7:30pm Rehearsal Dinner, Justine’s Secret House (Everyone!)
          </Item>
        </List>
      </Section>

      <Section>
        <Subheadline>Wedding</Subheadline>
        <List>
          <Item>Saturday, 6/12</Item>
          <Item>
            Please note: the wedding will largely be outdoors and dinner will be
            served on a graveled terrace, so please wear comfortable shoes and
            plan for the heat!
          </Item>
          <Item>We will make sure there are fans and cold drinks.</Item>
        </List>
        <List>
          <Item>6:30pm Arrive at Mercury Hall, grab a drink!</Item>
          <Item>7:00pm Wedding Ceremony begins</Item>
          <Item>7:30pm Cocktails</Item>
          <Item>8:00pm Dinner</Item>
        </List>
      </Section>
    </Article>
  );
}
