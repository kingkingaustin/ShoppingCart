import { CartState } from '../context/Context'
import { Button,Form} from 'react-bootstrap'
import Rating from './Rating'




const Filters = () => {

    

const { productState: { byStock, byFastDelivery, sort, byRating }, productDispatch  } = CartState();

console.log(byStock, byFastDelivery, sort, byRating)

  return (

    <div className="filters">
        <span style={{color:"black"}} className='title'>Filter Products</span>
        <span>
            <Form.Check
            style={{color:"black"}} 
            inline
            label="price low to high"
            name="group1"
            type="radio"
            id={ 'inline-1'}
            onChange={ () => productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
            })}
            checked = {sort === "lowToHigh" ? true : false}
            />
        </span>
        <span>
            <Form.Check
            style={{color:"black"}} 
            inline
            label="price high to low"
            name="group1"
            type="radio"
            id={ 'inline-2'}
            onChange={ () => productDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow",
            })}
            checked = {sort === "highToLow" ? true : false}
            />
        </span>
        <span>
            <Form.Check
            style={{color:"black"}} 
            inline
            label="Include Out Of Stock"            
            name="group1"
            type="checkbox"
            id={'inline-3'}
            onChange ={ ()=>
            productDispatch({
                type: "FILTER_BY_STOCK",
            })}
            checked={ byStock }
            />
        </span>
        <span>
            <Form.Check
            style={{color:"black"}} 
            inline
            label="Fast Delivery Only"
            name="group1"
            type="checkbox"
            id={'inline-4'}    
            onChange = { () =>
            productDispatch({
                type: "FILTER_BY_DELIVERY",
            })}       
            checked={ byFastDelivery }
            />
        </span>

        <span>
            <label style={{ padding: 10 , color:"black" }}>Rating</label>
            <Rating 
               rating={byRating}
               onClick={(i)=> productDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1 ,
               })} 
                 style={{ cursor: "pointer" , color:"black"}} />
        </span>
      
        <Button variant="dark" onClick={()=>productDispatch(
            {
                type: "CLEAR_FILTER"
            }
        )}> Clear Filters</Button>

        
    </div>
  
  )
}

export default Filters