import Layout from "@/layout/Layout";
import AboutComponent from "@components/AboutComponent";
import BlogComponent from "@components/BlogComponent";
import Drops from "@components/Drops";
import ServicesComponent from "@components/ServicesComponent";
import WhyChooseUsComponent from "@components/WhyChooseUsComponent";

const Index = () => {
  return (
    <Layout pageName={"Home"}>
      {/* Hero Header */}
      <div className="neoh_fn_hero">
        {/* Overlay (of hero header) */}
        <div className="bg_overlay">
          {/* Overlay Color */}
          <div className="bg_color" />
          {/* !Overlay Color */}
          {/* Overlay Image */}
          <div className="bg_image" data-bg-img="img/hero/bg.jpg" />
          {/* !Overlay Image */}
        </div>
        {/* Overlay (of hero header) */}
        <div className="hero_content">
          <div className="container">
            <div className="content">
              <h2 className="fn_title" title="Neoh">
              𝗦𝘂𝘀𝘁𝗮𝗶𝗻𝗮𝗯𝗶𝗹𝗶𝘁𝘆 𝗕𝗼𝗻𝗱𝘀 + 𝗡𝗙𝗧 = 𝗥𝗲𝗙𝗶
              </h2>
              <p className="fn_desc fn_animated_text">
              The Future is Green, And it Goes Beyond the Carbon Market and Blockchain.
              </p>
            </div>
          </div>
          <a
            href="#about"
            className="neoh_fn_down magic-hover magic-hover__square"
          >
            <span className="text">Scroll Down</span>
            <span className="icon">
              <img src="svg/right-arr.svg" alt="" className="fn__svg" />
            </span>
          </a>
        </div>
      </div>
      {/* !Hero Header */}
      {/* About Section */}
      <AboutComponent />
      {/* !About Section */}
      {/* Services Section */}
      {/* <ServicesComponent /> */}
      {/* !Services Section */}
      <Drops />
      {/* Investor Section */}
      {/* Team Section */}
      <section id="team">
          <div className="container">
            {/* Main Title */}
            <div className="neoh_fn_title">
              <h3 className="fn_title">Our Team Members</h3>
              <div className="line">
                <span />
              </div>
            </div>
            {/* !Main Title */}
            <div className="mw_650 fn_description">
              <p className="fn_desc fn_animated_text">
                The idea was born in London and rapidly became a borderless
                vision - A team of Neoh with a background in computer graphics,
                crypto, technology, and art.
              </p>
            </div>
            {/* Team List Shortcode */}
            <div className="neoh_fn_team">
              <ul className="team_list">
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/1.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Tom Mccarthy</h3>
                        <p className="fn_desc">2D Artist</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fn-icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-behance" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/2.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Owen Bradley</h3>
                        <p className="fn_desc">2D Artist</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fn-icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-behance" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/3.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Daniel Bradley</h3>
                        <p className="fn_desc">2D Artist</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fn-icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-behance" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/4.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Skylar Jarvis</h3>
                        <p className="fn_desc">2D Artist</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fn-icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-behance" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/5.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Avery Briggs</h3>
                        <p className="fn_desc">2D Artist</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fn-icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-behance" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/6.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Bernard Green</h3>
                        <p className="fn_desc">2D Artist</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fn-icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-behance" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* !Team List Shortcode */}
          </div>
        </section>
        {/* !Team Section */}
      <WhyChooseUsComponent />
      {/* !Investor Section */}
      {/* Blog Section */}
      {/* <BlogComponent /> */}
    </Layout>
  );
};
export default Index;
