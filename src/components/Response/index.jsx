import "./index.scss";

const Response = ({ message }) => (
  <section id="results">
    <h2>
      🤖 says...
      <span className="robot-message">{message}</span>
    </h2>
  </section>
);

export default Response;
