import React from "react";

export default function ContainerCard(props) {
  const countries = props.countries;

  return (
    <div>
      {countries.length > 0 &&
        countries
          .map((country, i) => {
            return (
              <div className="card-country" key={i}>
                <img src={country.flag} alt="country-flag" />
                <p>{country.name}</p>
                <ul className="card-list">
                  <li>Population: {country.population}</li>
                  <li>Region: {country.region} </li>
                  <li>Capital: {country.capital} </li>
                </ul>
              </div>
            );
          })
          .splice(0, 10)}
    </div>
  );
}
