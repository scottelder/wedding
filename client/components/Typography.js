import React from "react";

export const Headline = () => <h1 className="headline"></h1>;

export const Subheadline = () => <h2 className="subheadline"></h2>;

export const Paragraph = () => <p className="paragraph"></p>;

export const ExternalLink = ({ src, label }) => (
  <a href={src} target="_blank" className="link">
    {label}
  </a>
);
