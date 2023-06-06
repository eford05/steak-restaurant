import React from "react";
import Email from "../../components/email/Email";
import "./home.css";

function Home() {
  return (
    <main className="home">
      <Email topTag="Love Steak?" bottomTag="Become a VIP" />
    </main>
  );
}

export default Home;
