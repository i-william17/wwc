// screens/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import QuickChatTerminal from "../components/QuickChatTerminal";
import BestWorksCarousel from "../components/BestWorksCarousel";

const Home = () => {
    return (
        <main>
            <Hero />
            <QuickChatTerminal />
            <BestWorksCarousel />
        </main>
    );
};

export default Home;