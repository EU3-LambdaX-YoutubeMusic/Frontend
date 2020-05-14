import React from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
import Error from "../Helpers/Error";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  StyledForm,
  StyledFormField,
  StyledInput,
  StyledLabel,
  StyledSignupContainer,
  StyledButton,
  StyledLink
} from "../Styles/StyledForm";
import { validationSchema } from "../Helpers/ValidationSchema";


import SignupImage from "../Assets/hero.png";

const initialSignupForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

export function RegisterForm(props) {
    let history = useHistory()
  return (
      <Formik
      validationSchema={validationSchema}
      initialValues={initialSignupForm}
      onSubmit={(values, actions) => {
        const newUser = {
          firstname: values.firstName,
          lastname: values.lastName,
          email: values.email,
          password: values.password,
        };
        
        actions.setSubmitting(true);

            axios
            .post("https://lambda-youtube-music.herokuapp.com/api/v1/users/register", newUser)
            .then((res) => {
                console.log(res);
                actions.resetForm();
                actions.setSubmitting(false);
                history.push("/playlist")
            })
            .catch(err => {
                toast.error(err.response.statusText);
                actions.setSubmitting(false);
            });
        }}
    >
        {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting
            }) => (
    <StyledSignupContainer>
      <div className="left">
        <h1>Create an Account</h1>
        <div className="img-cont">
          <img src={SignupImage} alt="Earphones" />
        </div>
      </div>
      <div className="right">
            <div className="AuthBox">
              <StyledForm onSubmit={handleSubmit}>
                <StyledFormField>
                  <StyledLabel>First Name</StyledLabel>
                  <div data-testid="firstNameField" className="inputField">
                  <StyledInput
                    name="firstName"
                    type="text"
                    placeholder="John"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    className={
                        touched.firstName && errors.firstName ? "has-error" : null
                      } 
                  />
                  <Error touched={touched.firstName} message={errors.firstName} />
                  </div>
                </StyledFormField>
                <StyledFormField>
                  <StyledLabel>Last Name</StyledLabel>
                  <div data-testid="lastNameField" className="inputField">
                  <StyledInput
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    className={
                        touched.lastName && errors.lastName ? "has-error" : null
                    }
                  />
                  <Error touched={touched.lastName} message={errors.lastName} />
                  </div>
                </StyledFormField>
                <StyledFormField>
                  <StyledLabel>Email</StyledLabel>
                  <div data-testid="emailField" className="inputField">
                  <StyledInput
                    name="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={touched.email && errors.email ? "has-error" : null}
                  />
                  <Error touched={touched.email} message={errors.email} />
                  </div>
                </StyledFormField>
                <StyledFormField>
                  <StyledLabel>Password</StyledLabel>
                  <div data-testid="passwordField" className="inputField">
                  <StyledInput
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={
                        touched.password && errors.password ? "has-error" : null
                      }
                  />
                  <Error touched={touched.password} message={errors.password} />
                  </div>
                </StyledFormField>
                <div className="SignLink">
                <p>Got an Account? <StyledLink to="/login">Sign In</StyledLink></p>
                </div>
                <StyledButton className="abutton" type="submit" disabled={isSubmitting} data-testid="submitButton">
                  Sign up
                </StyledButton>
                <ToastContainer
                    position="top-center"
                    autoclose={2000}
                    hideProgressBar
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                    closeButton={false}
                    style={{
                    "font-size": "1.5rem",
                    width: "400px",
                    "text-align": "center"
                    }}
                />
              </StyledForm>
            </div>
      </div>
    </StyledSignupContainer>
    )}
</Formik>
  );
}

export default RegisterForm;


