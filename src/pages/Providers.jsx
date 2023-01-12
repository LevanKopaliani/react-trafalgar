import "../styles/Providers.css";
import Button from "../components/Button";
import img1 from "../img/providers.png";
import img2 from "../img/apps.png";

const Providers = () => {
  return (
    <div className="apps-section container">
      <section className="providers">
        <div className="providers-img">
          <img src={img1} alt="Providers" />
        </div>
        <div className="providers-info">
          <h1 className="providers__title">Leading healthcare providers</h1>
          <p className="providers__subtitle">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <Button text={"Learn more"} />
        </div>
      </section>
      <section className="apps">
        <div className="apps-info">
          <h1 className="apps__title">Download our mobile apps</h1>
          <p className="apps__subtitle">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <Button text={"Download"} />
        </div>
        <div className="apps-img">
          <img src={img2} alt="Apps" />
        </div>
      </section>
    </div>
  );
};

export default Providers;
