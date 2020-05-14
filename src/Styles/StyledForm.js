import styled from "styled-components";
import { theme } from "../Theme/theme";
import { Link } from "react-router-dom";

export const StyledSignupContainer = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  padding: 80px 60px 0 60px;
  background-color: #e7f0f4;
  /* align-items: center; */

  .left {
    display: flex;
    flex-direction: column;
    width: 50%;

    .img-cont {
      padding-right: 20px;
    }

    h1 {
      margin-top: 0px;
      font-size: 1.4rem;
      color: ${theme.headings};
      font-family: ${theme.mainFont};
    }

    h2 {
      font-size: 1rem;
      color: ${theme.text};
      font-family: ${theme.mainFont};
    }

    img {
      width: 100%;
      height: 100%;
    }

    p {
      font-size: 1.2rem;
      padding: 1rem;
      margin-bottom: 5px;
      font-family: ${theme.mainFont};
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    width: 50%;
    /* margin-top: 80px; */
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .inputField {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  .SignLink {
    font-family: ${theme.mainFont};  
  }
`;

export const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  font-size: 0.75rem;

  label {
    font-size: 1rem;
    margin-bottom: 5px;
  }

  label:after {
    content: "*";
    color: red;
  }
  
`;

export const StyledInput = styled.input`
  font-size: 1.2rem;
  padding: 10px;
  height: 20px;
  border-radius: 5px;

  outline: none;
  border: 1px solid #eae1ed;

  :focus {
    background-color: #eae1ed;
  }
`;

export const StyledLabel = styled.label`
  font-size: 1.5rem;
  padding: 10px;
  font-family: ${theme.mainFont};
  color: ${theme.text};
`;

export const StyledButton = styled.button`
  /* margin-top: 50px; */
  border-radius: 10px;
  font-size: 1.25rem;
  padding: 10px 80px;
  color: #ffffff;
  line-height: 1.4;
  background-color: ${theme.button};
`;

export const StyledLink = styled(Link)`
    font-family: ${theme.mainFont};
    color: ${theme.link};
`;
