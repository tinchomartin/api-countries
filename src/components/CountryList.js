import React from "react";
import { Link } from "react-router-dom";

export default function ContainerCard(props) {
  const countries = props.countries;

  return (
    <div>
      {
        countries.length > 0 &&
          countries.map((country, i) => {
            return (
              <div className="card-countryList" key={i}>
                <Link to={`/search/${country.name}`}>
                  <img src={country.flag} alt="country-flag" />
                </Link>

                <p>{country.name}</p>
                <ul className="card-list">
                  <li>Population: {country.population}</li>
                  <li>Region: {country.region} </li>
                  <li>Capital: {country.capital} </li>
                </ul>
              </div>
            );
          })
        // .splice(0, 20)
      }
    </div>
  );
}
