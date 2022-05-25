import React, { useEffect, useState } from "react";
import axios from "axios";
import errSrc from "./img/246957.jpeg"



const Card = (props) => {
          const { category } = props
          const baseUrl = `https://swapi.dev/api/${category}`
          const [data, setData] = useState("")
          const [error, setError] = useState("")





          useEffect(() => {
                    axios(baseUrl)
                              .then(res => setData(res.data.results))
                              .catch(error => setError(error))
          }, [baseUrl])


          const renderCard = (elements, index) => {
                    let src = `https://starwars-visualguide.com/assets/img/${category === "people" ? "characters" : category}/${index + 1}.jpg`
                    return (
                              <div className="card-inside" key={index}>
                                        <div> <img src={src} alt="img" onError={(e) => {
                                                  e.target.src = errSrc;

                                        }}></img></div>

                                        {Object.entries(elements).slice(0, 5).map((el, index) =>

                                                  <ul key={index} >
                                                            <li  >{el[0].replace(/_/g, " ")} : {el[1]}</li>
                                                  </ul>


                                        )}
                              </div>
                    )
          }


          return <div className="card">
                    {data && (
                              data.map((elements, index) => renderCard(elements, index))
                    )}

          </div>
}

export { Card }