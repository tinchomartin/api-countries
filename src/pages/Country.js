import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Country() {
  let { country } = useParams();

  const [countryName, setCountry] = useState({});

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${country}`)
      .then((res) => setCountry(res.data[0]));
  }, [country]);

  return (
    <div className="country-card">
      <img src={countryName.flag} alt="" />
      <p>{countryName.name}</p>
      <p>Native Name: {countryName.nativeName}</p>
      <p>Region: {countryName.region}</p>
      <p>Sub Region: {countryName.subregion}</p>
      <p>Capital: {countryName.capital}</p>
      <p>Top Level Domain: {countryName.topLevelDomain}</p>

      <p>
        Languages:{" "}
        {countryName.languages &&
          countryName.languages
            .map((item, i) => {
              return `${item.name}`;
            })
            .join(", ")}
      </p>
      <p>Population: {countryName.population}</p>

      <p className="borders">
        Border Countries:{" "}
        {countryName.borders &&
          countryName.borders.map((item, i) => {
            return (
              <button className="btn-border" key={i}>
                {item}
              </button>
            );
          })}
      </p>
    </div>
  );
}
