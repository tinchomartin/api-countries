import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import "./Country.css";
import BorderNames from "./../components/BorderName";

export default function Country() {
  let { country } = useParams();
  let history = useHistory();

  const [countryName, setCountry] = useState({});

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${country}`)
      .then((res) => setCountry(res.data));
  }, [country]);

  const handleClick = (e) => {
    history.push("/");
  };

  return (
    <div className="country-page">
      <button className="btn-back" onClick={handleClick}>
        Go Back
      </button>
      <div className="country-card">
        <div className="flag">
          <img src={countryName.flag} alt="" />
        </div>
        <div className="description-card">
          <h1>{countryName.name}</h1>
          <div className="description">
            <p>
              <span>Native Name:</span> {countryName.nativeName}
            </p>
            <p>
              <span>Region:</span> {countryName.region}
            </p>
            <p>
              <span>Sub Region:</span> {countryName.subregion}
            </p>
            <p>
              <span>Capital:</span> {countryName.capital}
            </p>
            <p>
              <span>Top Level Domain:</span> {countryName.topLevelDomain}
            </p>

            <p>
              <span>Languages:</span>{" "}
              {countryName.languages &&
                countryName.languages
                  .map((item, i) => {
                    return `${item.name}`;
                  })
                  .join(", ")}
            </p>
            <p>
              <span>Population:</span> {countryName.population}
            </p>
          </div>
          <div className="wrap-borders">
          <p className="borders">
            Border Countries:
            </p>
            {countryName.borders &&
              countryName.borders.map((item, i) => {
                return <BorderNames border={item} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
