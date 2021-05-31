import React from "react";

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
      <select name="" id="" onChange={handleChange}>
        {regions.map((region, i) => {
          return (
            <option value={region} key={i}>
              {region}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
