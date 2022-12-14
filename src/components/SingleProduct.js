import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'

const SingleProduct = ( { prod }) => {

 const { state: { Cart }, dispatch ,} = CartState()

 console.log( Cart )

  return (
    <div className='products'>
        <Card >
         <Card.Img variant='top' src={prod.Image} alt={prod.name} /> 
         <Card.Body>
          <Card.Title >{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10}}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastdelivery ? (
            <div> Fast Delivery </div>
            ) : (
              <div>4 Days Delivery</div>
            )
             }
           <Rating rating={prod.rating} />
          </Card.Subtitle>
           {
            Cart.some ( (p) => p.id === prod.id ) ? (
              <Button  
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
                variant='danger'>
                Remove From Cart
              </Button>
            ) : (
            <Button  onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: prod,
              });
            }} 
            disabled = {!prod.inStock}>
              {!prod.inStock ? "Out Of Stock" : "Add To Cart"}
            </Button>
            )
           }
         </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct