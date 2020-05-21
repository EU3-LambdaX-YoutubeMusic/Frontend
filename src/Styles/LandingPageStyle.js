import styled from "styled-components";

export const LandingContainer = styled.section`
    max-width: 100%;
    height: 100%;
    display: flex;
    /* background-color: #e7f0f4; */
    background: linear-gradient(to left, #cc338b, #0A0B2C );
    border: 1px solid red;

    .Title {
        color: white;
    }

    .wrapper {
        width: 500px;
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .line1 {
        background-color: white;
        animation: animate1 1.9s linear infinite;
        top: 200px;
        left: 95px;
    }

    .line2 {
        background-color: white;
        animation: animate2 2.1s linear infinite;
        top: 200px;
        left: 95px;
    }

    .line3 {
        background-color: white;
        animation: animate3 2.3s linear infinite;
        top: 200px;
        left: 95px;
    }
`
