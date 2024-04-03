'use client'

import {type Cart} from "@/api/types";
import React, {createContext, useState} from "react";

const useCartState = () => useState<Cart>({products: []});

export const CartContext = createContext<ReturnType<typeof useCartState> | null>(null);
export const useCart = () => {
    const cart = React.useContext(CartContext)
    if (!cart) {
        throw new Error("use cart must be used within a cart provider");
    }
    return cart;
}

const CardProvider = ({children}: { children: React.ReactNode }) => {
    const [cart, setCart] = useCartState();
    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    )
}

export default CardProvider
