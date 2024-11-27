import React from "react";

import nettv from "../assets/imgs/nettv.jpg";
import nettv2 from "../assets/imgs/nettv2.png";
import nettv3 from "../assets/imgs/nettv3.png";
import nettv6 from "../assets/imgs/nettv6.jpg";

const faqData = [
  {
    title: "Enjoy on your TV",
    description: "Watch on Smart TV, Mobiles, Tablets, PC, X-Box, PS-5 and more...",
    img: nettv,
  },
  {
    title: "Download Your Shows to Watch it",
    description: "Save your favourites easily and watch anywhere you want...",
    img: nettv2,
  },
  {
    title: "Watch Everyday",
    description: "Watch anywhere, anytime without hesitation...",
    img: nettv3,
  },
  {
    title: "Create Profile for Kids",
    description: "Make your children more creative with kids' profiles for good learning...",
    img: nettv6,
  },
];

const FAQ = () => (
  <div className="faq">
    <h2>Features</h2>
    <ul className="features-list">
      {faqData.map((faq, index) => (
        <li key={index} className="feature-item">
          <img src={faq.img} height={300} width={500} alt={faq.title} />
          <h3>{faq.title}</h3>
          <p>{faq.description}</p>
        </li>
      ))}
    </ul>
    <small>Ready to watch? Enter your Email to create your Membership...</small>
    <form className="email-signup">
      <input type="email" placeholder="Email address" id="email" required />
      <button type="submit">Get Started</button>
    </form>
  </div>
);

export default FAQ;
