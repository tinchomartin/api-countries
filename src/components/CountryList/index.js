import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  GridItem,
  ListItem,
  UnorderedList,
  Image,
} from "@chakra-ui/react";

export default function ContainerCard(props) {
  const countries = props.countries;

  // if (countries > 0) {
  return (
    <Grid
      gap={16}
      p="40px 45px"
      templateColumns="repeat(auto-fill,minmax(auto,235px))"
      justifyContent="center"
    >
      {countries.length > 0 &&
        countries.map((country, i) => {
          return (
            <GridItem
              boxShadow="rgb(0 0 0 / 10%) 0px 0px 8px"
              borderRadius="5px"
              overflow="hidden"
              textAlign="left"
            >
              <Box width="100%">
                <Link to={`/search/${country.alpha3Code}`}>
                  <Image
                    src={country.flag}
                    alt="country-flag"
                    objectFit="cover"
                    width="235px"
                    height="135px"
                  />
                </Link>
              </Box>
              <UnorderedList styleType="none" p={2}>
                <ListItem fontWeight="900" margin="26px 0">
                  {country.name}
                </ListItem>
                <ListItem fontWeight="700">
                  Population:{" "}
                  <Box as="span" fontWeight="300">
                    {country.population}
                  </Box>
                </ListItem>
                <ListItem fontWeight="700">
                  Region:{" "}
                  <Box as="span" fontWeight="300">
                    {country.region}
                  </Box>{" "}
                </ListItem>
                <ListItem fontWeight="700">
                  Capital:{" "}
                  <Box as="span" fontWeight="300">
                    {country.capital}
                  </Box>
                </ListItem>
              </UnorderedList>
            </GridItem>
          );
        })}
    </Grid>
  );
  // } else {
  //   return (
  //     <Box
  //       textAlign="center"
  //       display="flex"
  //       flexDirection="column"
  //       justifyContent="center"
  //       p="40px 45px"
  //     >
  //       <Box as="p">Looks like we have lost our flags :(</Box>
  //       <Box as="p">Please try again later</Box>

  //       <Image src="https://i.pinimg.com/originals/04/b5/ca/04b5caa25bbc28f06bf2fb2efaeefd10.gif"></Image>
  //     </Box>
  //   );
  // }
}
