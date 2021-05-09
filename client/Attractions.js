import React from "react";
import styled from "@emotion/styled";
import {
  Article,
  Headline,
  Subheadline,
  Section,
  List,
  Item,
  ExternalLink,
} from "./components";

const AttractionsArticle = styled(Article)`
  text-align: center;
`;

export default function Attractions() {
  return (
    <AttractionsArticle>
      <Headline>Visiting Austin for the first time?</Headline>

      <Section>
        <Subheadline>Breakfast</Subheadline>
        <List>
          <Item>
            <ExternalLink
              src="https://www.veracruzallnatural.com/"
              label="Veracruz All Natural -- get the migas taco!"
            />
          </Item>
          <Item>
            <ExternalLink
              src="https://www.mimadresrestaurant.com/"
              label="Mi Madre's -- has a great patio"
            />
          </Item>
          <Item>
            <ExternalLink
              src="https://www.countercafe.com/"
              label="Counter Cafe"
            />
          </Item>
          <Item>
            <ExternalLink src="https://www.24diner.com/" label="24 Diner" />
          </Item>
        </List>
      </Section>

      <Section>
        <Subheadline>Tex-Mex</Subheadline>
        <List>
          <Item>
            <ExternalLink src="https://www.polvosaustin.com/" label="Polvo's" />
          </Item>
          <Item>
            <ExternalLink src="https://www.elchilecafe.com/" label="El Chile" />
          </Item>
          <Item>
            <ExternalLink
              src="https://www.fresaschicken.com/"
              label="Fresa's Chicken AL Carbon"
            />
          </Item>
        </List>
      </Section>

      <Section>
        <Subheadline>Barbecue</Subheadline>
        <List>
          <Item>
            <ExternalLink
              src="https://franklinbbq.com/"
              label="Franklin Barbecue"
            />
          </Item>
          <Item>
            <ExternalLink
              src="https://www.labarbecue.com/menu"
              label="la Barbecue"
            />
          </Item>
        </List>
      </Section>

      <Section>
        <Subheadline>To visit</Subheadline>
        <List>
          <Item>
            <ExternalLink
              src="https://library.austintexas.gov/central-library"
              label="Central Library, Austin Public Library"
            />
          </Item>
          <Item>
            <ExternalLink
              src="https://austin.violetcrown.com/"
              label="Violet Crown Cinema"
            />
          </Item>
          <Item>
            <ExternalLink
              src="https://www.austintexas.gov/department/barton-springs-pool"
              label="Barton Springs Pool"
            />
          </Item>
          <Item>
            <ExternalLink
              src="https://www.wildflower.org/"
              label="Ladybird Johnson Wildflower Center"
            />
          </Item>
        </List>
      </Section>
    </AttractionsArticle>
  );
}
