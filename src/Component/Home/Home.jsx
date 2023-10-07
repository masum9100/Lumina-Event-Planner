import { useEffect, useState } from "react";
import Banner from "./Banner";
import HomeService from "./HomeService";


const Home = () => {
    const [serviceCard, setServiceCard]=useState([]);

    useEffect(()=>{
        fetch("./data.json")
        .then (res => res.json())
        .then (data=> setServiceCard(data))
        .catch(error => console.error("Error fetching data:", error))
    }, []);





    return (
        <div>
            <Banner></Banner>
            {Array.isArray(serviceCard) && <HomeService serviceCard={serviceCard}  />}
        </div>
    );
};

export default Home;