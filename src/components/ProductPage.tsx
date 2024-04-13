import React, { useEffect, useState } from 'react';
import Product from './Product';
import SalesChart from './SalesChart';
import '../App.css';
import { MyData,  ProductPageProps} from '../store/types';
import Table from './Table';
import { SalesTable } from './SalesTable';


const ProductPage: React.FC<ProductPageProps> = (jsonData) => {
  return (
    <div> 
      <div className='container'>
        <div className='card' id='product'>
          <Product />
        </div>
        <div className='sales'>
          <div className='card' id='graph'>
            <SalesChart />
          </div>
          <div id='table' style={{ backgroundColor: 'blue' }}>
            <SalesTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
