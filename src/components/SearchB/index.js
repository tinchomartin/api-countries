import React from "react";
import { Stack, Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchB = (props) => {
  const { search, setCountryList } = props;

  const handleChange = (e) => {
    const val = e.target.value;

    setCountryList(
      search.filter((country) =>
        country.name.common.toLowerCase().includes(val.toLocaleLowerCase())
      )
    );

    return search;
  };

  return (
    <div>
      <Stack spacing={4}>
        <InputGroup width="15.625rem" marginLeft="5rem">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            type="text"
            placeholder="Buscar un país"
            onChange={handleChange}
          />
        </InputGroup>
      </Stack>

      {/* <input
        type="text"
        placeholder="Busque un país"
        
        className="SearchBar"
      /> */}
    </div>
  );
};

export default SearchB;
