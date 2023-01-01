// /* eslint-disable default-case */
// import { HIGHTOLOW, LOWTOHIGH } from "../constants/SortingPriceConstant";

// const initialDefaultPrice = {}

// const priceReducer = (state = initialDefaultPrice, action) => {
//     switch (action.type) {
//         case HIGHTOLOW: 
//         return {
//             ...state
//         }
//     }
// }
const { createSlice } = require('@reduxjs/toolkit');

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
    },
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        }
    },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
