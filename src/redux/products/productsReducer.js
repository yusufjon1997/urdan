import { ProductsActionTypes } from "./productsActionTypes";

export const initialState = {
    products : [],
    loading : false,
    error : null,
    displayList : false,
    currentPage : 1,
    filteredProducts : [] 
}

export const productsReducer = (state = initialState , action = {} ) => {
    const { type , payload } = action;

    switch (type) {
        case ProductsActionTypes.fetch_start:
            return {...state , loading : true}
            
        case ProductsActionTypes.fetch_success:
            return {...state , loading : false , products : payload}

        case ProductsActionTypes.fetch_failed : 
            return {...state , loading : false , error : action.error}

        case ProductsActionTypes.display_list : 
            return { ...state , displayList : payload}
        
        case ProductsActionTypes.filterByCategory :
            return {...state , filteredProducts : payload !== 'All' ? state.products.filter( product => {
                return product.category === payload
            }) : state.products}

        case ProductsActionTypes.setCurrentPage : 
            return {...state , currentPage : payload}

        case ProductsActionTypes.searchProduct :
            return { ...state , filteredProducts : state.products.filter(product => product.name.toLowerCase().includes(payload.toLowerCase()))}
    
        default:
            return state;
    }

}