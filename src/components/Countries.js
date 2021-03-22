import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Countries = () => {

const [countries, setCountries] = useState({})

useEffect(()=>{
    axios.get(`https://restcountries.eu/rest/v2/all`).then(res=> 
    setCountries(res.data))
},[setCountries])


console.log(countries)
    return (

        <div className="cointainer-countries">
            {countries.length > 0 && countries.map((country,i)=>{
                return(
                    <div className="card-country"> 
                    <img src={country.flag} alt="country-flag" />
                <p>{country.name}</p>
                </div>
                )
            }).splice(0,10)}
        </div>
    );
}

export default Countries;