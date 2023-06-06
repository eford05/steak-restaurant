import "./email.css";

function Email({ topTag, bottomTag }) {
  return (
    <section className="eclub">
      <h2 className="eclub-slogan">{topTag}</h2>
      <h2 className="eclub-slogan">{bottomTag}</h2>

      <div className="eclub-sub-container">
        <p className="eclub-subtitle">
          Sign Up for insider news, exclusive offers, and free perks such as
          appetizers and desserts.
        </p>
      </div>

      <form action="" className="eclub-form">
        <div className="eclub-input-wrapper">
          <label htmlFor="email" className="eclub-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="eclub-input"
            placeholder="Email Address*"
          />
        </div>

        <div className="eclub-input-wrapper">
          <label htmlFor="zip" className="eclub-label">
            Zipcode
          </label>
          <input
            id="zip"
            type="text"
            className="eclub-input"
            pattern="^\d{5}(?:[-\s]\d{4})?$"
            placeholder="Zip Code"
          />
        </div>
        <input type="submit" className="eclub-submit" value="Sign up" />
      </form>
    </section>
  );
}

export default Email;
