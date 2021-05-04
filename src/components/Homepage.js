import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryList from "./CountryList";
import SearchBar from "./SearchBar";

const Countries = () => {
  const [countries, setCountries] = useState({
    name: "",
    flag: "",
    capital: "",
    population: 0,
    region: "",
  });
  const [csearch, setSearch] = useState({
    name: "",
    flag: "",
    capital: "",
    population: 0,
    region: "",
  });

  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/all`).then((res) => {
      setSearch(
        res.data.map((country) => ({
          name: country.name,
          flag: country.flag,
          capital: country.capital,
          population: country.population,
          region: country.region,
        }))
      );
    });
  }, [setSearch]);

  useEffect(() => {
    setCountries(csearch);
  }, [csearch]);

  return (
    <div className="cointainer-countries">
      <SearchBar search={csearch} setCountryList={setCountries} />

      <CountryList countries={countries} />
    </div>
  );
};

export default Countries;
