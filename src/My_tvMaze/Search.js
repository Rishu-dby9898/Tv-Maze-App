import React, { useState } from "react";
import Actor from "./Actor";
import Show from "./Show";
import "./TvMazze.css";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://www.myhoardings.com/blog/wp-content/uploads/2022/05/ott-mainbanner.jpg",
    caption: "Slide 1",
  },
  {
    url: "https://bingeddata.s3.amazonaws.com/uploads/2020/09/Your-Guide-To-Access-The-Top-10-Major-OTT-Platforms.jpg",
    caption: "Slide 2",
  },
  {
    url: "https://www.vplayed.com/blog/wp-content/uploads/2021/08/banner-image-37-01-1000x491.png?x42533",
    caption: "Slide 3",
  },
  {
    url: "https://blog.contus.com/wp-content/uploads/2022/03/banner-image-41.4-01.png",
    caption: "Slide 4",
  },
  {
    url: "https://cdn.mos.cms.futurecdn.net/izwCZWBMa9QdFVKvT6gLWB-1200-80.png",
    caption: "Slide 5",
  },
  {
    url: "https://www.tavant.com/sites/default/files/html-page-assets/images/media/ott-services/OTT-Services-banner.jpg",
    caption: "Slide 6",
  },
  {
    url: "https://www.apptha.com/blog/wp-content/uploads/2021/12/banner-image-19-01-1024x503.png?x23557",
    caption: "Slide 7",
  },
  {
    url: "https://images.cinemaexpress.com/uploads/user/imagelibrary/2020/12/29/original/full_lead.jpg",
    caption: "Slide 8",
  },
];

const Search = () => {


  const [actor, setActor] = useState(false);
  const [show, setShow] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const setActorFilter = () => {
    setShow(false);
    setActor(true);
  };

  const setShowFilter = () => {
    setActor(false);
    setShow(true);
  };
  return (
    <>
      <section className="input-sec">
        <div className="choose">
          <div className="radio-input">
            <input
              type="radio"
              name="movie"
              onChange={() => setActorFilter()}
            />{" "}
            <strong style={{ fontSize: "20px", color: "whitesmoke" }}>
              {" "}
              By Actor{" "}
            </strong>{" "}
            &nbsp; &nbsp;
            <input
              type="radio"
              name="movie"
              onChange={() => setShowFilter()}
              className="ms-3"
            />{" "}
            <strong style={{ fontSize: "20px", color: "whitesmoke" }}>
              {" "}
              By Shows{" "}
            </strong>
          </div>

          <div className="input-box">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="input"
              placeholder={actor ? "search by Actor" : "search by Show"}
            />
          </div>
        </div>

        <div className="slide-container">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <div
                  className="image"
                  style={{ backgroundImage: `url(${slideImage.url})` }}
                >
                  {/* <img className='image' src={`${slideImage.url}`} alt='"' /> */}
                  {/* <span>{slideImage.caption}</span> */}
                  
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </section>

      <div className="show">
        {actor ? <Actor inputVal={inputVal} /> : ""}
        {show ? <Show inputVal={inputVal} /> : ""}
      </div>
    </>
  );
};

export default Search;
