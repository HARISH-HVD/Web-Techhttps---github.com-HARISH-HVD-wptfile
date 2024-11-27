import Header from "./Header";
import { Footer } from "./Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { useSelector } from "react-redux";

export default function Product() {
    const location = useLocation()
    const [product, setProduct] = useState([])


    useEffect(() => {
        setProduct([
            { name: "Bag1", price: "600", image: "bag1.jpg" },
            { name: "Bag2", price: "600", image: "bag2.jpg" },
            { name: "Bag3", price: "600", image: "bag3.jpg" },
            { name: "Bag4", price: "600", image: "bag4.jpg" },
            { name: "Bag5", price: "600", image: "bag5.jpg" },
            { name: "Bag6", price: "600", image: "bag6.jpg" },

        ])

    }, [])

    return (<>
        <Header />
        {/* <h1>Product{location.state.name}</h1>
        <div>
            {product.map((p, i) => {
                return <ProductCard
                    key={i}
                    name={p.name}
                    price={p.price}
                    image={p.image} />
            }
            )}
        </div> */}

        <ProductCard data= {product}/>
        <Footer />
    </>)
}