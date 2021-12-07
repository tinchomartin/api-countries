import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Link } from "@chakra-ui/react";

import axios from "axios";

export default function BorderNames(props) {
  let { border } = props;

  const [nameBorder, setNameBorder] = useState({
    name: "",
    alpha3Code: "",
  });
  let country = nameBorder;

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/alpha/${border}`)
      .then((res) => setNameBorder(res.data));
  }, [border]);
  return (
    <Link
      to={`/search/${country.alpha3Code}`}
      marginRight="7.5px"
      marginBottom={{ base: "10px" }}
      boxShadow="rgba(0, 0, 0, 0.3) 0px 0px 8px 0px"
      padding="0.2rem 1.5rem"
      textDecoration="none"
    >
      {country.name}
    </Link>
  );
}
