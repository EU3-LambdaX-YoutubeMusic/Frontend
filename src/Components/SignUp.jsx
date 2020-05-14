import React from "react";
import { signup } from '../services/UsersAuth';
import Spinner from './Spinner';
import {
  StyledForm,
  StyledFormField,
  StyledInput,
  StyledLabel,
  StyledSignupContainer,
  StyledButton,
  StyledLink
} from "../Styles/StyledForm";

import SignupImage from "../Assets/hero.png";

class SignUp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        loading: false,
        error: false,
      }
    }
  
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.setState({
        loading: true,
      })
      const newUser = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }
  
      signup(newUser)
        .then(() => {
          this.setState({
            loading: false
          })
        })
        .then(() => {
          this.props.setLoggedIn(true);
          this.props.history.push('/playlist');
        })
        .catch(err => {
          this.setState({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            loading: false,
            error: true,
          });
          console.log('boo!')
        })
  
    }
  
    render() {
  
      let error;
      if (this.state.error) {
        error = "Invalid Sign Up Details"
      } else {
        error = null;
      }
  
      if (this.state.loading) {
        return (
          <div>
            <StyledSignupContainer>
                <Spinner />
            </StyledSignupContainer>
          </div>
        )
      } else {
          return (
              <div>
    <StyledSignupContainer>
      <div className="left">
        <h1>Create an Account</h1>
        <div className="img-cont">
          <img src={SignupImage} alt="Earphones" />
        </div>
      </div>
      <div className="right">
            <div className="AuthBox">
              <StyledForm >
                <StyledFormField>
                  <StyledLabel>First Name</StyledLabel>
                  <StyledInput
                    name="firstName"
                    type="text"
                    placeholder="John"
                    onChange={this.handleChange}
                    value={this.state.firstName}
                  />
                </StyledFormField>
                <StyledFormField>
                  <StyledLabel>Last Name</StyledLabel>
                  <StyledInput
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    onChange={this.handleChange}
                    value={this.state.lastName}
                  />
                </StyledFormField>
                <StyledFormField>
                  <StyledLabel>Email</StyledLabel>
                  <StyledInput
                    name="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                </StyledFormField>
                <StyledFormField>
                  <StyledLabel>Password</StyledLabel>
                  <StyledInput
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                </StyledFormField>
                <div className="SignLink">
                <p>Got an Account? <StyledLink to="/login">Sign In</StyledLink></p>
                </div>
                <StyledButton className="button" type="button" onClick={this.handleSubmit}>
                  Sign up
                </StyledButton>
                <h6 style={{'color': 'red'}}>{error}</h6>
              </StyledForm>
            </div>
      </div>
    </StyledSignupContainer>
    </div>
    )
}
    }
}

export default SignUp;
