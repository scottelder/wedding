import React from "react";
import { useForm } from "react-hook-form";

const submitCallback = (data) => {
  console.log(data);
};

export default function Rsvp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form className="rsvp rsvp__form" onSubmit={handleSubmit(submitCallback)}>
      <h1 className="rsvp rsvp__header">Respondez s'il vous plait</h1>

      <div className="rsvp rsvp__radio-container">
        <label className="rsvp rsvp__label rsvp__label--radio">We're coming!</label>
        <input
          className="rsvp rsvp__radio-input"
          type="radio"
          value="doublet"
          {...register("rsvp", { required: true })}
        />

        <label className="rsvp rsvp__label rsvp__label--radio">I'm coming!</label>
        <input
          className="rsvp rsvp__radio-input"
          type="radio"
          value="singlet"
          {...register("rsvp", { required: true })}
        />

        <label className="rsvp rsvp__label rsvp__label--radio">Cannot attend!</label>
        <input
          className="rsvp rsvp__radio-input"
          type="radio"
          value="neither"
          {...register("rsvp", { required: true })}
        />
        {errors.rsvp && errors.rsvp.type === "required" && (
          <span className="rsvp rsvp__error">We need to know if you're coming!</span>
        )}
      </div>

      <section className="rsvp rsvp__section">
        <span className="rsvp rsvp__name-container">
          <label className="rsvp rsvp__label">First Name</label>
          <input className="rsvp rsvp__text-input" {...register("individual1.firstName")} />
        </span>
        <span className="rsvp rsvp__name-container">
          <label className="rsvp rsvp__label">First Name</label>
          <input className="rsvp rsvp__text-input" {...register("individual1.firstName")} />
        </span>
        <span className="rsvp rsvp__name-container">
          <label className="rsvp rsvp__label">Last Name</label>
          <input className="rsvp rsvp__text-input" {...register("individual1.lastName")} />
        </span>
        <span className="rsvp rsvp__name-container">
          <label className="rsvp rsvp__label">Last Name</label>
          <input className="rsvp rsvp__text-input" {...register("individual1.lastName")} />
        </span>
      </section>

      <label className="rsvp rsvp__label">What is your COVID comfort?</label>
      <input className="rsvp rsvp__text-input" {...register("covidComfort")} />

      <label className="rsvp rsvp__label">Current COVID-19 Vaccination Status</label>
      <input className="rsvp rsvp__text-input" {...register("currentVaccinationStatus")} />

      <label className="rsvp rsvp__label">Expected June 12th COVID-19 Vaccination Status</label>
      <input className="rsvp rsvp__text-input" {...register("expectedVaccinationStatus")} />

      <label className="rsvp rsvp__label">Any dietary considerations?</label>
      <input className="rsvp rsvp__text-input" {...register("dietaryConsiderations")} />

      <label className="rsvp rsvp__label">Anything else we should know?</label>
      <textarea ref={register} className="rsvp rsvp__textarea" {...register("anythingElse")} />

      <input className="rsvp rsvp__submit" type="submit" />
    </form>
  );
}
