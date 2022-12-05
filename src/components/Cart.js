import { useEffect } from "react";
import { Button, ListGroup, ListGroupItem , Row, Col, FormControl, Image} from "react-bootstrap";
import { CartState } from "../context/Context";
import { useState } from 'react'
import Rating from "./Rating";
import { MdDelete } from 'react-icons/md'







const Cart = () => {

  const { state: {Cart}, dispatch } = CartState()

  const [ total, setTotal ] = useState()

  useEffect(() => {
    setTotal( Cart.reduce((acc,currn) => acc + Number( currn.price)* currn.qty, 0)) 
  }, [Cart])
  return (
    <div className="home">
        <div className="productContainer">
           <ListGroup>
            {Cart.map((prod)=> 
            <ListGroupItem key={prod.id}>
               <Row>
                <Col md={2}>
                  <Image src={prod.Image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>
                    {prod.name}
                  </span>
                </Col>
                <Col md={2}>
                  ₹ {prod.price}
                </Col>
                <Col md={2}>
                  <Rating rating={prod.rating}/>
                </Col>
                <Col md={2}>
                  <FormControl as="select" value={prod.qty}
                  onChange={ (e) => dispatch({
                    type: "CHANGE_CART_QUANTITY",
                    payload: {
                      id: prod.id,
                      qty: e.target.value,
                    },
                  })
                }>
                    {[...Array(prod.inStock).keys()].map((x)=> (
                      <option key = {x + 1}> {x + 1} </option>
                    ))}
                  </FormControl>
                </Col>
                <Col md={2}>
                  <Button 
                  type="button"
                  variant="light"
                  onClick={()=> 
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  })
                  }
                  >
                    <MdDelete fontSize="20px"/>
                  </Button>
                </Col>
               </Row>
            </ListGroupItem>
            )}
           </ListGroup>

            
            
           
           </div>
           
           <div className="totalpage">
            <span style={{color: "black"}} className="carttitle"> Subtotal ({Cart.length}) Items</span>
            <span style={{fontweight: 700,fontsize: 20, color:"black"}}>Total: ₹ {total} </span>
            <Button variant="dark" type="button" disabled={Cart.length === 0}> 
              Proceed To Checkout
            </Button>
           </div>
    </div>
    
  )
}

export default Cart;