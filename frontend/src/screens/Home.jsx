// screens/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import BestWorksCarousel from "../components/BestWorksCarousel";

const Home = () => {
    return (
        <main>
            <Hero />
            <BestWorksCarousel />
        </main>
    );
};

export default Home;