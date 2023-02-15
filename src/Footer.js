import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>Hayoung Yoo Oh</p>
        <div className="icon-buttons">
          <a className="icon-button mail" href="mailto:Hayoung.Yoo@svusd.org">
            <i className="fas fa-envelope icon-mail" />
            <span />
          </a>
          <a
            className="icon-button linkedin"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/hayoung-yoo-b5071375/"
          >
            <i className="fab fa-linkedin icon-linkedin" />
            <span />
          </a>
          <a
            className="icon-button twitter"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/TeachMsYoo"
          >
            <i className="fab fa-twitter icon-twitter" />
            <span />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
