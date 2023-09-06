import React, { Fragment, useEffect, useState } from 'react'
import ProductCard from './ProductCard';


const Fakestore = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        let res = await fetch("https://fakestoreapi.com/products");
        let productList = await res.json();
        setProducts(productList);
        //console.log(productList);
    }
  return (
    <Fragment>
    {
        products.length === 0 ?
        <h1>Fetching Data...</h1> :
        <div>
            <h1>Fake Store</h1>
            <div>
            {console.log(products)}
            {
                products.map((product) => (
                    <ProductCard key={product.id} title={product.title} />
                ))
            }
            </div>
        </div>
    }
    </Fragment>
  )
}

export default Fakestore;