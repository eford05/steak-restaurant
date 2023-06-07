import React from "react";
import Email from "../../components/email/Email";
import FeatureCard from "../../components/feature-card/FeatureCard";
import "./home.css";

function Home() {
  return (
    <main className="home">
      <div className="background-texture"></div>
      <Email topTag="Love Steak?" bottomTag="Become a VIP" />
      <section className="featured">
        <FeatureCard
          tagline="Sizzling Steak"
          image="https://images.unsplash.com/photo-1583953623787-ada99d338235?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
          path="/menu"
          btnTitle="View More"
        />
        <FeatureCard
          tagline="Get Fired Up!"
          image="https://images.pexels.com/photos/5539072/pexels-photo-5539072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          path="/menu"
          btnTitle="Order Now"
        />
        <FeatureCard
          tagline="Savory Steaks"
          image="https://images.unsplash.com/photo-1599458253959-5d2d95a60397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          path="/wait"
          btnTitle="Reserve"
        />
      </section>
    </main>
  );
}

export default Home;
