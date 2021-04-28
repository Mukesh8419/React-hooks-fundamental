import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';
//including image extension-->.jpeg
//destructuring image,name,price from api
const Product = ({ image, name, price }) => {
    const url = image && image.url;
  return (
  <article className='product'>
  <h4>Single product</h4>
  <img src={url || defaultImage} alt={name || 'default name'} />
    <h4>{name}</h4>
  <p>${price || 3.99}</p>
  </article>
  )
};
//classname.propTypes={}
Product.propTypes={
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
}
//classname.defaultProps={}
// Product.defaultProps={
//   name:'default name',
//   price:3.99,
//   image:defaultImage,
// }

export default Product;
