import styled from 'styled-components'

export const DashboardContainer = styled.div`
    background-color: #e7f0f4;
`

export const Main = styled.main`
    margin-top: 0;
    width: 50%;    
    padding: 5px 45px;
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
                    height: 40px;
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
    justify-content: space-between;
    margin-top: 6rem;
    width: 100%;
    height: 50vh;

    .youtube-window {
        width: 47%;
        img {
            width:100%;
            height:100%;
        }        
    }

    .track-list {
        border: 1px solid black;
        width: 47%;
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
`;