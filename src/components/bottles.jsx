import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./bottle/bottle";
import './bottles.css';
import { addToLS } from "../Utilities/localStorage";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart]  =useState([]);
    useEffect(() =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    const AddToCart = bottle =>{
        console.log(bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id)
    }

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <h3>Cart: {cart.length}</h3>
            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle 
                    key={bottle.name}
                AddToCart={AddToCart}
                bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;