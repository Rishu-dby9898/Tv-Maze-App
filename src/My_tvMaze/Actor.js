/* eslint-disable react-hooks/exhaustive-deps */

import "./Box.css";

import React, { useState, useEffect } from "react";

function Actor({inputVal}) {
  
  const [actorsData, setActorsData] = useState([]);

  let dataUrl = "";
  if (inputVal.length > 0) {
    dataUrl = `https://api.tvmaze.com/search/people?q=${inputVal}`;
  } 
  // else {
  //   dataUrl = `https://api.tvmaze.com/search/people?q=friends`;
  // }

  const getActorsData = async () => {
    try {
      let respone = await fetch(dataUrl);
      let resData = await respone.json();
      setActorsData(resData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getActorsData();
  }, [inputVal]);
  // console.log(actorsData);
  return (
    <>
     
      <section>
       
          <div className="container">
            {actorsData.map((element) => {
              return (
                
                  <div className="box">
                      <div className="imgBox">
                    <a href={element.person.url} target="_aayush">
                    {element.person.image ? (
                      <img
                        src={element.person.image.medium}
                        className="poster"
                       
                        alt={
                          element.person.name != null
                            ? element.person.name
                            : "Not found"
                        }
                      />
                    ) : (
                      <div className="poster" style={{ height: "325px" }}>
                        <img
                          src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                          // style={{ width: "250px", height: "325px" }}
                          alt = "Not Found"
                        />
                      </div>
                    )}
                    </a>
                    </div>
                   
                    <div className="content">
                        <h2 >
                          {element.person.name}
                        </h2>
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
