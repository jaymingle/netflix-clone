import './HomeScreen.css'
import Nav from "./Nav.jsx";
import Banner from "./Banner.jsx";
import Row from "./Row.jsx";

const HomeScreen =  () => {
    return(
        <div className="homeScreen">
            <Nav/>
            <Banner/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
        </div>
    )
}
export default HomeScreen;
