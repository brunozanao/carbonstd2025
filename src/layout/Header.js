import Link from "next/link";
import { Fragment, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = (isAnchor) => {
    if (isAnchor) {
      setToggle(false); // Fechar o menu ao clicar em âncoras
    }
  };

  return (
    <Fragment>
      <div
        className={`nav_overlay ${toggle ? "go" : ""}`}
        onClick={() => setToggle(false)}
      />
      <div className={`neoh_fn_nav ${toggle ? "go" : ""}`}>
        <div className="trigger is-active">
          <div className="trigger_in" onClick={() => setToggle(false)}>
            <span className="text">Close</span>
            <span className="hamb">
              <span className="hamb_a" />
              <span className="hamb_b" />
              <span className="hamb_c" />
            </span>
          </div>
        </div>
        <div className="nav_content">
          <div className="nav_menu">
            <ul>
              <li className="menu-item menu-item-has-children">
                <a
                  href="https://carbonstd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
              <li className="menu-item">
                <Link
                  legacyBehavior
                  href="#about"
                  onClick={() => handleClick(true)}
                >
                  Manifest
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  legacyBehavior
                  href="#team"
                  onClick={() => handleClick(true)}
                >
                  Our Team
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  legacyBehavior
                  href="https://carbonstd.gitbook.io/governance/carbon-credit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Our Carbon
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  legacyBehavior
                  href="https://carbonstd.gitbook.io/whitepaper/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whitepaper
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  legacyBehavior
                  href="https://carbonstd.gitbook.io/governance/roadmap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Roadmap
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  legacyBehavior
                  href="https://carbonstd.gitbook.io/carbon.std"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Governance
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  legacyBehavior
                  href="https://carbonstd.com/buynow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Now
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  legacyBehavior
                  href="https://carbonstd.gitbook.io/governance/treasury-vault"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Treasury Vault
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  legacyBehavior
                  href="https://carbonstd.gitbook.io/governance/carbon.std-dao"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DAO Platform
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  legacyBehavior
                  href="https://carbonstd.com/legaldocuments"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Legal Documents
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav_buttons">
            <a
              href="https://opensea.io/"
              className="neoh_fn_button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src="svg/opensea.svg" alt="" className="fn__svg" />
              </span>
              <span className="text">OpenSea</span>
            </a>
            <a
              href="https://discord.com/"
              className="neoh_fn_button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src="svg/discord.svg" alt="" className="fn__svg" />
              </span>
              <span className="text">Discord</span>
            </a>
          </div>
        </div>
        <div className={`nav_footer ${toggle ? "ready" : ""}`}>
          <div className="nf_left">
            <p>Copyright@Carbon.Std{new Date().getFullYear()}</p>
          </div>
          <div className="nf_right">
            <div className="neoh_fn_social_list">
              <ul>
                <li>
                  <a
                    href="https://x.com/carbonstd?s=21&t=nVja-RUzpdKwKqRLWJb-Jw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fn-icon-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/carbon.standard?igsh=ZWJqZnhpNXBhenly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fn-icon-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <header className="neoh_fn_header">
        <div className="container">
          <div className="header_in">
            <div className="logo">
              <Link legacyBehavior href="/">
                <a>
                  <img src="img/logo.png" alt="" />
                </a>
              </Link>
            </div>
            <div className="trigger">
              <div className="trigger_in" onClick={() => setToggle(!toggle)}>
                <span className="text">Menu</span>
                <span className="hamb">
                  <span className="hamb_a" />
                  <span className="hamb_b" />
                  <span className="hamb_c" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
