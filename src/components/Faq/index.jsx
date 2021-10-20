import "./index.scss";

const Faq = () => (
  <section id="faq">
    <h2>FAQ</h2>
    <div className="question">
      <h3>How does this work?</h3>
      <p>
        Check out the source code{" "}
        <a href="https://github.com/mihailthebuilder/fluffnet">here</a>.
      </p>
    </div>
    <div className="question">
      <h3>Do you store the images I upload?</h3>
      <p>Nope.</p>
    </div>
    <div className="question">
      <h3>
        How can I let you know about an issue/error with the website/model?
      </h3>
      <p>
        If you're a dev, you can raise a ticket on the{" "}
        <a href="https://github.com/mihailthebuilder/fluffnet">GitHub repo</a>.
        If not, you can send me a message on{" "}
        <a href="https://www.linkedin.com/in/mihailmarian/">LinkedIn</a>.
      </p>
    </div>
    <div className="question">
      <h3>Can I contact you about anything else?</h3>
      <p>
        Sure! I'm always open to talking to people about deep learning. Just
        send me a message on{" "}
        <a href="https://www.linkedin.com/in/mihailmarian/">LinkedIn</a>.
      </p>
    </div>
  </section>
);

export default Faq;
