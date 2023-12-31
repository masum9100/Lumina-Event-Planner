import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailsCard from './ServiceDetailsCard';

const ServiceDetails = () => {
    const [card, setCard] = useState({});

    const { id } = useParams();
    const cards = useLoaderData();

    
    

    useEffect(() => {
        const findCard = cards?.find(card => card.id == id);
        setCard(findCard);
    }, [id, cards]);

    console.log(card)
    return (
        <div>
            <ServiceDetailsCard card={card} />
        </div>
    );
};

export default ServiceDetails;
