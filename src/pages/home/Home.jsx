import React from "react";
import Email from "../../components/email/Email";
import FeatureCard from "../../components/feature-card/FeatureCard";
import "./home.css";
import Offers from "../../components/offers/Offers";

function Home() {
  return (
    <main className="home">
      <h1 className="home-title">Quality Beef</h1>
      <figure className="cow-fig">
        <img className="cow-img" src={require("../../images/cow.png")} alt="" />
      </figure>
      <Email topTag="Love Steak?" bottomTag="Become a VIP" className="eclub" />
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
      <section className="offers">
        <Offers
          img="GiftCard.png"
          alt="gift card"
          title="Gift Cards"
          desc="Give a gift card to someone special."
          path="/"
          link="Go to gift cards"
        />
        <Offers
          img="Steak.png"
          alt="Cell phone"
          title="Keep in touch"
          desc="Get text notifications with news, updates, and special offers"
          path="/"
          link="Sign up"
        />

        <Offers
          img="Cell.png"
          alt="cell phone"
          title="Discover our app"
          desc="Deals and delicious steaks just a tap away."
          path="/"
          link="App store"
        />
      </section>
    </main>
  );
}

export default Home;
