export const getSortedProducts = (products, sortType, sortValue) => {
    if (products && sortType && sortValue) {
        if (sortType === "filterSort") {
            let sortProducts = [...products];
            if (sortValue === "default") {
                return sortProducts;
            }
            if (sortValue === "priceHighToLow") {
                return sortProducts.sort((a, b) => {
                    return b.price - a.price;
                });
            }
            if (sortValue === "priceLowToHigh") {
                return sortProducts.sort((a, b) => {
                    return a.price - b.price;
                });
            }
        }
        return products;
    }
}