import React,{useEffect,useState} from 'react';
//import {NativeSelect,}FormControl
import { FormControl, NativeSelect } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';
const CountryPicker =  ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);
  
    useEffect(() => {
      const fetchAPI = async () => {
        setCountries(await fetchCountries());
      };
  
      fetchAPI();
    }, []);
  
    return (
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue=" " onChange={(e) => handleCountryChange(e.target.value)}>
          <option value="">Gobal</option>
          {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
      </FormControl>
    );
  };

export default CountryPicker;
// import React from 'react'

// const CountryPicker = () => {
//   return (
//     <div>
//       <h2>Country</h2>
//     </div>
//   )
// }

// export default CountryPicker
