
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import SingleCard from './SingleCard';


const ProductDetails = () => {
 

    const [product, setProduct] = useState({});

    const { _id } = useParams();
    const products = useLoaderData();

    
    

    useEffect(() => {
        const findProduct = products?.find(product => product._id == _id);
        setProduct(findProduct);
    }, [_id, products]);
    console.log(product)


    return (
        <div className="mx-auto bg-[#017BFF] py-10">
            <SingleCard product={product}></SingleCard>

        </div>
    );
};


export default ProductDetails;