import { useEffect, useState } from "react";
import Banner from "./Banner";
import HomeService from "./HomeService";
import HomeAbout from "./HomeAbout";
import HomeAdvantage from "./HomeAdvantage";



const Home = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("./data.json")
            .then(response => response.json())
            .then(data => setCards(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);





    return (
        <div>
            <Banner></Banner>
            {Array.isArray(cards) && <HomeService cards={cards} />}
            <HomeAbout></HomeAbout>
            <HomeAdvantage></HomeAdvantage>
        </div>
    );
};

export default Home;