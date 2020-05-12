import styled from "styled-components"
import { Form } from "formik";

export const StyledSignupContainer = styled.section`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 5rem;
    padding: 1rem;

    .left {
        display: flex;
        flex-direction: column;
        width: 45%; 

        h1 {
            font-size: 2rem;
            padding: 0 2rem 2rem 2rem;
        }

        img {
            max-width: 100%;
            height: 100%;
        } 

        p {
            font-size: 1.2rem;
            padding: 2rem;
        }
    }

    .right {
        display: flex;
        flex-direction: column;
        width: 45%;
    }
`;

export const StyledFormField = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .inputField {
        display: flex;
        flex-direction: column;
        width:100%;
    }

`;

export const StyledInput = styled.input`
    font-size: 1.2rem;
    padding: 10px;
    height: 30px;
    border-radius: 5px;
`;

export const StyledLabel = styled.label`
    font-size: 1.5rem;
    padding: 10px;
`;

export const StyledButton = styled.button`
    margin: 20px;
    border-radius: 5px;
    font-size: 1.6rem;
    padding: 0.6rem 5rem;

`;
