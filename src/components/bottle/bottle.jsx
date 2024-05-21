import './bottle.css'

const Bottle = ({bottle, AddToCart}) => {
    const {name, img, price} = bottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h3>Price: {price}</h3>
            <button onClick={AddToCart} style={{backgroundColor: '#999999'}}>Purchase</button>
        </div>
    );
};

export default Bottle;