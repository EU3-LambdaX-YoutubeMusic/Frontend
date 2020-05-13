import styled from "styled-components"
import { Form } from "formik";

export const StyledSignupContainer = styled.section`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 5rem;
    padding: 1rem;
    background-color: #CCDFCB;

    .left {
        display: flex;
        flex-direction: column;
        width: 45%; 

        h1 {
            font-size: 2rem;
            padding: 0 2rem 2rem 0;
        }

        img {
            width: 100%;
            height: 80%;
        } 

        p {
            font-size: 1.2rem;
            padding: 1rem;
            margin-bottom: 5px;
        }
    }

    .right {
        display: flex;
        flex-direction: column;
        width: 45%;
        margin-top: 80px;
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
        width:80%;
    }

`;

export const StyledInput = styled.input`
    font-size: 1.2rem;
    padding: 10px;
    height: 20px;
    border-radius: 5px;
`;

export const StyledLabel = styled.label`
    font-size: 1.5rem;
    padding: 10px;
`;

export const StyledButton = styled.button`
    margin-top: 50px;
    border-radius: 5px;
    font-size: 1.6rem;
    padding: 0.6rem 5rem;
    background-color: #FF6A5C;

`;

