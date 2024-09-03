import Link from "next/link";
const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/about/1.jpg" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">The Future Of Humanity.</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
            <p>
                  In the vast greenery of the Forests, where the sounds of nature weave a divine symphony and the vegetation stands as a living testament to the wonder of creation, we, at Carbon.Std, uphold our commitment as guardians of tomorrow.
                  </p>
                  <p>
                  We passionately believe that forest preservation is the silver thread that connects humanity to its destiny.
                  </p>
                  <p >Every root intertwined in the moist soil, every leaf turning towards the sky, every creature dancing under the green canopy, are precious fragments of what makes us human. The Forest is more than just a forest; it is an ancestral tale of balance and harmony.</p>
                  <p>To preserve this sanctuary is to embrace our own heritage and ensure a legacy of beauty for generations to come.</p>
                  <p>By protecting the Forests, we are weaving the fibers of the future. It is the key to climate stability, the source of unexplored medicines, and a refuge for countless forms of life.</p>
                  <p>
                  In every leaf that sways gently in the wind, in every drop of rain that nourishes the earth, we feel the pulse of the future. The Forest is our shared heritage, our guiding beacon amid the uncertainties of time.
                  </p>
                  <p>
                  Every step taken in its defense is an affirmation of our dedication to the well-being of the Earth and all its inhabitants.
                  </p>
            </div>
            <div className="buttons">
              <a
                href="https://opensea.io/CarbonStd"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/opensea.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">OpenSea</span>
              </a>
              <a
                href="https://discord.gg/tZmRfhbrap"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/discord.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Discord</span>
              </a>
            </div>
          </div>
        </div>
        {/* !About Item #1 */}
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/about/2.jpg" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">RWA + ReFi</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
              ReFi primary objective is the integration of environmental sustainability and technological advancements. In this perspective, the Carbon.Std project represents a strategic channel to establish a direct link between the environmental preservation sector, sustainability, and investors in the crypto industry.
              </p>
            </div>
            <div className="buttons">
              <Link legacyBehavior href="https://carbonstd.gitbook.io/carbon.std" target="_blank">
                <a className="neoh_fn_button only_text">
                  <span className="text">More About US</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/about/1.jpg" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">The Future Of Humanity.</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
            <p>
                  In the vast greenery of the Forests, where the sounds of nature weave a divine symphony and the vegetation stands as a living testament to the wonder of creation, we, at Carbon.Std, uphold our commitment as guardians of tomorrow.
                  </p>
                  <p>
                  We passionately believe that forest preservation is the silver thread that connects humanity to its destiny.
                  </p>
                  <p >Every root intertwined in the moist soil, every leaf turning towards the sky, every creature dancing under the green canopy, are precious fragments of what makes us human. The Forest is more than just a forest; it is an ancestral tale of balance and harmony.</p>
                  <p>To preserve this sanctuary is to embrace our own heritage and ensure a legacy of beauty for generations to come.</p>
                  <p>By protecting the Forests, we are weaving the fibers of the future. It is the key to climate stability, the source of unexplored medicines, and a refuge for countless forms of life.</p>
                  <p>
                  In every leaf that sways gently in the wind, in every drop of rain that nourishes the earth, we feel the pulse of the future. The Forest is our shared heritage, our guiding beacon amid the uncertainties of time.
                  </p>
                  <p>
                  Every step taken in its defense is an affirmation of our dedication to the well-being of the Earth and all its inhabitants.
                  </p>
            </div>
            <div className="buttons">
              <a
                href="https://opensea.io/CarbonStd"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/opensea.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">OpenSea</span>
              </a>
              <a
                href="https://discord.gg/tZmRfhbrap"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/discord.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Discord</span>
              </a>
            </div>
          </div>
        </div>
        {/* !About Item #2 */}
      </div>
    </section>
  );
};
export default AboutComponent;
