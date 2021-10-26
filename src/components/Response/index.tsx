import "./index.scss";

type AppProps = {
  message: string;
};

const Response = ({ message }: AppProps) => (
  <section id="results">
    <h2>
      🤖 says...
      <span className="robot-message">{message}</span>
    </h2>
  </section>
);

export default Response;
