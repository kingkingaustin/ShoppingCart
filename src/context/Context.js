import { createContext, useContext } from 'react'
import { faker } from '@faker-js/faker'
import { CartReducer } from './Reducers'
import { useReducer } from 'react'
import { productReducer } from './Reducers'

const Cart = createContext();
faker.seed(99);



const Context = ({ children }) => {
 
    const products = [...Array(30)].map(()=>({
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          Image: faker.image.sports(),
          inStock: faker.helpers.arrayElement([ 0, 1, 2, 3, 4, 5]),
          fastdelivery: faker.datatype.boolean(),
          rating: faker.helpers.arrayElement([ 1, 2, 3, 4, 5 ]),
          }));
  
          const [state, dispatch] = useReducer( CartReducer, {
            products : products,
            Cart : [],
          });

          const [productState, productDispatch] = useReducer( productReducer,{
            byStock: false,
            byFastDelivery: false,
            byRating: 0,
            searchQuery: "",
          });
          
            

    return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch  }} >
        { children }
    </Cart.Provider>
  )
}
export default Context;

export const CartState = ()=>{
  return useContext(Cart)
}


 