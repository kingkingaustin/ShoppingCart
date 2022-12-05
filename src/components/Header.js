import { Container, Dropdown, FormControl, Navbar,Nav,Badge, Button } from "react-bootstrap"
import{ FaShoppingCart} from 'react-icons/fa'
import { Link } from "react-router-dom"
import { CartState } from '../context/Context'
import { MdDelete } from 'react-icons/md'



const Header = () => {


   const { state:{ Cart }, dispatch, productDispatch } = CartState()


  return  (
  <Navbar sticky="top" className="color-nav"  style={{height:80}}>
    <Container>
        <Navbar.Brand>
            <Link  to="/">SHOPPY-HAPPY</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
            <FormControl style={{width: 500}} placeholder="Search A Product" 
            className=',-auto'
            onChange={(e) => {
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }}
            />
        </Navbar.Text>
        <Nav>
        <Dropdown align="end" >
         <Dropdown.Toggle variant="dark">
          <FaShoppingCart color="white" fontSize="25px"/>
          <Badge bg="dark">{Cart.length}</Badge>
         </Dropdown.Toggle>
         <Dropdown.Menu style={{minWidth: 370 }}>
           
           {
            Cart.length > 0 ? (
             <>
             {
              Cart.map((prod) => (
                <span className="cartitem" key={prod.id}>
                  <img
                    src= { prod.Image}
                    className = "cartItemImg"
                    alt= {prod.name}
                  />
                  <div className="cartItemDetail">
                    <span>{prod.name}</span>
                    <span>₹ {prod.price.split(".")[0]}</span>
                  </div>
                  <MdDelete 
                  fontSize="20px"
                  style = {{ cursor: "pointer"}}
                  onClick={() => dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  })}
                  />
                </span>
              ))
             }
             <Link to = "/cart">
              <Button style={{width:"95%", margin: "0 10px"}}>
                Go to Cart
              </Button>
             </Link>
             </>
            ) : (
              <span style={{ padding: 10 }}>
                 Cart Is Empty
              </span>
            )
           }
         </Dropdown.Menu>
      </Dropdown>
      </Nav>
    </Container>
  </Navbar>
  )
  
}

export default Header