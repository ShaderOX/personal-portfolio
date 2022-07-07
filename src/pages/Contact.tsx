import { Field, Form, Formik } from "formik";
import React, { FormEventHandler, useRef } from "react";
import Heading from "../components/Heading";
import * as Yup from "yup";
import axios from "axios";

type Props = {};
type FormValues = {
  email: string;
  name: string;
  message: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please provide an email")
    .email("Please provide a valid email"),
  name: Yup.string().required("Provide provide your name"),
  message: Yup.string().required("Please provide a message/description"),
});

const initialValues: FormValues = {
  email: "",
  name: "",
  message: "",
};

const Contact: React.FC<Props> = props => {
  const successRef = useRef<HTMLSpanElement>(null);
  return (
    <section className="mt-24 mx-auto text-center">
      <div id="my-work" className="mb-8">
        <Heading text="Contact Me" />
      </div>

      <span className="block text-mywhitelowopacity my-4 mb-14">
        Thank you for reaching out, how may I help you?
      </span>
      <Formik
        onSubmit={(values, actions) => {
          axios
            .post(String(process.env.REACT_APP_EMAIL_HANDLER_URL), values)
            .then(res => {
              if (res.status === 200) {
                actions.setSubmitting(false);
                actions.resetForm();
                console.log("Form Submitted");
                successRef.current?.classList.add("text-myyellow");
                successRef.current?.classList.remove("text-transparent");
              }
            });
        }}
        initialValues={initialValues}
        validateOnBlur={true}
        validateOnChange={true}
        validationSchema={validationSchema}
      >
        {props => {
          const errors = {
            email:
              props.errors.email && props.touched.email
                ? props.errors.email
                : undefined,
            name:
              props.errors.name && props.touched.name
                ? props.errors.name
                : undefined,
            message:
              props.errors.message && props.touched.message
                ? props.errors.message
                : undefined,
          };
          return (
            <Form className="flex flex-col items-center h-full md:w-2/3 justify-between mx-auto px-4">
              <div className="flex items-center justify-between w-full md:flex-row flex-col">
                <div className="w-full text-left flex flex-col items-start justify-start mb-2 md:mr-4">
                  <Field
                    placeholder="Your Name"
                    type="text"
                    name="name"
                    id="name"
                    required={true}
                    className={`textfield  ${
                      errors.name ? "border-2 border-red-400" : ""
                    }`}
                  />
                  <span
                    className={`text-xs ${
                      errors.name ? "text-red-400" : "text-transparent"
                    }`}
                  >
                    {errors.name ? errors.name : "."}
                  </span>
                </div>

                <div className="w-full text-left flex flex-col items-start justify-start mb-2 md:ml-4">
                  <Field
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    id="email"
                    required={true}
                    className={`textfield  ${
                      errors.email ? "border-2 border-red-400" : ""
                    }`}
                  />
                  <span
                    className={`text-xs ${
                      errors.email ? "text-red-400" : "text-transparent"
                    }`}
                  >
                    {errors.email ? errors.email : "."}
                  </span>
                </div>
              </div>

              <div className="w-full text-left flex flex-col items-start justify-start mx-4">
                <Field
                  name="message"
                  placeholder="Your Message"
                  rows={10}
                  as="textarea"
                  className={`textfield  ${
                    errors.message ? "border-2 border-red-400" : ""
                  }`}
                  required={true}
                />
                <span
                  className={`text-xs ${
                    errors.message ? "text-red-400" : "text-transparent"
                  }`}
                >
                  {errors.message ? errors.message : "."}
                </span>
              </div>

              <div className="flex items-center justify-between w-full">
                <span className="text-transparent" ref={successRef}>
                  ✅ Your message has been conveyed...
                </span>
                <button
                  className="button my-4 md:px-8 md:py-2 self-end px-4 py-1"
                  type="submit"
                  disabled={props.isSubmitting}
                >
                  Send
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default Contact;
