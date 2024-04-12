import React, { useEffect, useState } from 'react';
import Product from './Product';
import SalesChart from './SalesChart';
import '../App.css';
import { MyData,  ProductPageProps} from '../store/types';
import Table from './Table';


const ProductPage: React.FC<ProductPageProps> = (jsonData) => {
  return (
    <div> 
      <div className='container'>
        <div className='card' id='product'>
          <Product
            imageUrl={jsonData.data.image}
            title={jsonData.data.title}
            subtitle={jsonData.data.subtitle}
            tags={jsonData.data.tags}
          />
        </div>
        <div className='sales'>
          <div className='card' id='graph'>
            <SalesChart salesData={jsonData.data.sales} />
          </div>
          <div id='table' style={{ backgroundColor: 'blue' }}>
            <Table salesData={jsonData.data.sales} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
