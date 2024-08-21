import React, { FormEvent, useRef, useState } from "react";

// emailjs
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_dgjkp0y",
        "template_hr7fvgs",
        {
          from_name: form.name,
          to_name: "Sean",
          from_email: form.email,
          to_email: "seanaraujo93@gmail.com",
          message: form.message,
        },
        "K4C7YBMUja_EATxIf",
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        },
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mt-12 flex flex-col gap-8"
    >
      <label className="flex flex-col">
        <span className="text-secondary font-medium mb-4">Your Name</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="What's your name?"
          className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-secondary font-medium mb-4">Your Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What's your email?"
          className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-secondary font-medium mb-4">Your Message</span>
        <textarea
          rows={7}
          typeof="textarea"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What do you want to say?"
          className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
        />
      </label>
      <button
        type="submit"
        className="bg-night py-3 px-8 outline-none w-fit text-send font-bold shadow-md shadow-primary rounded-xl"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
