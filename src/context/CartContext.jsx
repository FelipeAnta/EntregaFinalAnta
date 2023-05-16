import { createContext, useContext, useState } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (newProduct) => {
        const existingProductIndex = cartList.findIndex((p) => p.id === newProduct.id);
        if (existingProductIndex !== -1) {
            const updatedCartList = [...cartList];
            updatedCartList[existingProductIndex].cantidad += newProduct.cantidad;
            setCartList(updatedCartList);
        } else {
            setCartList([...cartList, newProduct]);
        }
        setTotalPrice(totalPrice + (newProduct.price * newProduct.cantidad));
    };

    const removeFromCart = (productId) => {
        const updatedCartList = cartList.filter((p) => p.id !== productId);
        const productToRemove = cartList.find((p) => p.id === productId);
        const productTotalPrice = productToRemove.price * productToRemove.cantidad;
        setTotalPrice(totalPrice - productTotalPrice);
        setCartList(updatedCartList);
    };
    const incrementProduct = (productId, amount = 1) => {
        const updatedCartList = [...cartList];
        const productToUpdate = updatedCartList.find((p) => p.id === productId);
        productToUpdate.cantidad += amount;
        setTotalPrice(totalPrice + productToUpdate.price * amount);
        setCartList(updatedCartList);
    };

    const decrementProduct = (productId, amount = 1) => {
        const updatedCartList = [...cartList];
        const productToUpdate = updatedCartList.find((p) => p.id === productId);
        if (productToUpdate.cantidad <= 1) {
            return;
        }
        productToUpdate.cantidad -= amount;
        setTotalPrice(totalPrice - productToUpdate.price * amount);
        setCartList(updatedCartList);
    };

    const vaciarCarrito = () => {
        setCartList([])
        setTotalPrice(0);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            totalPrice,
            removeFromCart,
            incrementProduct,
            decrementProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}