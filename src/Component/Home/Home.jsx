import { useEffect, useState } from "react";
import Banner from "./Banner";
import HomeService from "./HomeService";
import AboutUs from "../AboutUs";


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
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;