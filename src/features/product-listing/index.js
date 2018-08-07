import React from 'react';
import ProductListItem from './product-list-item';
import { connect } from 'react-redux';
import { cartItemsWithQuantity } from '../cart';

function ProductListing(props) {
  return <div className='product-listing'>
    {
      props.products.map( product =>
      <ProductListItem
       product={product}
       removeFromCart={props.removeFromCart}
       addToCart={props.addToCart}
       cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
       />)
    }
  </div>
}

function mapStateToProps(state){
  return{
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch){
  return{
    addToCart: (item) => {
      dispatch({ type: 'ADD' , payload: item})
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload:item})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)
