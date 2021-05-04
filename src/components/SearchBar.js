import React from "react";

const SearchBar = (props) => {
  const { search, setCountryList } = props;

  const handleChange = (e) => {
    const val = e.target.value;

    setCountryList(
      search.filter((country) =>
        country.name.toLowerCase().includes(val.toLocaleLowerCase())
      )
    );

    return search;
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Busque un país"
        onChange={handleChange}
        className="SearchBar"
      />
    </div>
  );
};

export default SearchBar;
