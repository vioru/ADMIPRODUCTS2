import React,{useEffect,useState} from "react";
import axios from "axios";
import NewProduct from "./createProduct";


const AllProducts = props =>{

    const [Products,setProducts] = useState([]);

    // console.log(Products);


    useEffect( () =>{
        axios.get("http://localhost:8000/api/product")
            .then( res => {
                setProducts(res.data);
            })
            .catch(err => console.log(err));
    }, [Products]);





    return(
        <div  className="container  col-10  ">
            <NewProduct/> 
            <hr className="bg-dark mt-5" ></hr>
            <div className="text-center">
            <h1 className="mb-4">Todos los productos</h1>

            {Products.map((product, index) => (
                                <>
                                <h3 key={index} ><a href={`http://localhost:3000/product/` + product._id} className="text-dark">{product.name}</a></h3>




                                </>
                        ))
                    }
                    
        </div>
        </div>

    )
}

export default AllProducts;