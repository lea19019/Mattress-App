import React, { useReducer, createContext } from "react";

const CartContext = createContext();

let initialState = {
    cart: 0,
};

const cartReducer = (state, action) => {
    let updatedCart;
    switch (action.type) {
        case "Get":
            return { cart: action.payload };
        case "Add":
            updatedCart = { cart: state.cart + 1 };
            return updatedCart;
        case "Remove":
            updatedCart = { cart: 0 };
            return updatedCart;
        default:
            console.log("default");
    };
};

const CartProvider = (props) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    if (!state) {
        dispatch({ type: "Get", payload: 0 });
    };

    return (
        <CartContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
