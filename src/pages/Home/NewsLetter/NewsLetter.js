import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./NewsLetter.css";

const NewsLetter = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <Container className="text-center newsletter mb-5">
          <div>
            <div>
              <p> Our NewsLetter </p>
              <h2> Subscribe NewsLetter</h2>
              <h6>
                The Food at your doorstep .Why starve when you have us . You
                hunger <br /> parter . Straight out of the oven to your doorstep
              </h6>
            </div>
            <div>
              <form
                sm={12}
                className="mt-5 newsletter_form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  placeholder="First Name ...."
                  type="text"
                  {...register("firstName", { required: true, maxLength: 20 })}
                />
                <input
                  type="text"
                  placeholder="Last Name ...."
                  {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
                />
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email Address ...."
                />
                <input
                  className="form_button"
                  type="submit"
                  value="Get Started"
                />
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewsLetter;
