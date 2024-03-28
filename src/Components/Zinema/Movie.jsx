import movie_image from "../Assets/movie7.png";
import person from  "../Assets/person1.png";
import {Link} from "react-router-dom";
export const Movie = (props) => {
    return (
        <section className="movie-name">
            <div className="movie-info">
                <div className="movie-cards">
                    <div className="movie-card">
                        <div className="movie-image">
                            <img src={movie_image} alt="movie"/>
                        </div>
                        <p className="movie-title">my village people</p>
                    </div>
                    <div className="first-card"></div>
                    <div className="second-card"></div>
                    <div className="last-card"></div>
                </div>
                <button className="zinema">BUY TICKETS</button>
            </div>
            <div className="movie-details">
                <p className="movie-genre">Genres:
                    <span className="genre-list">drama | thriller | fantasy</span>
                </p>
                <p className="movie-director">Director:
                    <span className="director-name">niyi akimolayan</span>
                </p>
                <div className="movie-casts">
                    <span className="cast">Casts: </span>
                    <div className="cast-list">
                        <Link to="/" className="cast-person">
                            <img src={person} alt="person"/>
                            <span className="cast-name">Bovi Ugbonna</span>
                        </Link>
                        <Link to="/" className="cast-person">
                            <img src={person} alt="person"/>
                            <span className="cast-name">Bovi Ugbonna</span>
                        </Link>
                        <Link to="/" className="cast-person">
                            <img src={person} alt="person"/>
                            <span className="cast-name">Bovi Ugbonna</span>
                        </Link>
                        <Link to="/" className="cast-person">
                            <img src={person} alt="person"/>
                            <span className="cast-name">Bovi Ugbonna</span>
                        </Link>
                        <Link to="/" className="cast-person">
                            <img src={person} alt="person"/>
                            <span className="cast-name">Bovi Ugbonna</span>
                        </Link>
                        <Link to="/" className="cast-person">
                            <img src={person} alt="person"/>
                            <span className="cast-name">Bovi Ugbonna</span>
                        </Link>
                        <button className="more-person">
                            <i className="fa fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <p className="movie-description">
                    A selfish womanizer finds himself in bubbling
                    hot water after his reckless lifestyle accidentally
                    attracts the attention of a coven of witches.
                </p>
            </div>
        </section>
    )
}