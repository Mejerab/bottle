const getFromLS = () =>{
    const setAsParse = localStorage.getItem('cart');
    if (setAsParse) {
        return JSON.parse(setAsParse);
    }
    return [];
}

const saveToLS = cart =>{
    const cartSrtingified = JSON.stringify(cart);
    localStorage.setItem('cart', cartSrtingified);
}

const addToLS = id =>{
    const cart = getFromLS();
    cart.push(id);
    saveToLS(cart);
}

export { addToLS }