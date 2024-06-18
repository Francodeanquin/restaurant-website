import React from "react";
import images from "../../constants/images";

import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app___wrapper_info">
        <SubHeading title="Chase the new flavor" />
        <h1 className="app__header-h1">The key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          ducimus repellendus ipsum fuga consequuntur hic cumque quos doloribus
          itaque, molestias, ratione et! Natus fugit nobis amet eveniet
          accusantium veritatis ducimus.
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__header-img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  );
};

export default Header;
