import "./App.css";

export default function Links() {
  return (
    <div className="Links">
      <li className="social-list__item">
        <a className="social-list__link" href="#">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li className="social-list__item">
        <a className="social-list__link" href="#">
          <i className="fab fa-facebook"></i>
        </a>
      </li>
      <li className="social-list__item">
        <a className="social-list__link" href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li className="social-list__item">
        <a
          className="social-list__link"
          href="https://www.linkedin.com/in/mrmendoza171/"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
      <li className="social-list__item">
        <a
          className="social-list__link"
          href="https://github.com/mrmendoza171"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
      </li>
    </div>
  );
}
