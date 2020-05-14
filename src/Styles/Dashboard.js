import styled from 'styled-components'

export const Main = styled.main`
    margin-top: 0;
    width: 60%;
    padding: 5px 5%;
    height: 100vh;
    margin: 0 auto;
    border: 1px solid black;
    background-color: white;//rgb(242, 245, 240);

    .user-greeting {
        display: block;
        text-align: left;        
    }

    article {
        width: 100%;
        background-color: white;
    }

    form {

        width: 100%;
        display: flex;
        padding: 45px;

        .playlist-form {
            width: 60%;
            .playlist-input-container {
                display: flex;
                margin-bottom: 5px;
                label {
                    font-size: 1.5rem;
                    width: 30%;
                    text-align: left;
                    margin-left: 5px;
                }
                input {
                    width: 60%;
                    background-color: rgb(239, 239, 239);
                }

            }
        }
        .submit-container {
            width: 30%;
            button {
                margin: 1.5rem;
                width: 50%;
                height: 60%;
            }
        }
    }
    
`;

export const PlayListSection = styled.article`

    display: flex;
    margin: 3% auto;
    justify-content: center;
    width: 100%;
    height: 50vh;
    .youtube-window {
        width: 45%;
        margin-right: 1.2rem;
        img {
            width:100%;
            height:100%;
        }

        
    }
    .track-list {
        border: 1px solid black;
        width: 45%;
        text-align: left;
        background-color: rgb(239, 239, 239);
        li{
            list-style: none;
            font-size: 1.5rem;
        }

    }

    .buttons {
        display: flex;
        justify-content: space-around;
        width: 80%;
    }


`