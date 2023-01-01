import { HIGHTOLOW, LOWTOHIGH } from "../constants/SortingPriceConstant";

export const sortingPriceHighToLow = () => {
    return {
        type: HIGHTOLOW
    }
}

export const sortingPriceLowToHigh = () => {
    return {
        type: LOWTOHIGH
    }
}