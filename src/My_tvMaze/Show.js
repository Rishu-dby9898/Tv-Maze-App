/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
import "./Box.css";

import React, { useState, useEffect } from "react";

function Actor({inputVal}) {
//   const [inputVal, setInputVal] = useState("");
  const [showData, setshowData] = useState([]);

  let dataUrl = "";
  if (inputVal.length > 0) {
    dataUrl = `https://api.tvmaze.com/search/shows?q=${inputVal}`;
  }

  // else {
  //     dataUrl = `https://api.tvmaze.com/search/shows?q=friends`;
  // }

  const getshowData = async () => {
    try {
      let respone = await fetch(dataUrl);
      let resData = await respone.json();
      setshowData(resData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getshowData();
  }, [inputVal]);
  // console.log(showData);
  return (
    <>
     
      <section>
      
          <div className="container">
            {showData.map((element) => {
              return (
                
                  <div className="box">

                    <div className="imgBox">
                    <a href={element.show.url} target="_blank">
                      {element.show.image ? (
                        <img
                          src={element.show.image.medium}
                          
                          alt={
                            element.show.name != null
                              ? element.show.name
                              : "Not found"
                          }
                        />
                      ) : (
                        <div className="poster" style={{ height: "325px" }}>
                          <img
                            src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                            // style={{
                            //   width: "270px",
                            //   height: "325px",
                            // }}
                            alt={element.show.name}
                          />
                        </div>
                      )}
                    </a>

                    </div>

                    <div className="content">
                     

                    <h2 className="text-danger text-center">
                      {element.show.name}
                    </h2> <br /><br/>
                      <span>
                        <i
                          class="fa fa-star text-success"
                          aria-hidden="true"
                        ></i>{" "}<br/>
                        {element.show.rating.average}
                      </span>

                   

                    </div>

                  </div>
                
              );
            })}
          </div>
        
      </section>
    </>
  );
}

export default Actor;
