export const selectCategories = (state) => {
    const unsortedCategories = state.products.products.map(product => product.category)
    const result = unsortedCategories.filter((category , index) => unsortedCategories.indexOf(category) === index );
    return [ "All" ,...result];
};

export const selectDisplayList = (state) => state.products.displayList;

export const selectCurrentPage = (state) => state.products.currentPage;

export const selectTotalProducts = (state) => state.products.products;

// export const selectNewProducts = (state) => {
//     const allProducts = state.products.products;
//     return allProducts.reverse().slice(0,4);
    
// }