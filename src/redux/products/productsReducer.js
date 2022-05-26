import { CategoryActionTypes } from "./productsActionTypes";

export const initialState = {
    categoriesMap : [],
    loading : false,
    error : null,
    displayList : false 
}

export const categoriesReducer = (state = initialState , action = {} ) => {
    const { type , payload } = action;

    switch (type) {
        case CategoryActionTypes.fetch_start:
            return {...state , loading : true}
        case CategoryActionTypes.fetch_success:
            return {...state , loading : false , categoriesMap : payload}
        case CategoryActionTypes.fetch_failed : 
            return {...state , loading : false , error : action.error}
        case CategoryActionTypes.display_list : 
            return { ...state , displayList : payload}
        default:
            return state;
    }

}