import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import BorderNames from "../.././components/BorderName";
import {
  Box,
  Image,
  Text,
  Heading,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function Country() {
  let { country } = useParams();
  let history = useHistory();

  const [countryName, setCountry] = useState({});

  const bg = useColorModeValue("gray.200", "gray.700");

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/alpha/${country}`)
      .then((res) => setCountry(res.data));
  }, [country]);

  const handleClick = (e) => {
    history.push("/");
  };

  return (
    <Box p="0 3rem">
      <Link onClick={handleClick}>
        <Box
          as="span"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 8px 0px"
          padding="0.5rem 1.5rem"
          text-decoration="none"
          bg={bg}
        >
          <ArrowBackIcon
            marginRight={{ sm: "0.30rem" }}
            marginBottom={{ sm: ".19rem" }}
          ></ArrowBackIcon>
          Back
        </Box>
      </Link>
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        height="100%"
        width="100%"
        marginTop="32px"
        justifyContent={{ sm: "space-between" }}
        alignContent={{ base: "center" }}
      >
        <Box alignSelf="flex-start" marginRight="20px">
          <Image
            src={countryName.flag}
            alt="Bandera de pais"
            w="100%"
            maxWidth="550px"
            objectFit="cover"
          />
        </Box>
        <Box
          width={{ sm: "50%" }}
          alignSelf="center"
          textAlign="start"
          fontSize=" 16px"
        >
          <Heading as="h4" size="md" marginBottom="35px">
            {countryName.name}
          </Heading>

          <Grid templateRows={{ base: "1fr" }}>
            <Text m="0 0 0.8rem 0">
              <Box as="span" fontWeight="700">
                Native Name:
              </Box>
              {countryName.nativeName}
            </Text>
            <Text m="0 0 0.8rem 0">
              <Box as="span" fontWeight="700">
                Region:
              </Box>{" "}
              {countryName.region}
            </Text>
            <Text m="0 0 0.8rem 0">
              <Box as="span" fontWeight="700">
                Sub Region:
              </Box>{" "}
              {countryName.subregion}
            </Text>
            <Text m="0 0 0.8rem 0">
              <Box as="span" fontWeight="700">
                Capital:
              </Box>{" "}
              {countryName.capital}
            </Text>
            <Text m="0 0 0.8rem 0">
              <Box as="span" fontWeight="700">
                Top Level Domain:
              </Box>{" "}
              {countryName.topLevelDomain}
            </Text>

            <Text m="0 0 0.8rem 0">
              <Box as="span" fontWeight="700">
                Languages:
              </Box>
              {countryName.languages &&
                countryName.languages
                  .map((item, i) => {
                    return `${item.name}`;
                  })
                  .join(", ")}
            </Text>
            <Text m="0 0 0.8rem 0">
              <Box as="span" fontWeight="700">
                Population:
              </Box>
              {countryName.population}
            </Text>
          </Grid>

          <Grid
            templateRows={{ base: "1fr", sm: "1fr" }}
            // templateColumns={{ sm: "1fr" }}
            gap={2}
          >
            <Text className="borders" fontWeight="700">
              Border Countries:
            </Text>
            <Box display="flex" flexWrap="wrap">
              {countryName.borders &&
                countryName.borders.map((item, i) => {
                  return <BorderNames border={item} bg={bg} />;
                })}
            </Box>
          </Grid>

          {/* <Box width="100%" flexWrap="wrap" display="flex" marginTop="35px">
            <Text className="borders" fontWeight="700" marginRight="7.5px">
              Border Countries:
            </Text>
            {countryName.borders &&
              countryName.borders.map((item, i) => {
                return <BorderNames border={item} bg={bg} />;
              })}
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}
