import { Fragment, useState } from "react";
import Timeline from "./Timeline";
import ProductPopup from "./popup/ProductPopup";

const Drops = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState({ img: "", title: "" });
  const dropData = [
    {
      img: "img/drops/1.jpeg",
      title: "CarbonStd #418",
    },
    {
      img: "img/drops/2.jpeg",
      title: "CarbonStd #204",
    },
    {
      img: "img/drops/3.jpeg",
      title: "CarbonStd #506",
    },
    {
      img: "img/drops/4.jpeg",
      title: "CarbonStd #243",
    },
    {
      img: "img/drops/5.jpeg",
      title: "CarbonStd #543",
    },
    {
      img: "img/drops/6.jpeg",
      title: "CarbonStd #08",
    },
  ];

  const onClick = (value) => {
    setData(dropData[value - 1]);
    setToggle(true);
  };

  const { img, title } = data;

  return (
    <Fragment>
      <ProductPopup
        open={toggle}
        close={() => setToggle(false)}
        img={img}
        title={title}
      />
      {/* Drops Section */}
      <section id="drop">
        <div className="container">
          {/* Main Title */}
          <div className="neoh_fn_title">
            <h3 className="fn_title">Our Latest Drops</h3>
            <div className="line">
              <span />
            </div>
          </div>
          {/* !Main Title */}
          {/* Drops List */}
          <div className="neoh_fn_drops">
            <ul>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/1.jpeg"
                  data-modal-title="CarbonStd #418"
                  // data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url="https://opensea.io/CarbonStd"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="img/drops/1.jpeg" alt="" />
                    <a className="full_link" onClick={() => onClick(1)} />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(1)}>CarbonStd #418</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/2.jpeg"
                  data-modal-title="CarbonStd #204"
                  // data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url="https://opensea.io/CarbonStd"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="img/drops/2.jpeg" alt="" />
                    <a onClick={() => onClick(2)} className="full_link" />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(2)}>CarbonStd #204</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/3.jpeg"
                  data-modal-title="CarbonStd #506"
                  // data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url="https://opensea.io/CarbonStd"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="img/drops/3.jpeg" alt="" />
                    <a onClick={() => onClick(3)} className="full_link" />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(3)}>CarbonStd #506</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/4.jpeg"
                  data-modal-title="CarbonStd #243"
                  // data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url="https://opensea.io/CarbonStd"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="img/drops/4.jpeg" alt="" />
                    <a onClick={() => onClick(4)} className="full_link" />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(4)}>CarbonStd #243</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/5.jpeg"
                  data-modal-title="CarbonStd #543"
                  // data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url="https://opensea.io/CarbonStd"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="img/drops/5.jpeg" alt="" />
                    <a onClick={() => onClick(5)} className="full_link" />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(5)}>CarbonStd #543</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/6.jpeg"
                  data-modal-title="CarbonStd #08"
                  // data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url="https://opensea.io/CarbonStd"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="img/drops/6.jpeg" alt="" />
                    <a onClick={() => onClick(6)} className="full_link" />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(6)}>CarbonStd #08</a>
                    </h3>
                  </div>
                </div>
              </li>
            </ul>
            {/* Clearfix */}
            <div className="clearfix" />
          </div>
          {/* !Drops List */}
          <Timeline />
        </div>
      </section>
      {/* !Drops Section */}
    </Fragment>
  );
};
export default Drops;
