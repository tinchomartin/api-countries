import React from "react";
import { Select, Stack } from "@chakra-ui/react";

const Filter = (props) => {
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  const { search, setCountryList } = props;

  const handleChange = (e) => {
    const val = e.target.value;

    if (val !== "All") {
      setCountryList(
        search.filter((country) =>
          country.region.toLowerCase().includes(val.toLocaleLowerCase())
        )
      );
    } else {
      setCountryList(search);
    }
  };

  return (
    <div className="Regions">
      <Stack>Input</Stack>

      <Select
        onChange={handleChange}
        variant="filled"
        width="15.625rem"
        marginRight="5rem"
      >
        {regions.map((region, i) => {
          return (
            <option value={region} key={i}>
              {region}
            </option>
          );
        })}
      </Select>

      {/* <select name="" id="" onChange={handleChange}>
        {regions.map((region, i) => {
          return (
            <option value={region} key={i}>
              {region}
            </option>
          );
        })}
      </select> */}
    </div>
  );
};

export default Filter;
