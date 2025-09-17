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

  const [countryName, setCountry] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${country}`)
      .then((res) => setCountry(res.data));
  }, [country]);

  const handleClick = (e) => {
    history.push("/");
  };

  if (!countryName.length) {
    return <Box p="3rem">Cargando...</Box>;
  }

const data = countryName[0];
  return (
    
    <Box p="0 3rem" key = {country}>
      <Link onClick={handleClick}>
        <Box
          as="span"
          marginTop="75px"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 8px 0px"
          padding="0.2rem 1.5rem"
          textDecoration="none"
          
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
            src={data.flags.png}
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
            {data.name.official}
          </Heading>
          <Box display="flex" flexFlow="column" flexWrap="wrap" height="150px">
            <Text m="0 0 0.8rem 0">
              <Box as="span" fontWeight="700">
                Native Name:
              </Box>{" "}
              {Object.values(data.name.nativeName)[0].official}
            </Text>
            <Text m="0 0 0.8rem 0">
              <Box as="span" fontWeight="700">
                Region:
              </Box>{" "}
              {data.region}
            </Text>
            <Text m="0 0 0.8rem 0">
              <Box as="span" fontWeight="700">
                Sub Region:
              </Box>{" "}
              {data.subregion}
            </Text>
            <Text m="0 0 0.8rem 0">
              <Box as="span" fontWeight="700">
                Capital:
              </Box>{" "}
              {data.capital}
            </Text>
            <Text m="0 0 0.8rem 0">
              <Box as="span" fontWeight="700">
                Top Level Domain:
              </Box>{" "}
              {data.tld}
            </Text>

            <Text m="0 0 0.8rem 0">
              <Box as="span" fontWeight="700">
                Languages:
              </Box> {" "}
              {data?.languages &&
              Object.values(data.languages).join(", ")}
            </Text>
            <Text m="0 0 0.8rem 0">
              <Box as="span" fontWeight="700">
                Population:
              </Box>{" "}
              {data.population}
            </Text>
          </Box>
          <Box width="100%" display="flex" flexWrap="wrap">
            <Text className="borders" fontWeight="700">
              Border Countries:
            </Text>
            {data.borders && Object.values(data.borders).map((item, i) => {
                return <BorderNames border={item} alphaCode={data.cca2}/>;
              })}
          </Box>
        </Box>
      </Box>
    </Box>
    );
}
