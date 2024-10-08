import Link from "next/link";
import { Fragment, useState } from "react";

const Timeline = () => {
  // Definindo o HUMANS como ativo (valor 1)
  const [active, setActive] = useState(1);
  const [activeTimeline, setActiveTimeline] = useState(1);

  const onClick = (value) => {
    setActive(value);
  };

  const activeClass = (value) =>
    value === active ? "active" : value > active ? "next" : "previous";

  const filter = (value) => (100 / active) * value;

  return (
    <Fragment>
      <div className="neoh_fn_title">
        <h3 className="fn_title">A Universe of Various Rarities</h3>
        <div className="line">
          <span />
        </div>
      </div>
      <div className="neoh_fn_timeline">
        <div className="timeline_content">
          <ul className="timeline_list">
            <li className={`timeline_item ${activeClass(1)}`} data-index={1}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/1/1.jpeg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/1/2.jpeg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/1/3.jpeg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>HUMANS</span>
                  </p>
                  <p className="fn_desc">
                    Are driven by curiosity and ambition, always seeking to acquire more knowledge.
                  </p>
                  <p className="fn_read">
                    <Link legacyBehavior href="https://opensea.io/CarbonStd">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(2)}`} data-index={2}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/2/1.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/2/2.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/2/3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>ROBOTS</span>
                  </p>
                  <p className="fn_desc">
                    Are unpredictable in their self-awareness, striving to be recognized as intelligent life.
                  </p>
                  <p className="fn_read">
                    <Link legacyBehavior href="https://opensea.io/CarbonStd">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(3)}`} data-index={3}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/3/1.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/3/2.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/3/3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>ZENON</span>
                  </p>
                  <p className="fn_desc">
                  Are beings of primordial energy, known by many names throughout history. Humans try to understand and connect with them through folklore, religions, and rituals.
                  </p>
                  <p className="fn_read">
                    <Link legacyBehavior href="https://opensea.io/CarbonStd">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(4)}`} data-index={4}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/4/1.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/4/2.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/4/3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>ECOANS</span>
                  </p>
                  <p className="fn_desc">
                  Are humans who have merged their spirits with ethereal forces, transforming into a new race.
                  </p>
                  <p className="fn_read">
                    <Link legacyBehavior href="https://opensea.io/CarbonStd">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(5)}`} data-index={5}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/5/1.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/5/2.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/5/3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>ABYSSUS</span>
                  </p>
                  <p className="fn_desc">
                  Are abyssal creatures that were summoned against their will.
                  </p>
                  <p className="fn_read">
                    <Link legacyBehavior href="https://opensea.io/CarbonStd">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(6)}`} data-index={6}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/6/1.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/6/2.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/6/3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(7)}`} data-index={7}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/7/1.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/7/2.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/7/3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="timeline_progress">
          <a
            className="nav_prev c-pointer"
            onClick={() =>
              setActiveTimeline(
                activeTimeline == 1 ? activeTimeline : activeTimeline - 1
              )
            }
          >
            <img src="svg/right-arr.svg" alt="" className="fn__svg" />
          </a>
          <a
            onClick={() =>
              setActiveTimeline(
                activeTimeline == 7 ? activeTimeline : activeTimeline + 1
              )
            }
            className="nav_next c-pointer"
          >
            <img src="svg/right-arr.svg" alt="" className="fn__svg" />
          </a>
          <div className="progress_line_wrapper">
            <div
              className="progress_line"
              style={{
                width: "1645.66px",
                transform: `translateX(-${
                  (100 / activeTimeline) * (activeTimeline - 2)
                }%)`,
              }}
            >
              <ul>
                <li className={activeClass(1)}>
                  <a onClick={() => onClick(1)}>
                    <span className="text">HUMANS</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(1)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(2)}>
                  <a onClick={() => onClick(2)}>
                    <span className="text">ROBOTS</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(2)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(3)}>
                  <a onClick={() => onClick(3)}>
                    <span className="text">ZENON</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(3)}%)` }}
                    />
                  </a>
                </li><li className={activeClass(4)}>
                  <a onClick={() => onClick(4)}>
                    <span className="text">ECOANS</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(4)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(5)}>
                  <a onClick={() => onClick(5)}>
                    <span className="text">ABYSSUS</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(5)}%)` }}
                    />
                  </a>
                </li>
              </ul>
              <span className="active_line" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Timeline;
