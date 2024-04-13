import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/actions/loadAction'; 
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import { UserActionTypes } from './types/types';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from './redux/store';
import { useAppSelector } from './redux/hooks';

function App() {
  const { data, isLoading, isError } = useAppSelector((state: RootState) => state);
  const dispatch = useDispatch<ThunkDispatch<RootState, null, UserActionTypes>>();

  useEffect(() => {
    const fetchDataAndDispatch = async () => {
      try {
        dispatch(fetchData());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataAndDispatch();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: Failed to fetch data</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <Header />
      <ProductPage data={data[0]} />
    </div>
  );
}

export default App;
