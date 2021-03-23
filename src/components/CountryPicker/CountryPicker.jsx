import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';
import Cards from '../Cards/Cards';


const CountryPicker = ({handleCountryChange}) => {
    const [ fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries( await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);
    console.log(fetchedCountries);
    return (
        <>
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>(handleCountryChange(e.target.value))}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        {/* {fetchedCountries.map((country, i) => <Cards key={i} value={country}></Cards>)} */}
        </>

    )
}

export default CountryPicker;