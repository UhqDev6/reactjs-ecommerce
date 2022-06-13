import React, { Component } from 'react'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartItem from './CartItem'
import Title from './Title'
import { ProductConsumer } from '../Context'
import CartTotal from './CartTotal'

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart"></Title>
                  <CartColumns></CartColumns>
                  <CartList value={value}></CartList>
                  <CartTotal value={value}></CartTotal>
                </React.Fragment>
              );
            }else{
              return (
                <EmptyCart></EmptyCart>
              );
            }
          }}
        </ProductConsumer>
      </section>
    )
  }
}
