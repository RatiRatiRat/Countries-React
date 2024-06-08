import { useState, useEffect } from "react";
type Country = {
  id: any;
  alpha3Code: any;
  flags: any;
  population: string;
  region: string;
  capital: string;
  name: {
    common: string;
  };
  
};

const useSort = (data: Country[]) => {
  const [sortedData, setSortedData] = useState<Country[]>([]);

  useEffect(() => {
    if (data) {
      const sorted = [...data].sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setSortedData(sorted);
    }
  }, [data]);

  return sortedData;
};

export default useSort;
