import useFetch from "../hooks/use-fetch";
import Navbar from "../navbar/navbar";
import "./Country.css";
import Input1 from "../inputs1/input";
import "../inputs1/input.css";
import "../navbar/navbar.css";
import useFilter from "../hooks/use-filter";
import useSort from "../hooks/use-sort";
import { Link } from "react-router-dom";

const Countries1 = () => {
    const data = useFetch();
    const { filteredData, handleFilterChange } = useFilter(data);
    const sortedFilteredData = useSort(filteredData);

    return (
        <div>
            <Navbar />
            <Input1 onChange={handleFilterChange} />

            <div className="countries-container">
                <br />
                {sortedFilteredData.map((country: any, index: any) => (
                    <div key={index} className="country-card">
                        <Link to={`/single-page/${country.cca3}`}>
                            <img
                                src={country.flags.svg}
                                alt={country.name.common}
                                className="country-image"
                            />
                            <div className="info">
                                <h2>{country.name.common}</h2>
                                <p>
                                    <strong>Population:</strong> {country.population}
                                </p>
                                <p>
                                    <strong>Region:</strong> {country.region}
                                </p>
                                <p>
                                    <strong>Capital:</strong> {country.capital}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Countries1;
