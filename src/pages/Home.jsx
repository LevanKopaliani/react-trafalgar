import "../styles/Home.css";
import main_img from "../img/mian-illustration.png";
import Button from "../components/Button";

const Home = () => {
  return (
    <main className="main container">
      <div className="main-info">
        <h1 className="main-info__title">Virtual healthcare for you</h1>
        <p className="main-info__subtitle">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <Button text={"Consult today"} tp={"btn primary"} />
      </div>
      <div className="main-img">
        <img src={main_img} alt="main ilustration" />
      </div>
    </main>
  );
};

export default Home;
