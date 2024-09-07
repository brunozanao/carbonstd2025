import Link from "next/link";
import { Fragment, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  // Função para fechar o menu ao clicar nos links de âncora
  const handleAnchorClick = () => {
    setToggle(false);
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
                  onClick={() => setToggle(false)}
                >
                  Home
                </a>
              </li>
              <li className="menu-item">
                <Link href="#about" onClick={handleAnchorClick}>
                  Manifest
                </Link>
              </li>
              <li className="menu-item">
                <Link href="#team" onClick={handleAnchorClick}>
                  Our Team
                </Link>
              </li>
              <li className="menu-item">
                <a
                  target="_blank"
                  href="https://carbonstd.gitbook.io/governance/carbon-credit"
                >
                  Our Carbon
                </a>
              </li>
              <li className="menu-item">
                <a
                  target="_blank"
                  href="https://carbonstd.gitbook.io/whitepaper/"
                >
                  Whitepaper
                </a>
              </li>
              <li className="menu-item">
                <a
                  target="_blank"
                  href="https://carbonstd.gitbook.io/governance/roadmap"
                >
                  Roadmap
                </a>
              </li>
              <li className="menu-item">
                <a
                  target="_blank"
                  href="https://carbonstd.gitbook.io/carbon.std"
                >
                  Governance
                </a>
              </li>
              <li className="menu-item">
                <Link href="https://carbonstd.com/buynow">
                  Buy Now
                </Link>
              </li>
              <li className="menu-item">
                <a
                  target="_blank"
                  href="https://carbonstd.gitbook.io/governance/treasury-vault"
                >
                  Treasury Vault
                </a>
              </li>
              <li className="menu-item">
                <a
                  target="_blank"
                  href="https://carbonstd.gitbook.io/governance/carbon.std-dao"
                >
                  DAO Platform
                </a>
              </li>
              <li className="menu-item">
                <Link href="https://carbonstd.com/legaldocuments">
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
                  >
                    <i className="fn-icon-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/carbon.standard?igsh=ZWJqZnhpNXBhenly"
                    target="_blank"
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
              <Link href="/">
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
      {/* !Header */}
    </Fragment>
  );
};

export default Header;
