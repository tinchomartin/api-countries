import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export default function BorderNames(props) {
  let { border } = props;
  const [nameBorder, setNameBorder] = useState();

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${border}`)
      .then((res) => setNameBorder(res.data.name));
  }, [border]);

  return <Link>{nameBorder}</Link>;
}
