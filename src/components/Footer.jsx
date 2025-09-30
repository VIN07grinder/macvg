import { Link } from "react-router-dom";
import { logo, email, youtube, github, discord } from "../assets/assets";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <Link to="/" className="footer-logo">
          <img src={logo} /> Vboi's Games
        </Link>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://mac-web.github.io" target="_blank">
            MacWeb
          </a>
        </div>
        <div className="footer-copy">All rights reserved</div>
        <div className="footer-copy">
          Made by{" "}
          <a href="https://github.com/VIN07grinder/" target="_blank">
            VIN07grinder
          </a>
        </div>
      </div>
      <div className="footer-column">
        <h2 className="footer-title">Browse Games</h2>
        <Link to="/" className="footer-link">
          Home
        </Link>
        <Link to="/new" className="footer-link">
          New
        </Link>
        <Link to="/trending" className="footer-link">
          Trending
        </Link>
        <Link to="/recent" className="footer-link">
          Recent
        </Link>
        <Link to="/settings" className="footer-link">
          Settings
        </Link>
      </div>
      <div className="footer-column">
        <h2 className="footer-title">Social</h2>
        <div className="footer-social">
          <a href="https://www.youtube.com/@BB123-YT" target="_blank" className="footer-icon" title="YouTube">
            <img src={youtube} />
          </a>
          <a href="https://github.com/VIN07grinder/" target="_blank" className="footer-icon" title="Source code">
            <img src={github} />
          </a>
          <a href="https://discord.gg/ggGy547V" target="_blank" className="footer-icon" title="Join our server!">
            <img src={discord} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
