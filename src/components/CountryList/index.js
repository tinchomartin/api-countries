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

  if (countries.length > 0) {
    return (
      <Grid
        templateColumns={{
        base: "repeat(1, 1fr)", // 1 columna en móviles
        sm: "repeat(2, 1fr)",   // 2 columnas en pantallas pequeñas
        md: "repeat(3, 1fr)",   // 3 en pantallas medianas
        lg: "repeat(4, 1fr)",   // 4 en desktop
      }}
        gap={8}
        p={4}
        alignItems="stretch"

      >
        {countries.length > 0 &&
          countries.map((country, i) => {
            return (
                          <GridItem
                boxShadow="rgb(0 0 0 / 10%) 0px 0px 8px"
                borderRadius="5px"
                overflow="hidden"
                textAlign="left"
                display="flex"
                flexDirection="column"
                 transition="transform 0.2s"
                _hover={{ transform: "scale(1.02)" }}             >
                <Box width="100%" height={{ base: "160px", md: "200px" }} bg="gray.100">
                  
                
                  <Link to={`/search/${country.alpha}`}>
                    <Image
                      src={country.flag}
                      alt={country.flags?.alt}
                      objectFit="cover"
                      objectPosition="center"
                      width="100%"
                      height="100%"
                        />
                  </Link>
                </Box>
                
                <UnorderedList styleType="none" p={2}>
                  <ListItem fontWeight="bold">{country.name.common}</ListItem>
                  <ListItem>Population: {country.population}</ListItem>
                  <ListItem>Region: {country.region} </ListItem>
                  <ListItem>Capital: {country.capital} </ListItem>
                </UnorderedList>
                
              </GridItem>
            );
           
          })}
      </Grid>
    );
  }
  return (
    <Box
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      p="40px 45px"
    >
      <Box as="p">Looks like we have lost our flags :(</Box>
      <Box as="p">Please try again later</Box>

      <Image
        src="https://i.pinimg.com/originals/04/b5/ca/04b5caa25bbc28f06bf2fb2efaeefd10.gif"
        alignSelf="center"
      ></Image>
    </Box>
  );
}
