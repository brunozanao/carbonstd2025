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
      <WhyChooseUsComponent />
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
            {/* Team List Shortcode */}
            <div className="neoh_fn_team">
              <ul className="team_list">
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/1.jpeg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Augusto Lubian </h3>
                        <p className="fn_desc">Chief Executive Officer</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="https://x.com/CARBONSATS">
                            <i className="fn-icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/augustolubian/">
                            <i className="fn-icon-linkedin" />
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
                        <img src="img/author/2.jpeg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Axel Barrionuevo</h3>
                        <p className="fn_desc">Chief Operating Officer</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="https://www.linkedin.com/in/axel-barrionuevo-3654b855/">
                            <i className="fn-icon-linkedin" />
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
                        <img src="img/author/3.jpeg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Jonatas Marques </h3>
                        <p className="fn_desc">NFT Art Director</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="https://www.linkedin.com/in/jonatas-marques-abb813248/">
                            <i className="fn-icon-linkedin" />
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
                        <img src="img/author/5.jpeg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Diego Bandeira</h3>
                        <p className="fn_desc">Country Manager</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="https://x.com/brunozanaoStd">
                            <i className="fn-icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/brunozanao/">
                            <i className="fn-icon-linkedin" />
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
                        <img src="img/author/4.jpeg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Bruno Zanão</h3>
                        <p className="fn_desc">Web Designer</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="https://x.com/brunozanaoStd">
                            <i className="fn-icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/brunozanao/">
                            <i className="fn-icon-linkedin" />
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
      {/* !Investor Section */}
      {/* Blog Section */}
      {/* <BlogComponent /> */}
    </Layout>
  );
};
export default Index;
