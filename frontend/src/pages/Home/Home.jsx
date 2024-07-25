import { Link } from "react-router-dom";
import Einstellungen from "../../components/Einstellungen/Einstellungen";

const Home = () => {
    return (
        <>
            <h1>Ich bin die Startseite</h1>
            <Einstellungen />
            <Link to="/kontakt">Kontaktieren Sie uns!</Link>
        </>
    );
};

export default Home;
