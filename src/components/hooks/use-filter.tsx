// hooks/useFilter.js
import { useState } from "react";

const useFilter = (data:any) => {
    const [filterText, setFilterText] = useState("");

    const handleFilterChange = (event:any) => {
        setFilterText(event.target.value);
    };

    const filteredData = data
        ? data.filter((country:any) =>
              country.name.common.toLowerCase().startsWith(filterText.toLowerCase())
          )
        : [];

    return { filteredData, handleFilterChange };
};

export default useFilter;
