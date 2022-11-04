import React, {useEffect, useState} from "react";
import {Link, useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});


    useEffect(() => {
        axios.get("http://localhost:8000/api/product/"+id)
            .then(res => {
                
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);


    
    return(
        <div className="row my-5">
            <div className="col-2"></div>
            <div className="card text-center col-8">
                <div className="card-header "><h1>{product.name}</h1></div>
                <div className="card-body">
                    <h2>Precio: ${product.price}</h2>
                    <p> Descripción: 
                        { ' '+product.description}
                    </p>
                    
                    <Link to="/" className="btn btn-primary mx-2">Regresar</Link>

                </div>
            </div>
        </div>


    )


}

export default Product;