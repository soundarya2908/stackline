import React from 'react';
import '../App.css';

interface ProductProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  tags: string[]
}

const Product: React.FC<ProductProps> = ({ imageUrl, title, subtitle, tags }) => {
  return (
    <>
    <div style={{display:'grid'}}>
      <img src={imageUrl} alt="Image" className='image' />
      <h2 className='title'>{title}</h2>
      <p className='subtitle'>{subtitle}</p>
      <div className='tags'>
        {tags.map((tag, index) => (
            <div key={index} className='tag'>{tag}</div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Product;
