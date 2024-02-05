import './HomeScreen.css'
import Nav from "../components/Nav.jsx";
import Banner from "../components/Banner.jsx";
import Row from "../components/Row.jsx";
import requests from "../Requests.js";

const HomeScreen =  () => {
    return(
        <div className="homeScreen">
            <Nav/>
            <Banner/>

            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests. fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests. fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests. fetchDocumentaries} />
        </div>
    )
}
export default HomeScreen;
