import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import { MyData } from './store/types';
import './App.css';
import ProductPage from './components/ProductPage';

function App() {
  const [data, setData] = useState<MyData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error: Error | any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div> 
      <div className='header'>
        <Header />
      </div>
      <ProductPage data={data[0]} />
    </div>
  );
}

export default App;
