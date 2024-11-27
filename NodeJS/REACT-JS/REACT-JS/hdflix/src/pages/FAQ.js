import React from "react";

const faqData = [
  {
    question: "What is HDflix?",
    answer:
      "It is a source where you can watch any movies, shows online for free without any buffering, be the first one to explore everything.",
  },
  {
    question: "How much does HDflix cost?",
    answer: "It doesn't cost much. It is pocket-friendly and helps you maintain your budget.",
  },
  {
    question: "Where can I watch?",
    answer: "You can watch it on any platform using Mobiles, Tablets, Smart TV, and Laptop.",
  },
  {
    question: "How do I cancel?",
    answer: "You can cancel it anytime, anywhere without hesitation with a full refund.",
  },
  {
    question: "What can I watch on HDflix?",
    answer: "You can watch anything you need as per your requirement. There is no limit to entertainment.",
  },
];

const FAQ = () => (
  <div className="faq">
    <h2>Frequently Asked Questions</h2>
    <ul className="accordion">
      {faqData.map((faq, index) => (
        <li key={index}>
          <input type="radio" name="accordion" id={`faq-${index}`} />
          <label htmlFor={`faq-${index}`}>{faq.question}</label>
          <div className="content">
            <p>{faq.answer}</p>
          </div>
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
