import Button from "../components/Button";
import "../styles/About.css";

import CardData from "../data/CardData";
import Card from "../components/Card";
const About = () => {
  return (
    <section className="about  container">
      <h1 className="about-title">Check out our latest article</h1>
      <div className="about-cards">
        {CardData.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            title={card.title}
            descripin={card.description}
          />
        ))}
      </div>
      <div className="cards-button">
        <Button text={"View all"} />
      </div>
    </section>
  );
};

export default About;
