import { ADDCARTDECREMENT, ADDCARTINCREMENT, ADDCARTRESET } from "../constants/CardConstant"

export const addToCartIncrement = () => {
    return {
        type: ADDCARTINCREMENT
    }
}

export const addToCartDecrement = () => {
    return {
        type: ADDCARTDECREMENT
    }
}

export const addToCartReset = () => {
    return {
        type: ADDCARTRESET
    }
}