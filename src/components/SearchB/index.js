import React from "react";
import { Stack, Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchB = (props) => {
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
      <Stack spacing={4}>
        <InputGroup
          width="15.625rem"
          // marginLeft={{ sm: "5rem" }}
        >
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            type="text"
            placeholder="Search for a country"
            onChange={handleChange}
          />
        </InputGroup>
      </Stack>
    </div>
  );
};

export default SearchB;
