import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useParams, Link } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import "./single.css";
import Navbar from '../navbar/navbar';

interface CountryDetail {
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    population: number;
    region: string;
    capital: string[];
    flags: {
        svg: string;
    };
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    languages: {
        [key: string]: string;
    };
}

const CountryDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [countryData, setCountryData] = useState<CountryDetail | null>(null);

    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                const response: AxiosResponse<CountryDetail[]> = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);
                if (response.data.length > 0) {
                    setCountryData(response.data[0]);
                } else {
                    console.error('No country data found for:', id);
                }
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };

        fetchCountryData();
    }, [id]);

    if (!countryData) {
        return <Loader />;
    }

    const currencies = countryData.currencies
        ? Object.values(countryData.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ')
        : 'N/A';
    const languages = countryData.languages
        ? Object.values(countryData.languages).join(', ')
        : 'N/A';
    const nativeNames = countryData.name.nativeName
        ? Object.values(countryData.name.nativeName).map(native => `${native.official} (${native.common})`).join(', ')
        : 'N/A';

    return (
        <>
            <Navbar />
            <Link className="Back" to="/">Back to see Another Countries ➜</Link>
            <br />
            <div className="Single-Country">
                <img className="single-flag" src={countryData.flags.svg} alt={countryData.name.common} />
                <div className="single-data">
                    <h1>{countryData.name.common}</h1>
                    <p>Population: {countryData.population}</p>
                    <p>Region: {countryData.region}</p>
                    <p>Capital: {countryData.capital.join(', ')}</p>
                    <p>Currencies: {currencies}</p>
                    <p>Languages: {languages}</p>
                    <p>Native Names: {nativeNames}</p>
                </div>
            </div>
        </>
    );
};

export default CountryDetail;
