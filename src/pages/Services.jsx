import "../styles/Services.css";
import icon1 from "../img/icon1.png";
import icon2 from "../img/icon2.png";
import icon3 from "../img/icon3.png";
import icon4 from "../img/icon4.png";
import icon5 from "../img/icon5.png";
import icon6 from "../img/icon6.png";
import Button from "../components/Button";

const Services = () => {
  return (
    <div className="services container">
      <h1 className="services-heading">Our services</h1>
      <p className="services-description">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <div className="services-grid container">
        <div className="services-grid__item">
          <img src={icon1} alt="Search Doctor" />
          <div className="grid-item__description">
            <h2>Search doctor</h2>
            <p>
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
        </div>
        <div className="services-grid__item">
          <img src={icon2} alt="Search Doctor" />
          <div className="grid-item__description">
            <h2>Online pharmacy</h2>
            <p>
              Buy your medicines with our mobile application with a simple
              delivery system
            </p>
          </div>
        </div>
        <div className="services-grid__item">
          <img src={icon3} alt="Search Doctor" />
          <div className="grid-item__description">
            <h2>Consultation</h2>
            <p>
              Free consultation with our trusted doctors and get the best
              recomendations
            </p>
          </div>
        </div>
        <div className="services-grid__item">
          <img src={icon4} alt="Search Doctor" />
          <div className="grid-item__description">
            <h2>Details info</h2>
            <p>
              Free consultation with our trusted doctors and get the best
              recomendations
            </p>
          </div>
        </div>
        <div className="services-grid__item">
          <img src={icon5} alt="Search Doctor" />
          <div className="grid-item__description">
            <h2>Emergency care</h2>
            <p>
              You can get 24/7 urgent care for yourself or your children and
              your lovely family
            </p>
          </div>
        </div>
        <div className="services-grid__item">
          <img src={icon6} alt="Search Doctor" />
          <div className="grid-item__description">
            <h2>Tracking</h2>
            <p>Track and save your medical history and health data</p>
          </div>
        </div>
      </div>
      <div className="services-grid__button">
        <Button text={"Learn more"} />
      </div>
    </div>
  );
};

export default Services;
