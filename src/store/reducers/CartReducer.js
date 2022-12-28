import { ADDCARTDECREMENT, ADDCARTINCREMENT, ADDCARTRESET } from "../constants/CardConstant";

const initialCartCount = { count: 0 }

const addToCartReducer = (state = initialCartCount, action) => {
    switch (action.type) {
        case ADDCARTINCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case ADDCARTDECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case ADDCARTRESET:
            return {
                ...state,
                count: 0
            }
        default:
            return state;
    }
}

export default addToCartReducer;