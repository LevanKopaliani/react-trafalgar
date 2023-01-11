import "../styles/Button.css";

const Button = ({ text, tp = "btn" }) => {
  return (
    <div>
      <button className={tp}>{text}</button>
    </div>
  );
};

export default Button;
