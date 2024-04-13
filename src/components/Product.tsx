import React from 'react';
import './Product.css';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';

const Product = () => {
  const { data } = useAppSelector((state: RootState) => state);
  const imageUrl = data[0].image;
  const title = data[0].title;
  const subtitle = data[0].subtitle;
  const tags = data[0].tags;
  
  return (
    <>
    <div style={{display:'grid'}}>
      <img src={imageUrl} alt="Image" className='image' />
      <h2 className='title'>{title}</h2>
      <p className='subtitle'>{subtitle}</p>
      <hr
        style={{
            color: 'lightgray',
            backgroundColor: 'lightgray',
            height: '.3px',
            width: '100%',
            borderWidth: 0,
            margin: 0
        }}
      />  
      <div className='tags'>
        {tags.map((tag: string, index: number) => (
            <div key={index} className='tag'>{tag}</div>
        ))}
      </div>
      <hr
        style={{
            color: 'lightgray',
            backgroundColor: 'lightgray',
            height: '.3px',
            width: '100%',
            borderWidth: 0,
            margin: 0
        }}
      />  
    </div>
    </>
  );
};

export default Product;
