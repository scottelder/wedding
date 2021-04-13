import React from "react";
import { useForm } from "react-hook-form";

export default function Rsvp() {
  const { register } = useForm();
  return (
    <form className="rsvp rsvp__form">
      <header className="rsvp rsvp__header">Respondez s'il vous plait</header>
      <label className="rsvp rsvp__label">First Name</label>
      <input className="rsvp rsvp__text-input" name="firstName" />

      <label className="rsvp rsvp__label">Last Name</label>
      <input className="rsvp rsvp__text-input" name="lastName" />

      <label className="rsvp rsvp__label">Email</label>
      <input className="rsvp rsvp__text-input" name="email" />

      <label className="rsvp rsvp__label">Phone Number</label>
      <input className="rsvp rsvp__text-input" name="phone" />

      <label className="rsvp rsvp__label">Current COVID-19 Vaccination Status</label>
      <input className="rsvp rsvp__text-input" name="currentVaccinationStatus" />

      <label className="rsvp rsvp__label">Expected June 12th COVID-19 Vaccination Status</label>
      <input className="rsvp rsvp__text-input" name="expectedVaccinationStatus" />

      <label className="rsvp rsvp__label">Any dietary considerations?</label>
      <input className="rsvp rsvp__text-input" name="dietaryConsiderations" />
    </form>
  );
}
