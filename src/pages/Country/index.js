import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
// import "./Country.css";
import BorderNames from "../.././components/BorderName";
import { Box, Image, Text, Heading } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function Country() {
  let { country } = useParams();
  let history = useHistory();

  const [countryName, setCountry] = useState({});

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${country}`)
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
          marginTop="75px"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 8px 0px"
          padding="0.2rem 1.5rem"
          text-decoration="none"
        >
          <ArrowBackIcon
            marginRight="0.30rem"
            marginBottom=".19rem"
          ></ArrowBackIcon>
          Back
        </Box>
      </Link>
      <Box
        display="flex"
        flexFlow="row"
        height="100%"
        width="100%"
        marginTop="32px"
        justifyContent="space-between"
      >
        <Box alignSelf="flex-start">
          <Image
            src={countryName.flag}
            alt="Bandera de pais"
            height="auto"
            width="100%"
            maxWidth="700px"
          />
        </Box>
        <Box
          width="50%"
          alignSelf="flex-start"
          textAlign="start"
          fontSize=" 16px"
        >
          <Heading as="h4" size="md">
            {countryName.name}
          </Heading>
          <Box display="flex" flexFlow="column" flexWrap="wrap" height="150px">
            <Text m="0 0 0.8rem 0">
              <Box as="span" fontWeight="700">
                Native Name:
              </Box>{" "}
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
              </Box>{" "}
              {countryName.population}
            </Text>
          </Box>
          <Box width="100%" display="flex" flexWrap="wrap">
            <Text className="borders" fontWeight="700">
              Border Countries:
            </Text>
            {countryName.borders &&
              countryName.borders.map((item, i) => {
                return <BorderNames border={item} />;
              })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
