import { useEffect, useState } from "react";
import Banner from "./Banner";
import HomeService from "./HomeService";
import HomeAbout from "./HomeAbout";
import HomeAdvantage from "./HomeAdvantage";



const Home = () => {
    const [serviceCards, setServiceCards]=useState([]);

    useEffect(()=>{
        fetch("/data.json")
        .then (res => res.json())
        .then (data=> setServiceCards(data))
        .catch(error => console.error("Error fetching data:", error))
    }, []);
    





    return (
        <div>
            <Banner></Banner>
            {Array.isArray(serviceCards) && <HomeService serviceCards={serviceCards}  />}
            <HomeAbout></HomeAbout>
            <HomeAdvantage></HomeAdvantage>
        </div>
    );
};

export default Home;