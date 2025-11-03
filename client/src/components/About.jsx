
import "../index.css"
export default function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">
          We’re passionate innovators, storytellers, and creators shaping the future through technology and insight.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-heading">Who We Are</h2>
        <p className="about-text">
          We’re a team of developers, designers, and thinkers dedicated to bringing you the most relevant and inspiring technology updates. 
          From groundbreaking innovations to creative design breakthroughs, our goal is to make complex ideas accessible and exciting.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-heading">Our Mission</h2>
        <p className="about-text">
          Our mission is simple - empower people with accurate, engaging, and forward-thinking information. 
          We aim to bridge the gap between creativity and technology, helping readers stay one step ahead in a rapidly changing world.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-heading">Our Journey</h2>
        <p className="about-text">
          Starting as a small blog dedicated to tech enthusiasts, we’ve grown into a trusted source for innovation and design updates. 
          Every article, every visual, and every story we share reflects our belief that the future belongs to those who imagine it.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-heading">What We Do</h2>
        <ul className="about-list">
          <li>Deliver the latest news in technology, AI, and digital culture</li>
          <li>Feature innovators and creative professionals making an impact</li>
          <li>Provide deep insights, trends, and data-driven analysis</li>
        </ul>
      </section>

      <section className="about-section about-cta">
        <h2 className="about-heading">Join Our Vision</h2>
        <p className="about-text">
          We’re more than just a publication - we’re a movement. 
          Join us as we explore the ideas that define tomorrow. 
        </p>
        <a href="/contact" className="about-btn">Get in Touch</a>
      </section>
    </div>
  );
}