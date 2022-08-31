
export default function Links() {
  return (
    <div className="Links">
      <li className="social-list__item">
        <a className="social-list__link" href="#">
          <i className="fab fa-twitter disabled-link"></i>
        </a>
      </li>
      <li className="social-list__item">
        <a className="social-list__link" href="#">
          <i className="fab fa-facebook disabled-link"></i>
        </a>
      </li>
      <li className="social-list__item">
        <a
          className="social-list__link"
          href="https://medium.com/@mrmendoza171/about"
          target="_blank"
        >
          <i className="fab fa-medium"></i>
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
