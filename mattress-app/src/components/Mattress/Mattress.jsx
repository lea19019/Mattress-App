import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../store/CartProvider.jsx";
import "./Mattress.scss";

const mattressesJSON = require("../../mattresses.json");

const Mattress = (props) => {
    const mattress = {
        name: "",
        price: 0,
        reviewRating: 0,
        imageFileName: "",
    };

    const { dispatch } = useContext(CartContext);
    const [mattresses, setMattresses] = useState(null);
    const [mattressDetail, setMattressDetail] = useState(mattress);
    const [isSelected, setIsSelected] = useState("classic");

    useEffect(() => {
        setMattresses(mattressesJSON.mattresses);
    }, []);

    useEffect(() => {
        if (mattresses) {
            setMattressDetail({ ...mattresses.classic });
        }
    }, [mattresses]);

    const handleMattress = (key, value) => {
        setMattressDetail(value);
        setIsSelected(key);
    };

    const handleAddToCart = () => {
        dispatch({
            type: "Add",
            payload: 1,
        });
    };

    return (
        <main>
            <div className="image">
                <img className="image-src" src={`images/${mattressDetail.imageFileName}`} alt={mattressDetail.name}></img>
            </div>

            <div className="info">
                <h2 className="info-title">Choose Your Mattress</h2>
                <div className="info-toggle">
                    <label>Select Mattress Type</label>
                    {mattresses && (
                        <div className="info-toggle-selector">
                            {Object.entries(mattresses).map(([key, value]) => {
                                return (
                                    <button
                                        key={value.name} alt={value.name}
                                        className={`option option${key === isSelected ? "-selected" : ""}`}
                                        onClick={() => { handleMattress(key, value); }}>
                                        {value.name}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>

                <div className="info-selected">
                    <div alt={`${mattressDetail.name}`} className="info-selected-row" >
                        <div className="name">{mattressDetail.name}</div>
                        <div className="price">{`$ ${parseFloat(mattressDetail.price).toFixed(2)}`}</div>
                    </div>
                    <div className="rating">Rating: {mattressDetail.reviewRating}</div>
                </div>

                <button className="add-cart" onClick={handleAddToCart}>Add to Cart</button>

            </div>
        </main>
    );
};

export default Mattress;
