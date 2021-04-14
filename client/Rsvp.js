import React from "react";
import { useForm } from "react-hook-form";

const submitCallback = (data) => {
  console.log(data);
};

export default function Rsvp() {
  const { register, handleSubmit } = useForm();
  return (
    <form className="rsvp rsvp__form" onSubmit={handleSubmit(submitCallback)}>
      <h1 className="rsvp rsvp__header">Respondez s'il vous plait</h1>

      <div className="rsvp rsvp__radio-container">
        <label className="rsvp rsvp__label rsvp__label--radio">We're coming!</label>
        <input className="rsvp rsvp__radio-input" type="radio" value="doublet" {...register("rsvp")} />
        <label className="rsvp rsvp__label rsvp__label--radio">I'm coming!</label>
        <input className="rsvp rsvp__radio-input" type="radio" value="singlet" {...register("rsvp")} />
        <label className="rsvp rsvp__label rsvp__label--radio">Cannot attend!</label>
        <input className="rsvp rsvp__radio-input" type="radio" value="neither" {...register("rsvp")} />
      </div>

      <label className="rsvp rsvp__label">First Name</label>
      <input className="rsvp rsvp__text-input" {...register("firstName")} />

      <label className="rsvp rsvp__label">Last Name</label>
      <input className="rsvp rsvp__text-input" {...register("lastName")} />

      <label className="rsvp rsvp__label">What is your COVID comfort?</label>
      <input className="rsvp rsvp__text-input" {...register("covidComfort")} />

      <label className="rsvp rsvp__label">Current COVID-19 Vaccination Status</label>
      <input className="rsvp rsvp__text-input" {...register("currentVaccinationStatus")} />

      <label className="rsvp rsvp__label">Expected June 12th COVID-19 Vaccination Status</label>
      <input className="rsvp rsvp__text-input" {...register("expectedVaccinationStatus")} />

      <label className="rsvp rsvp__label">Any dietary considerations?</label>
      <input className="rsvp rsvp__text-input" {...register("dietaryConsiderations")} />

      <input className="rsvp rsvp__submit" type="submit" />
    </form>
  );
}
