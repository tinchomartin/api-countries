import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryList from "../.././components/CountryList";
import SearchB from "../.././components/SearchB";
import Filter from "../.././components/Filter";
import "./Homepage.css";
import { Box, Flex } from "@chakra-ui/react";
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

  //traigo la api y guardo en csearch
  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/all`).then((res) => {
      setSearch(
        res.data.map((country) => ({
          name: country.name,
          alpha3Code: country.alpha3Code,
          flag: country.flag,
          capital: country.capital,
          population: country.population,
          region: country.region,
        }))
      );
    });
  }, [setSearch]);

  //asigno a countries lo guardado de la api
  useEffect(() => {
    setCountries(csearch);
  }, [csearch]);

  return (
    <div className="container-countries">
      <Flex justifyContent="space-between">
        <SearchB search={csearch} setCountryList={setCountries} />
        <Filter search={csearch} setCountryList={setCountries} />
      </Flex>
      <CountryList countries={countries} />
    </div>
  );
};

export default Countries;
