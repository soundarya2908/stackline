import Product from './Product';
import SalesChart from './SalesChart';
import '../App.css';
import {  ProductPageProps} from '../types/types';
import { SalesTable } from './SalesTable';
import './ProductPage.css';

const ProductPage: React.FC<ProductPageProps> = (jsonData) => {
  return (
    <div> 
      <div className='page-container'>
        <div className='card' id='product'>
          <Product />
        </div>
        <div className='sales'>
          <div className='card' id='graph'>
            <SalesChart />
          </div>
          <div style={{ backgroundColor: 'blue' }}>
            <SalesTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
