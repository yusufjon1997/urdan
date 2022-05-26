export const selectCategories = (state) => {
    const unsortedCategories = state.categories.categoriesMap.map(category => category.category)
    const result = unsortedCategories.filter((category , index) => unsortedCategories.indexOf(category) == index );
    return result;
};

export const selectDisplayList = (state) => state.categories.displayList;