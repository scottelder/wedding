import React from "react";
import {
  Article,
  Headline,
  Subheadline,
  Paragraph,
  Section,
} from "./components";

export default function About() {
  return (
    <Article>
      <Headline>Our Story</Headline>

      <Section>
        <Subheadline>Linden's View</Subheadline>
        <Paragraph>
          I have never had a first date like my first date with Scott. I
          developed a crush on him--one I worked vigorously to squash for the
          sake of professionalism--from the moment I sat down with him at lunch
          on his first day as a student at Hack Reactor. We talked about Kelly
          Link and other books, and I was immediately taken with his steely blue
          eyes and his cheeky sense of humor. My first thought was: Oh, girl.
          You are in trouble! You can’t have a crush on a student! So I kept my
          distance and did my job, and didn’t let myself think too much about
          how cute and kind and funny and smart and attractive he was.
        </Paragraph>
        <Paragraph>
          So when we sat down to dinner in the warm red light of the
          Kemuri-Tatsuya patio on our first date, we immediately tumbled right
          into “So we’re both super in love with each other, right?” Our first
          date was this fizzy reminiscence about all the almost-moments where
          we’d each wanted to let the other person know. The company lake day
          where Scott jumped off a roof to impress me and I swam across the
          river to impress him. The dinner party where I kept hoping he’d stick
          around to “help with dishes,” and instead he took too long tying his
          shoes and then slunk away. The crafternoon he showed up to mostly so
          he could ask me out, but was blocked by a lingering coworker who spent
          so much time nattering on about the horse she was drawing that I had
          to usher everyone out to get to a yoga class and Scott missed his
          shot.
        </Paragraph>
        <Paragraph>
          Since then, we’ve had a couple years, many more dates, and a global
          pandemic to get to know each other more deeply, and to turn those
          almost-moments into a shared life. I love Scott’s kindness and his
          resilience. I love the way he cheers me on and supports me. The way he
          approaches things thoughtfully. I love the way we operate as a team,
          the way we communicate and face difficulties together. And I am so
          excited to spend the rest of my life with him.
        </Paragraph>
      </Section>

      <Section>
        <Subheadline>Scott's View</Subheadline>
        <Paragraph>Gotta write some stuff here.</Paragraph>
      </Section>
    </Article>
  );
}
