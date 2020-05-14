import React from 'react'
import { Main, PlayListSection } from '../Styles/Dashboard'
// import { FontAwesomeIcon } from '@FontAwesome/FontAwesomeIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import youtubeimg from '../Assets/youtube-banner.png';


export default function Dashboard() {
    return (
        <Main>
            <h1 className="user-greeting">Welcome, Username!</h1>
            <article>
                <form>
                    <div className="playlist-form">
                        <div className="playlist-input-container">
                            <label>Music Title</label>
                            <input />
                        </div>
                        <div className="playlist-input-container">
                            <label>Artist</label>
                            <input />
                        </div>
                        <div className="playlist-input-container">
                            <label>Link</label>
                            <input />
                        </div>
                    </div>                    
                    <div className="submit-container">
                        <button>Submit</button>
                    </div>
                </form>
            </article>
            <PlayListSection>
                <div className="youtube-window">
                    <img width="230px" src={youtubeimg} alt="youtube-banner-img"/>
                </div>
                <div className="track-list">
                    <div>
                        <ul>
                            <li><FontAwesomeIcon icon={faPlayCircle} /> Alicia Keys - Falling</li>
                            <li><FontAwesomeIcon icon={faPlayCircle} /> Alicia Keys - Falling</li>
                            <li><FontAwesomeIcon icon={faPlayCircle} /> Alicia Keys - Falling</li>
                            <li><FontAwesomeIcon icon={faPlayCircle} /> Alicia Keys - Falling</li>
                            <li><FontAwesomeIcon icon={faPlayCircle} /> Alicia Keys - Falling</li>
                            <li><FontAwesomeIcon icon={faPlayCircle} /> Alicia Keys - Falling</li>
                            <li><FontAwesomeIcon icon={faPlayCircle} /> Alicia Keys - Falling</li>
                            <li><FontAwesomeIcon icon={faPlayCircle} /> Alicia Keys - Falling</li>
                        </ul>
                    </div>
                    <div className="buttons">
                        <button>Play All</button>
                        <button>Clear Playlist</button>
                    </div>

                </div>

            </PlayListSection>
        </Main>
    )
}
