import React from 'react';
import ProductCard from '../Components/ProductCard';
import TrainingSection from '../Components/TrainingSection';
import Clients from '../Components/Clients';
import NewsLetter from '../Components/NewsLetter';

const Home = () => {
    return (
        <div>
            <ProductCard></ProductCard>
            <TrainingSection></TrainingSection>
            <Clients></Clients>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;