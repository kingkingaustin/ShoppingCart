import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import "./Styles.css"


const Home = () => {
 


    const { state : {products},
    productState: { byStock, byFastDelivery, sort, byRating,searchQuery }
  } = CartState();

    const transformProducts = () => {
      let sortedProducts = products;

      if (sort) {
        sortedProducts = sortedProducts.sort( (a,b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
        );
      }

      if (!byStock) {
        sortedProducts = sortedProducts.filter((prod) => prod.inStock);
      }

     if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastdelivery);
     }

      if (byRating) {
        sortedProducts = sortedProducts.filter((prod) => prod.rating >= byRating );
      }

      if (searchQuery) {
        sortedProducts = sortedProducts.filter((prod) => 
        prod.name.toLowerCase().includes(searchQuery)
        )
      } 
      
      return sortedProducts ;
    };
     
  return (
    <div className="home">
      <Filters/>
      <div className="productContainer">
       {
          transformProducts().map((prod)=>{
           return <SingleProduct prod={prod} key={ prod.id}/>
         })
        }       
      </div>
    </div>


  
  )
}

export default Home;
