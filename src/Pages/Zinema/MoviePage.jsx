import './zinema.css'
import {Navbar} from "../../Components/Zinema/Navbar";
import {Footer} from "../../Components/Zinema/Footer";
import {Movie} from "../../Components/Zinema/Movie";

export const MoviePage = () => {
    return (
       <>
           <Navbar />
           <Movie />
           <Footer />
       </>
    )
};
