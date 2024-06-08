import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState<any>(null); 

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {        
        console.error('Error fetching data:', error);
      });
  }, []); 

  return data; 
  

};

export default useFetch;
